import React from 'react';
import { feature_data } from './feature-area-2';

const FeatureAreaThree = () => {
  return (
    <section className="easyunbox-features tp-feature-area pb-50 pt-50">
      <div className="container">
        <div className="row g-4">
          {feature_data.map((item, i) => (
            <div key={i} className="col-6 col-lg-3">
              <div className="easyunbox-feature-card">
                <div className="easyunbox-feature-card__icon">
                  {item.icon}
                </div>
                <div className="easyunbox-feature-card__body">
                  <h3 className="easyunbox-feature-card__title">{item.title}</h3>
                  <p className="easyunbox-feature-card__subtitle">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureAreaThree;
