/**
 * Single source of truth for company and contact information across the website.
 * Update these values in one place to reflect everywhere (footer, header, SEO, contact, hero).
 */

export const siteInfo = {
  companyName: "Easy Unbox",
  domain: "easy-unbox.com",
  websiteUrl: "https://easy-unbox.com",
  tagline:
    "Your one-stop shop for tech, fashion, books, stationery & more — delivered across India.",
  hero: {
    eyebrow: "Easy Unbox · Pan-India delivery",
    headline: "Unbox everyday essentials.",
    subtitle:
      "Tech, fashion, books and stationery — chosen for value and ease, only at easy-unbox.com.",
  },
};

export const contactInfo = {
  ...siteInfo,

  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  telLink: "tel:+919876543210",

  email: "info@easy-unbox.com",
  mailtoLink: "mailto:info@easy-unbox.com",

  address: {
    line1: "123, Main Road",
    line2: "Andheri West",
    city: "Mumbai",
    state: "Maharashtra",
    pin: "400058",
    country: "India",
  },
  addressDisplay:
    "123, Main Road, Andheri West, Mumbai, Maharashtra 400058, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.714912999623!2d72.8392143149002!3d19.113557987115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5e87d2e7f1d%3A0x2f2b2b2b2b2b2b2b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1678114595329!5m2!1sen!2sin",
  mapLink: "https://www.google.com/maps/place/Mumbai,+Maharashtra,+India",
};

export default contactInfo;
