export const siteConfig = {
  name: "SoftClinch Consulting Services",
  shortName: "SoftClinch",
  url: "https://softclinch.com",
  phone: "+91 94456 79878",
  phoneRaw: "+919445679878",
  phoneDisplay: "+91 94456 79878",
  email: "info@softclinch.com",
  whatsappNumber: "919445679878",
  whatsappFormatted: "+91 94456 79878",
  whatsappLink: "https://wa.me/919445679878",
  getWhatsAppUrl: (text?: string) =>
    text
      ? `https://wa.me/919445679878?text=${encodeURIComponent(text)}`
      : "https://wa.me/919445679878",
  address: {
    street: "No: 30, 53rd St, Ashok Nagar",
    full: "No: 30, 53rd St, opposite to Anjaneyar Temple, Ashok Nagar, Chennai, Tamil Nadu 600083",
    short: "No: 30, 53rd St, Ashok Nagar, Chennai, Tamil Nadu 600083",
    locality: "Ashok Nagar",
    city: "Chennai",
    state: "Tamil Nadu",
    postalCode: "600083",
    country: "IN",
  },
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61585112649434",
    instagram: "https://www.instagram.com/softclinch/?hl=en",
    threads: "https://www.threads.com/@softclinch?xmt=AQG0YGTQNLGQmWquCThvASSNbce7sVucAGgXk2vRRy9dXOE",
    linkedin: "https://www.linkedin.com/company/softclinch", // TODO: Add real LinkedIn company page URL
  },
};

export const CONTACT = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  phoneRaw: siteConfig.phoneRaw,
  whatsapp: siteConfig.whatsappNumber,
  whatsappFormatted: siteConfig.whatsappFormatted,
  whatsappLink: siteConfig.whatsappLink,
  getWhatsAppUrl: siteConfig.getWhatsAppUrl,
  address: siteConfig.address.full,
};
