/**
 * BE SPECIAL — Luxury Perfume E-Commerce Backend Server
 * Written in Node.js (Standard Native HTTP & FS - Zero Extra Dependencies Needed)
 * Port: 5000
 * Admin Dashboard: http://localhost:5000/admin
 * API Base: http://localhost:5000/api
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const DATA_DIR = path.join(__dirname, 'data');
const PUBLIC_DIR = path.join(__dirname, 'public');
const ROOT_PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Helper to safely read JSON file
const readJSON = (filename, defaultVal = []) => {
  try {
    const filePath = path.join(DATA_DIR, filename);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultVal, null, 2), 'utf-8');
      return defaultVal;
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    return defaultVal;
  }
};

// Helper to safely write JSON file
const writeJSON = (filename, data) => {
  try {
    const filePath = path.join(DATA_DIR, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error(`Error writing ${filename}:`, err);
    return false;
  }
};

// Sync updated products directly into React frontend data file (instant HMR update)
const syncProductsToFrontend = (products) => {
  try {
    const frontendPath = path.join(__dirname, '..', 'src', 'data', 'products.js');
    if (fs.existsSync(frontendPath)) {
      const content = `export const PRODUCTS = ${JSON.stringify(products, null, 2)};\n\nexport const getProductById = (id) => PRODUCTS.find((p) => p.id === id);\n`;
      fs.writeFileSync(frontendPath, content, 'utf-8');
      console.log('🔄 Synced products to src/data/products.js');
    }
  } catch (err) {
    console.error('Failed to sync products to frontend:', err);
  }
};

// Parse incoming JSON body
const parseBody = (req) => {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
  });
};

// Helper to send JSON responses with CORS
const sendJSON = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
};

// MIME Types for static files
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  // Handle CORS Preflight
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  // =========================================================================
  // API ROUTING
  // =========================================================================

  // --- STATS OVERVIEW ---
  if (pathname === '/api/stats' && method === 'GET') {
    const products = readJSON('products.json');
    const orders = readJSON('orders.json');
    const messages = readJSON('messages.json');
    const subscribers = readJSON('subscribers.json');

    const totalRevenue = orders.reduce((sum, ord) => sum + (Number(ord.total) || 0), 0);
    const pendingOrders = orders.filter((o) => o.status === 'Pending' || o.status === 'قيد الانتظار').length;
    const unreadMessages = messages.filter((m) => !m.read).length;

    return sendJSON(res, 200, {
      totalRevenue,
      totalOrders: orders.length,
      pendingOrders,
      totalProducts: products.length,
      totalSubscribers: subscribers.length,
      unreadMessages,
      recentOrders: orders.slice(0, 5)
    });
  }

  // --- AVAILABLE IMAGES LIST & UPLOAD ---
  if (pathname === '/api/images' && method === 'GET') {
    const perfumesDir = path.join(ROOT_PUBLIC_DIR, 'perfumes');
    let images = [];
    if (fs.existsSync(perfumesDir)) {
      const files = fs.readdirSync(perfumesDir);
      images = files
        .filter((f) => /\.(jpg|jpeg|png|webp|svg)$/i.test(f))
        .map((f) => `/perfumes/${f}`);
    }
    return sendJSON(res, 200, images);
  }

  if (pathname === '/api/upload' && method === 'POST') {
    const body = await parseBody(req);
    if (!body.base64 || !body.filename) {
      return sendJSON(res, 400, { error: 'Missing filename or image data' });
    }
    try {
      const cleanName = path.basename(body.filename).replace(/[^a-zA-Z0-9._-]/g, '_');
      const base64Data = body.base64.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      const perfumesDir = path.join(ROOT_PUBLIC_DIR, 'perfumes');
      if (!fs.existsSync(perfumesDir)) {
        fs.mkdirSync(perfumesDir, { recursive: true });
      }
      const filePath = path.join(perfumesDir, cleanName);
      fs.writeFileSync(filePath, buffer);
      return sendJSON(res, 201, {
        message: 'Image uploaded successfully',
        url: `/perfumes/${cleanName}`,
        filename: cleanName
      });
    } catch (err) {
      console.error('Image upload failed:', err);
      return sendJSON(res, 500, { error: 'Failed to save image' });
    }
  }

  // --- PRODUCTS CRUD ---
  if (pathname === '/api/products' && method === 'GET') {
    const products = readJSON('products.json');
    const category = parsedUrl.searchParams.get('category');
    const gender = parsedUrl.searchParams.get('gender');
    const search = parsedUrl.searchParams.get('search');

    let result = [...products];
    if (category && category !== 'all') {
      result = result.filter((p) => p.category === category);
    }
    if (gender && gender !== 'all') {
      result = result.filter((p) => p.gender === gender);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q) ||
          p.nameAr?.includes(q)
      );
    }
    return sendJSON(res, 200, result);
  }

  if (pathname.startsWith('/api/products/') && method === 'GET') {
    const id = pathname.replace('/api/products/', '');
    const products = readJSON('products.json');
    const item = products.find((p) => p.id === id);
    if (!item) return sendJSON(res, 404, { error: 'Product not found' });
    return sendJSON(res, 200, item);
  }

  if (pathname === '/api/products' && method === 'POST') {
    const body = await parseBody(req);
    const products = readJSON('products.json');

    const newProduct = {
      id: body.id || 'perfume-' + Date.now(),
      brand: body.brand || 'Be Special Privé',
      name: body.name || 'New Luxury Perfume',
      nameAr: body.nameAr || body.name || 'عطر فاخر جديد',
      category: body.category || 'unisex',
      gender: body.gender || 'unisex',
      concentration: body.concentration || 'Eau de Parfum',
      size: body.size || '100ml / 3.4 oz',
      price: Number(body.price) || 99,
      originalPrice: body.originalPrice ? Number(body.originalPrice) : null,
      discount: body.discount || null,
      rating: Number(body.rating) || 5.0,
      reviewsCount: Number(body.reviewsCount) || 1,
      isBestSeller: Boolean(body.isBestSeller),
      isNew: true,
      inStock: body.inStock !== false,
      sku: body.sku || 'BSP-' + Math.floor(1000 + Math.random() * 9000),
      image: body.image || '/perfumes/Arrogate blue de.jpg',
      shortDescEn: body.shortDescEn || 'A newly composed signature fragrance.',
      shortDescAr: body.shortDescAr || 'عطر فاخر مميز تم تركيبه بعناية فائقة.',
      notes: body.notes || {
        topEn: 'Fresh Bergamot, Pink Pepper',
        topAr: 'برغموت منعش، فلفل وردي',
        heartEn: 'Rose, Jasmine',
        heartAr: 'ورد جوري، ياسمين',
        baseEn: 'Amber, Cedarwood',
        baseAr: 'عنبر، خشب الأرز'
      }
    };

    products.unshift(newProduct);
    writeJSON('products.json', products);
    syncProductsToFrontend(products);
    return sendJSON(res, 201, { message: 'Product created successfully', product: newProduct });
  }

  if (pathname.startsWith('/api/products/') && (method === 'PUT' || method === 'PATCH')) {
    const id = pathname.replace('/api/products/', '');
    const body = await parseBody(req);
    const products = readJSON('products.json');
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) return sendJSON(res, 404, { error: 'Product not found' });

    products[index] = {
      ...products[index],
      ...body,
      price: body.price !== undefined ? Number(body.price) : products[index].price,
      originalPrice: body.originalPrice !== undefined ? (body.originalPrice ? Number(body.originalPrice) : null) : products[index].originalPrice
    };

    writeJSON('products.json', products);
    syncProductsToFrontend(products);
    return sendJSON(res, 200, { message: 'Product updated successfully', product: products[index] });
  }

  if (pathname.startsWith('/api/products/') && method === 'DELETE') {
    const id = pathname.replace('/api/products/', '');
    let products = readJSON('products.json');
    const initialLen = products.length;
    products = products.filter((p) => p.id !== id);

    if (products.length === initialLen) {
      return sendJSON(res, 404, { error: 'Product not found' });
    }

    writeJSON('products.json', products);
    syncProductsToFrontend(products);
    return sendJSON(res, 200, { message: 'Product deleted successfully', id });
  }

  // --- ORDERS MANAGEMENT ---
  if (pathname === '/api/orders' && method === 'GET') {
    const orders = readJSON('orders.json');
    return sendJSON(res, 200, orders);
  }

  if (pathname === '/api/orders' && method === 'POST') {
    const body = await parseBody(req);
    const orders = readJSON('orders.json');

    const newOrder = {
      id: body.id || 'BSP-' + Math.floor(100000 + Math.random() * 900000),
      customer: body.customer || {
        fullName: 'VIP Customer',
        email: 'customer@example.com',
        phone: '',
        address: '',
        city: '',
        country: 'United States'
      },
      items: body.items || [],
      subtotal: Number(body.subtotal) || 0,
      shipping: Number(body.shipping) || 0,
      total: Number(body.total) || 0,
      deliveryMethod: body.deliveryMethod || 'standard',
      paymentMethod: body.paymentMethod || 'Credit Card',
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    orders.unshift(newOrder);
    writeJSON('orders.json', orders);
    return sendJSON(res, 201, { message: 'Order created', order: newOrder });
  }

  if (pathname.startsWith('/api/orders/') && (method === 'PATCH' || method === 'PUT')) {
    const id = pathname.replace('/api/orders/', '').replace('/status', '');
    const body = await parseBody(req);
    const orders = readJSON('orders.json');
    const index = orders.findIndex((o) => o.id === id);

    if (index === -1) return sendJSON(res, 404, { error: 'Order not found' });

    if (body.status) orders[index].status = body.status;
    if (body.customer) orders[index].customer = { ...orders[index].customer, ...body.customer };

    writeJSON('orders.json', orders);
    return sendJSON(res, 200, { message: 'Order updated', order: orders[index] });
  }

  if (pathname.startsWith('/api/orders/') && method === 'DELETE') {
    const id = pathname.replace('/api/orders/', '');
    let orders = readJSON('orders.json');
    orders = orders.filter((o) => o.id !== id);
    writeJSON('orders.json', orders);
    return sendJSON(res, 200, { message: 'Order deleted', id });
  }

  // --- SITE SETTINGS ---
  if (pathname === '/api/settings' && method === 'GET') {
    const settings = readJSON('settings.json', {});
    return sendJSON(res, 200, settings);
  }

  if (pathname === '/api/settings' && (method === 'PUT' || method === 'POST')) {
    const body = await parseBody(req);
    const settings = readJSON('settings.json', {});
    const updated = { ...settings, ...body };
    writeJSON('settings.json', updated);
    return sendJSON(res, 200, { message: 'Site settings updated successfully', settings: updated });
  }

  // --- MESSAGES (CONTACT US) ---
  if (pathname === '/api/messages' && method === 'GET') {
    const messages = readJSON('messages.json');
    return sendJSON(res, 200, messages);
  }

  if (pathname === '/api/messages' && method === 'POST') {
    const body = await parseBody(req);
    const messages = readJSON('messages.json');
    const newMsg = {
      id: 'MSG-' + Date.now(),
      name: body.name || 'Customer',
      email: body.email || '',
      subject: body.subject || 'General Inquiry',
      message: body.message || '',
      date: new Date().toISOString(),
      read: false
    };
    messages.unshift(newMsg);
    writeJSON('messages.json', messages);
    return sendJSON(res, 201, { message: 'Message sent successfully', inquiry: newMsg });
  }

  if (pathname.startsWith('/api/messages/') && (method === 'PATCH' || method === 'PUT')) {
    const id = pathname.replace('/api/messages/', '');
    const body = await parseBody(req);
    let messages = readJSON('messages.json');
    const index = messages.findIndex((m) => m.id === id);
    if (index === -1) return sendJSON(res, 404, { error: 'Message not found' });
    messages[index] = { ...messages[index], ...body };
    writeJSON('messages.json', messages);
    return sendJSON(res, 200, { message: 'Message updated', inquiry: messages[index] });
  }

  if (pathname.startsWith('/api/messages/') && method === 'DELETE') {
    const id = pathname.replace('/api/messages/', '');
    let messages = readJSON('messages.json');
    messages = messages.filter((m) => m.id !== id);
    writeJSON('messages.json', messages);
    return sendJSON(res, 200, { message: 'Message deleted', id });
  }

  // --- SUBSCRIBERS (NEWSLETTER) ---
  if (pathname === '/api/subscribers' && method === 'GET') {
    const subscribers = readJSON('subscribers.json');
    return sendJSON(res, 200, subscribers);
  }

  if (pathname.startsWith('/api/subscribers/') && method === 'DELETE') {
    const id = pathname.replace('/api/subscribers/', '');
    let subscribers = readJSON('subscribers.json');
    subscribers = subscribers.filter((s) => s.id !== id && s.email !== id);
    writeJSON('subscribers.json', subscribers);
    return sendJSON(res, 200, { message: 'Subscriber deleted', id });
  }

  if (pathname === '/api/subscribers' && method === 'POST') {
    const body = await parseBody(req);
    const subscribers = readJSON('subscribers.json');
    const email = (body.email || '').trim().toLowerCase();

    if (!email || !email.includes('@')) {
      return sendJSON(res, 400, { error: 'Invalid email address' });
    }

    if (!subscribers.some((s) => s.email === email)) {
      subscribers.unshift({
        id: 'SUB-' + Date.now(),
        email,
        subscribedAt: new Date().toISOString()
      });
      writeJSON('subscribers.json', subscribers);
    }
    return sendJSON(res, 201, { message: 'Subscribed successfully', email });
  }

  // =========================================================================
  // SERVE ADMIN DASHBOARD & STATIC FILES
  // =========================================================================

  // Root redirect to /admin
  if (pathname === '/' || pathname === '/admin' || pathname === '/admin/') {
    const adminHtmlPath = path.join(PUBLIC_DIR, 'admin', 'index.html');
    if (fs.existsSync(adminHtmlPath)) {
      const html = fs.readFileSync(adminHtmlPath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(html);
    }
  }

  // Serve static files from backend/public
  const requestedFile = path.join(PUBLIC_DIR, pathname);
  if (fs.existsSync(requestedFile) && fs.statSync(requestedFile).isFile()) {
    const ext = path.extname(requestedFile).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const content = fs.readFileSync(requestedFile);
    res.writeHead(200, { 'Content-Type': contentType });
    return res.end(content);
  }

  // Serve static images from root/public (e.g. /perfumes/...)
  const rootPublicFile = path.join(ROOT_PUBLIC_DIR, pathname);
  if (fs.existsSync(rootPublicFile) && fs.statSync(rootPublicFile).isFile()) {
    const ext = path.extname(rootPublicFile).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const content = fs.readFileSync(rootPublicFile);
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    return res.end(content);
  }

  // Fallback 404
  sendJSON(res, 404, { error: 'Route not found' });
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`👑 SCENTORA — Luxury Fragrances & Body Care Backend & Admin`);
  console.log(`📡 API Server:      http://localhost:${PORT}/api`);
  console.log(`🎛️  Admin Dashboard: http://localhost:${PORT}/admin`);
  console.log(`==================================================\n`);
});

