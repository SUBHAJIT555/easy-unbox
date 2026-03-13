import React from 'react';
import Link from 'next/link';

const ShopBreadcrumb = ({ title, subtitle }) => {
  return (
    <section className="easyunbox-breadcrumb pt-100 pb-5">
      <div className="container">
        <div className="easyunbox-breadcrumb__inner">
          <h1 className="easyunbox-breadcrumb__title">{title}</h1>
          <nav className="easyunbox-breadcrumb__nav" aria-label="Breadcrumb">
            <span>
              <Link href="/">Home</Link>
            </span>
            <span className="easyunbox-breadcrumb__sep" aria-hidden="true">/</span>
            <span>{subtitle}</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ShopBreadcrumb;
