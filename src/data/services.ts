export interface Service { slug: string; name: string; image?: string; description?: string; originalSource: string; }
export const services: Service[] = [
  {
    "slug": "insaat",
    "name": "İnşaat",
    "image": "/images/services/insaat.avif",
    "description": "Tasarım, uygulama, iç mekân, peyzaj ve altyapı işlerinde çalışıyoruz.",
    "originalSource": "https://www.durmusaydemirinsaat.com/hizmet/insaat"
  },
  {
    "slug": "emlak",
    "name": "Emlak",
    "image": "/images/services/emlak.avif",
    "originalSource": "https://www.durmusaydemirinsaat.com/hizmet/emlak"
  },
  {
    "slug": "otomotiv",
    "name": "Otomotiv",
    "image": "/images/services/otomotiv.avif",
    "description": "Otomotiv alanındaki çalışmalarımızı pazar ve teknoloji değişimlerini takip ederek sürdürüyoruz.",
    "originalSource": "https://www.durmusaydemirinsaat.com/hizmet/otomotiv"
  },
  {
    "slug": "hayvancilik",
    "name": "Hayvancılık",
    "image": "/images/services/hayvancilik.avif",
    "description": "Antalya’da bulunan 20.000 m² kapalı alana sahip tesisimizde süt üretimi ve büyükbaş damızlık hayvan yetiştiriciliği yapılmaktadır.",
    "originalSource": "https://www.durmusaydemirinsaat.com/hizmet/hayvancilik"
  }
];
