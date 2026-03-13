import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import contactInfo, { siteInfo } from '@/data/contact-info';
import { Email, Location } from '@/svg';
import logo from '@assets/img/logo/logo.svg';
import pay from '@assets/img/footer/footer-pay.png';
import { submitToApi } from '@/lib/submit-api';
import { notifyError, notifySuccess } from '@/utils/toast';

const FooterTwo = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email?.trim() ?? '';
    if (!trimmed) return;
    setSubmitting(true);
    const result = await submitToApi({ formType: 'newsletter', email: trimmed });
    setSubmitting(false);
    if (result.success) {
      notifySuccess('Subscribed successfully!');
      setEmail('');
    } else {
      notifyError(result.error || 'Subscription failed.');
    }
  };

  return (
    <footer className="easyunbox-footer">
      <div className="easyunbox-footer__top">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="easyunbox-footer__brand">
                <Link href="/" className="easyunbox-footer__logo">
                  <Image src={logo} alt={siteInfo.companyName} />
                </Link>
                <div className="easyunbox-footer__contact-block">
                  <p className="easyunbox-footer__contact-label">Got questions? Call us</p>
                  <a href={contactInfo.telLink} className="easyunbox-footer__phone">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="easyunbox-footer__contact-list">
                  <a href={contactInfo.mailtoLink} className="easyunbox-footer__contact-item">
                    <span className="easyunbox-footer__contact-icon">
                      <Email />
                    </span>
                    <span>{contactInfo.email}</span>
                  </a>
                  <a
                    href={contactInfo.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="easyunbox-footer__contact-item"
                  >
                    <span className="easyunbox-footer__contact-icon">
                      <Location />
                    </span>
                    <span>{contactInfo.addressDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
              <div className="easyunbox-footer__col">
                <h4 className="easyunbox-footer__title">Quick Links</h4>
                <ul className="easyunbox-footer__links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/shop">Shop</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="easyunbox-footer__col">
                <h4 className="easyunbox-footer__title">Legal</h4>
                <ul className="easyunbox-footer__links">
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                  <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
                  <li><Link href="/return-policy">Refund Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7">
              <div className="easyunbox-footer__col easyunbox-footer__col--subscribe">
                <h4 className="easyunbox-footer__title">Subscribe</h4>
                <p className="easyunbox-footer__subscribe-desc">Our conversation is just getting started</p>
                <form onSubmit={handleNewsletterSubmit} className="easyunbox-footer__subscribe-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={submitting}
                    className="easyunbox-footer__subscribe-input"
                  />
                  <button type="submit" disabled={submitting} className="easyunbox-footer__subscribe-btn">
                    {submitting ? 'Sending…' : 'Subscribe'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="easyunbox-footer__bottom">
        <div className="container">
          <div className="easyunbox-footer__bottom-inner">
            <p className="easyunbox-footer__copyright">
              © {new Date().getFullYear()} {siteInfo.companyName}. All Rights Reserved.
            </p>
            <div className="easyunbox-footer__payment">
              <Image src={pay} alt="Payment methods" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
