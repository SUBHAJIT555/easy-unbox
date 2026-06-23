import React, { useState } from 'react';
import contactInfo, { siteInfo } from '@/data/contact-info';

const faqData = ({ email, phone, companyName }) => [
  {
    id: 1,
    question: 'What products does Easy Unbox sell?',
    answer: `${companyName} is your one-stop shop for mobile accessories, smart gadgets, computer and home electronics, books, stationery, men's, women's and kids wear, and fashion accessories. Browse the Shop page to explore all categories.`,
  },
  {
    id: 2,
    question: 'How do I request a quote?',
    answer: 'Add the products you want to your cart, go to Checkout, and submit your details. Our team will review your request and send a personalized quote to your email within 1–2 business days.',
  },
  {
    id: 3,
    question: 'Do you deliver across India?',
    answer: 'Yes. We ship to most locations across India. Delivery time and shipping charges depend on your pin code and the items ordered. Final shipping details will be included in your quote.',
  },
  {
    id: 4,
    question: 'Do I need an account to place an order?',
    answer: 'No account is required. You can browse products, add them to your cart, and request a quote using the contact details you provide at checkout.',
  },
  {
    id: 5,
    question: 'What is your return and refund policy?',
    answer: 'We want you to be fully satisfied with your purchase. Please see our Return Policy page for eligibility, timeframes, and step-by-step instructions on how to return or exchange an item.',
  },
  {
    id: 6,
    question: 'How can I contact customer support?',
    answer: `Reach us through the Contact page, email us at ${email}, or call ${phone}. We're happy to help with quotes, product questions, orders, and any other enquiries.`,
  },
];

const FaqArea = () => {
  const [openId, setOpenId] = useState(null);
  const faqs = faqData({
    email: contactInfo.email,
    phone: contactInfo.phone,
    companyName: siteInfo.companyName,
  });

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <section className="tp-terms-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-terms-wrapper">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <h3 className="tp-section-title-4 mb-20">Frequently Asked Questions</h3>
                </div>
                <div className="tp-faq-content">
                  {faqs.map((item) => (
                    <div
                      key={item.id}
                      className={`tp-faq-item mb-15 ${openId === item.id ? 'active' : ''}`}
                      style={{
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        overflow: 'hidden',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(item.id)}
                        className="tp-faq-question w-100 text-start d-flex align-items-center justify-content-between p-4"
                        style={{
                          background: openId === item.id ? '#f9f9f9' : '#fff',
                          border: 'none',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: 'var(--tp-heading-secondary)',
                          cursor: 'pointer',
                        }}
                      >
                        {item.question}
                        <span style={{ fontSize: '20px', transition: 'transform 0.2s', transform: openId === item.id ? 'rotate(180deg)' : 'rotate(0)' }}>
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </button>
                      <div
                        className="tp-faq-answer"
                        style={{
                          maxHeight: openId === item.id ? '500px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.3s ease',
                        }}
                      >
                        <p className="p-4 pt-0 mb-0" style={{ fontSize: '15px', lineHeight: '1.8', color: '#555' }}>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;
