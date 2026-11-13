import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
    } catch (err) {
      console.log('Message sent locally (backend offline):', err);
    }

    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-contact">
      <div className="shop-header-banner">
        <div className="container">
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            CLIENT SERVICE
          </span>
          <h1 className="shop-header-title">{t.contactPage.title}</h1>
          <p className="shop-header-subtitle">{t.contactPage.subtitle}</p>
        </div>
      </div>

      <div className="container contact-content-container">
        <div className="contact-grid">
          {/* Left: Info Cards */}
          <div className="contact-info-cards">
            <div className="contact-card">
              <MapPin size={22} className="gold-icon" />
              <h4>{lang === 'ar' ? 'العنوان والمقر' : 'Boutique Locations'}</h4>
              <p>{t.footer.contactInfo.address}</p>
            </div>

            <div className="contact-card">
              <Phone size={22} className="gold-icon" />
              <h4>{lang === 'ar' ? 'الهاتف المباشر' : 'Direct Line'}</h4>
              <p dir="ltr">{t.footer.contactInfo.phone}</p>
            </div>

            <div className="contact-card">
              <Mail size={22} className="gold-icon" />
              <h4>{lang === 'ar' ? 'البريد الإلكتروني' : 'VIP Concierge'}</h4>
              <p>{t.footer.contactInfo.email}</p>
            </div>

            <div className="contact-card">
              <Clock size={22} className="gold-icon" />
              <h4>{lang === 'ar' ? 'ساعات العمل' : 'Consultation Hours'}</h4>
              <p>{t.footer.contactInfo.hours}</p>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="contact-form-box">
            {submitted ? (
              <div className="contact-success-notice">
                <CheckCircle2 size={44} className="gold-icon" />
                <h3>{lang === 'ar' ? 'تم استلام رسالتك' : 'Message Received'}</h3>
                <p>{t.contactPage.sent}</p>
                <button
                  type="button"
                  className="btn-gold"
                  onClick={() => setSubmitted(false)}
                >
                  {lang === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>{t.contactPage.name} *</label>
                    <input
                      type="text"
                      required
                      placeholder="Sarah Miller"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.contactPage.email} *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>{t.contactPage.subject} *</label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ar' ? 'استفسار عن عطر أو طلب خاص' : 'Fragrance Consultation / Order Inquiry'}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>{t.contactPage.message} *</label>
                  <textarea
                    rows="5"
                    required
                    placeholder={t.contactPage.message}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-gold btn-full">
                  <span>{t.contactPage.sendBtn}</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

