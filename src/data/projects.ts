export interface ContentSection { title?: string; body?: string; items?: string[]; }
export interface Project { id: string; slug: string; name: string; status: 'Tamamlanan' | 'Devam Eden' | 'Belirtilmemiş'; location?: string; apartmentTypes: string[]; shortDescription?: string; sections: ContentSection[]; coverImage?: string; gallery: string[]; originalSource: string; sourceFile: string; }
export const projects: Project[] = [
  {
    "id": "aydemir-4-apartmani",
    "slug": "aydemir-4-apartmani",
    "name": "Aydemir 4 Apartmanı",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [],
    "coverImage": "/images/projects/aydemir-4-apartmani/cover.avif",
    "gallery": [
      "/images/projects/aydemir-4-apartmani/gallery-01.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydemir-4-apartmani",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydemir-4-apartmani.html"
  },
  {
    "id": "aydemir-5-apartmani",
    "slug": "aydemir-5-apartmani",
    "name": "Aydemir 5 Apartmanı",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [],
    "gallery": [],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydemir-5-apartmani",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydemir-5-apartmani.html"
  },
  {
    "id": "aydemir-7-apartmani",
    "slug": "aydemir-7-apartmani",
    "name": "Aydemir 7 Apartmanı",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [],
    "coverImage": "/images/projects/aydemir-7-apartmani/cover.avif",
    "gallery": [
      "/images/projects/aydemir-7-apartmani/gallery-01.avif",
      "/images/projects/aydemir-7-apartmani/gallery-02.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydemir-7-apartmani",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydemir-7-apartmani.html"
  },
  {
    "id": "aydemir-9-apartmani",
    "slug": "aydemir-9-apartmani",
    "name": "Aydemir 9 Apartmanı",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [],
    "coverImage": "/images/projects/aydemir-9-apartmani/cover.avif",
    "gallery": [
      "/images/projects/aydemir-9-apartmani/gallery-01.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydemir-9-apartmani",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydemir-9-apartmani.html"
  },
  {
    "id": "aydemir-cadde",
    "slug": "aydemir-cadde",
    "name": "Aydemir Cadde",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "shortDescription": "Aydemir İnşaat güvencesiyle hayata geçirilen bu site, hem güvenli hem de konforlu bir yaşam sunuyor. Modern tasarımı ve site içerisindeki sosyal alanları ile yatırımcılar ve…",
    "sections": [
      {
        "title": "Site Özellikleri",
        "items": [
          "Açık yüzme havuzu",
          "Çocuk oyun parkı",
          "Güvenlik kameraları ve kamelyalar",
          "Açık otopark"
        ]
      },
      {
        "title": "Daire Özellikleri",
        "items": [
          "Yerden ısıtma",
          "Asansör",
          "Ankastre 3’lü set",
          "Klima alt yapısı",
          "Ebeveyn banyosu",
          "Giyinme odası",
          "Elektrikli panjur",
          "Vestiyer"
        ]
      },
      {
        "title": "Satış Avantajları",
        "items": [
          "Taksitli ve takas imkânı",
          "Yüksek kredi desteği"
        ]
      },
      {
        "body": "Aydemir İnşaat güvencesiyle hayata geçirilen bu site, hem güvenli hem de konforlu bir yaşam sunuyor. Modern tasarımı ve site içerisindeki sosyal alanları ile yatırımcılar ve aileler için ideal bir tercih oluşturuyor."
      }
    ],
    "coverImage": "/images/projects/aydemir-cadde/cover.avif",
    "gallery": [
      "/images/projects/aydemir-cadde/gallery-01.avif",
      "/images/projects/aydemir-cadde/gallery-02.avif",
      "/images/projects/aydemir-cadde/gallery-03.avif",
      "/images/projects/aydemir-cadde/gallery-04.avif",
      "/images/projects/aydemir-cadde/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydemir-cadde",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydemir-cadde.html"
  },
  {
    "id": "aydemir-corner",
    "slug": "aydemir-corner",
    "name": "Aydemir Corner",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [
      {
        "body": "PROJE GENEL ÖZELLİKLERİ"
      },
      {
        "body": "Deprem yönetmeliğine uygun karkas yapı,"
      },
      {
        "body": "C-25 sınıfı yüksek dayanımlı beton,"
      },
      {
        "body": "Ses ve ısı yalıtımı,"
      },
      {
        "body": "Merdivenler, küpeşteler birinci sınıf mermer,"
      },
      {
        "body": "Her daire için günısı platformu,"
      },
      {
        "body": "Alüminyum merdiven korkulukları,"
      },
      {
        "body": "DAİRE ÖZELLİKLERİ"
      },
      {
        "body": "Dış duvarlarda ısı yalıtımlı ızotuğla,"
      },
      {
        "body": "Isı camlı pvc renkli doğrama"
      },
      {
        "body": "Lake panel kapı"
      },
      {
        "body": "Laminant parke"
      },
      {
        "body": "High gloss mutfak dolapları,"
      },
      {
        "body": "Mutfak tezgahları granit mermer,"
      },
      {
        "body": "Banyoda dekoratif seramik,"
      },
      {
        "body": "Gömme rezavauar, duşakabin,"
      },
      {
        "body": "Merkezi uydu sistemi"
      },
      {
        "body": "Görüntülü diafon"
      },
      {
        "body": "Daire kapıları çelik kapı,"
      },
      {
        "body": "Asma tava uygulaması,"
      },
      {
        "body": "Özel tasarım tavanlar,"
      },
      {
        "body": "Dekoratif balkon korkuluk sistemi"
      },
      {
        "body": "Giyinme odası,"
      },
      {
        "body": "Ebeveyn banyosu."
      }
    ],
    "coverImage": "/images/projects/aydemir-corner/cover.avif",
    "gallery": [
      "/images/projects/aydemir-corner/gallery-01.avif",
      "/images/projects/aydemir-corner/gallery-02.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydemir-corner",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydemir-corner.html"
  },
  {
    "id": "aydemir-doga-sitesi",
    "slug": "aydemir-doga-sitesi",
    "name": "Aydemir Doğa Sitesi",
    "status": "Devam Eden",
    "location": "Aktoprak Mahallesi, Antalya",
    "apartmentTypes": [
      "2+1"
    ],
    "shortDescription": "Kepez’in gelişen bölgelerinden Aktoprak Mahallesi’nde inşa edilen Aydemir Doğa Sitesi, modern mimari ve güçlü teknik altyapısıyla öne çıkıyor. 3788 m² arsa üzerinde kurulan proje,…",
    "sections": [
      {
        "body": "Aydemir Doğa Sitesi – Antalya Kepez / Aktoprak Mahallesi – Aydemir İnşaat Güvencesiyle"
      },
      {
        "body": "Kepez’in gelişen bölgelerinden Aktoprak Mahallesi’nde inşa edilen Aydemir Doğa Sitesi, modern mimari ve güçlü teknik altyapısıyla öne çıkıyor. 3788 m² arsa üzerinde kurulan proje, 4 blokta toplam 75 adet 2+1 daireden oluşmaktadır."
      },
      {
        "title": "Genel Özellikler",
        "items": [
          "Deprem yönetmeliğine uygun karkas yapı",
          "C-25/30 sınıfı yüksek dayanımlı beton",
          "Ses ve ısı yalıtımı",
          "1. sınıf mermer merdivenler ve köşebentler",
          "Her daireye özel güneş platformu",
          "Alüminyum merdiven korkulukları",
          "Şifreli bina giriş kapısı",
          "Güvenlik ve lobi",
          "Çocuk parkı, asansör, kamelya",
          "Yüzme havuzu ve güvenlik kulübesi"
        ]
      },
      {
        "title": "Daire Özellikleri",
        "items": [
          "Dış cephede ısı yalıtımı (İzotuğla + Asmolen)",
          "Isıcamlı PVC renkli doğrama",
          "Lake panel kapılar, laminant parke",
          "High Gloss mutfak dolapları",
          "Dekoratif banyo seramikleri",
          "Gömme rezervuar, duşakabin",
          "Merkezi uydu sistemi",
          "Görüntülü diafon",
          "Ankastre set ve vestiyer"
        ]
      },
      {
        "body": "Aydemir Doğa Sitesi, güvenlikli site yaşamı, sosyal donatıları ve modern tasarımı ile hem yatırım hem de konfor arayanlar için ideal bir seçenektir. Antalya’nın yükselen bölgelerinden Kepez / Aktoprak’ta, Aydemir İnşaat güvencesiyle sizleri bekliyor."
      }
    ],
    "coverImage": "/images/projects/aydemir-doga-sitesi/cover.avif",
    "gallery": [
      "/images/projects/aydemir-doga-sitesi/gallery-01.avif",
      "/images/projects/aydemir-doga-sitesi/gallery-02.avif",
      "/images/projects/aydemir-doga-sitesi/gallery-03.avif",
      "/images/projects/aydemir-doga-sitesi/gallery-04.avif",
      "/images/projects/aydemir-doga-sitesi/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydemir-doga-sitesi",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydemir-doga-sitesi.html"
  },
  {
    "id": "aydemir-konutlari",
    "slug": "aydemir-konutlari",
    "name": "Aydemir Konutları",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [
      {
        "body": "PROJE GENEL ÖZELLİKLERİ"
      },
      {
        "body": "Deprem yönetmeliğine uygun karkas yapı,"
      },
      {
        "body": "C-25 sınıfı yüksek dayanımlı beton,"
      },
      {
        "body": "Ses ve ısı yalıtımı,"
      },
      {
        "body": "Merdivenler, küpeşteler birinci sınıf mermer,"
      },
      {
        "body": "Her daire için günısı platformu,"
      },
      {
        "body": "Alüminyum merdiven korkulukları,"
      },
      {
        "body": "Şifreli bina giriş kapısı, güvenlik ve lobi"
      },
      {
        "body": "Çocuk parkı kalimya"
      },
      {
        "body": "Asansör,"
      },
      {
        "body": "Yüzme havuzu"
      },
      {
        "body": "DAİRE ÖZELLİKLERİ"
      },
      {
        "body": "Dış duvarlarda ısı yalıtımlı ızotuğla,"
      },
      {
        "body": "Asma tavan uygulaması,"
      },
      {
        "body": "Isı camlı pvc renkli doğrama,"
      },
      {
        "body": "Lake panel kapı,"
      },
      {
        "body": "Laminant parke,"
      },
      {
        "body": "Giyinme odası, ebeveyn banyosu,"
      },
      {
        "body": "High gloss mutfak dolapları,"
      },
      {
        "body": "Akrilik mutfak tezgahı,"
      },
      {
        "body": "Banyoda dekoratif seramik,"
      },
      {
        "body": "Gömme rezavauar, duşakabin,"
      },
      {
        "body": "Merkezi uydu sistemi"
      },
      {
        "body": "Görüntülü diafon"
      },
      {
        "body": "Vestiyer"
      },
      {
        "body": "Ankasre set."
      }
    ],
    "coverImage": "/images/projects/aydemir-konutlari/cover.avif",
    "gallery": [
      "/images/projects/aydemir-konutlari/gallery-01.avif",
      "/images/projects/aydemir-konutlari/gallery-02.avif",
      "/images/projects/aydemir-konutlari/gallery-03.avif",
      "/images/projects/aydemir-konutlari/gallery-04.avif",
      "/images/projects/aydemir-konutlari/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydemir-konutlari",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydemir-konutlari.html"
  },
  {
    "id": "aydemir-plaza",
    "slug": "aydemir-plaza",
    "name": "Aydemir Plaza",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [],
    "coverImage": "/images/projects/aydemir-plaza/cover.avif",
    "gallery": [
      "/images/projects/aydemir-plaza/gallery-01.avif",
      "/images/projects/aydemir-plaza/gallery-02.avif",
      "/images/projects/aydemir-plaza/gallery-03.avif",
      "/images/projects/aydemir-plaza/gallery-04.avif",
      "/images/projects/aydemir-plaza/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydemir-plaza",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydemir-plaza.html"
  },
  {
    "id": "aydemir-suit",
    "slug": "aydemir-suit",
    "name": "Aydemir Suit",
    "status": "Tamamlanan",
    "apartmentTypes": [
      "1+1"
    ],
    "shortDescription": "Aydemir Suit projemizde bütçelerinize uygun 1+1 Ultra Lüks, Mini Golf Sahası, Havuz ve Saunalı Dairelerde yaşama imkanı",
    "sections": [
      {
        "body": "Aydemir Suit projemizde bütçelerinize uygun 1+1 Ultra Lüks, Mini Golf Sahası, Havuz ve Saunalı Dairelerde yaşama imkanı sunuyoruz."
      }
    ],
    "coverImage": "/images/projects/aydemir-suit/cover.avif",
    "gallery": [
      "/images/projects/aydemir-suit/gallery-01.avif",
      "/images/projects/aydemir-suit/gallery-02.avif",
      "/images/projects/aydemir-suit/gallery-03.avif",
      "/images/projects/aydemir-suit/gallery-04.avif",
      "/images/projects/aydemir-suit/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydemir-suit",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydemir-suit.html"
  },
  {
    "id": "aydin-akdemir-apartmani",
    "slug": "aydin-akdemir-apartmani",
    "name": "Aydın Akdemir Apartmanı",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [
      {
        "body": "PROJE GENEL ÖZELLİKLERİ"
      },
      {
        "body": "Deprem yönetmeliğine uygun karkas yapı,"
      },
      {
        "body": "C-25 sınıfı yüksek dayanımlı beton,"
      },
      {
        "body": "Ses ve ısı yalıtımı,"
      },
      {
        "body": "Merdivenler, küpeşteler birinci sınıf mermer,"
      },
      {
        "body": "Her daire için günısı platformu,"
      },
      {
        "body": "Alüminyum merdiven korkulukları,"
      },
      {
        "body": "DAİRE ÖZELLİKLERİ"
      },
      {
        "body": "Dış duvarlarda ısı yalıtımlı ızotuğla,"
      },
      {
        "body": "Isı camlı pvc renkli doğrama"
      },
      {
        "body": "Lake panel kapı"
      },
      {
        "body": "Laminant parke"
      },
      {
        "body": "Mutfak tezgahları granit mermer,"
      },
      {
        "body": "Banyoda dekoratif seramik,"
      },
      {
        "body": "Merkezi uydu sistemi"
      },
      {
        "body": "Görüntülü diafon"
      },
      {
        "body": "Daire kapıları çelik kapı,"
      },
      {
        "body": "Asma tava uygulaması,"
      },
      {
        "body": "Dekoratif balkon korkuluk sistemi"
      },
      {
        "body": "MDF kapaklı mutfak dolapları."
      }
    ],
    "coverImage": "/images/projects/aydin-akdemir-apartmani/cover.avif",
    "gallery": [
      "/images/projects/aydin-akdemir-apartmani/gallery-01.avif",
      "/images/projects/aydin-akdemir-apartmani/gallery-02.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydin-akdemir-apartmani",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydin-akdemir-apartmani.html"
  },
  {
    "id": "aydogmus-konutlari",
    "slug": "aydogmus-konutlari",
    "name": "Aydoğmuş Konutları",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [
      {
        "body": "PROJE GENEL ÖZELLİKLERİ"
      },
      {
        "body": "Deprem yönetmeliğine uygun karkas yapı,"
      },
      {
        "body": "C-25 sınıfı yüksek dayanımlı beton,"
      },
      {
        "body": "Ses ve ısı yalıtımı,"
      },
      {
        "body": "Merdivenler, küpeşteler birinci sınıf mermer,"
      },
      {
        "body": "Her daire için günısı platformu,"
      },
      {
        "body": "Alüminyum merdiven korkulukları,"
      },
      {
        "body": "Şifreli bina giriş kapısı, güvenlik ve lobi"
      },
      {
        "body": "Çocuk parkı kalimya"
      },
      {
        "body": "Asansör,"
      },
      {
        "body": "Yüzme havuzu"
      },
      {
        "body": "DAİRE ÖZELLİKLERİ"
      },
      {
        "body": "Dış duvarlarda ısı yalıtımlı ızotuğla,"
      },
      {
        "body": "Asma tavan uygulaması,"
      },
      {
        "body": "Isı camlı pvc renkli doğrama,"
      },
      {
        "body": "Lake panel kapı,"
      },
      {
        "body": "Laminant parke,"
      },
      {
        "body": "Giyinme odası, ebeveyn banyosu,"
      },
      {
        "body": "High gloss mutfak dolapları,"
      },
      {
        "body": "Akrilik mutfak tezgahı,"
      },
      {
        "body": "Banyoda dekoratif seramik,"
      },
      {
        "body": "Gömme rezavauar, duşakabin,"
      },
      {
        "body": "Merkezi uydu sistemi"
      },
      {
        "body": "Görüntülü diafon"
      },
      {
        "body": "Vestiyer"
      },
      {
        "body": "Ankasre set."
      }
    ],
    "coverImage": "/images/projects/aydogmus-konutlari/cover.avif",
    "gallery": [
      "/images/projects/aydogmus-konutlari/gallery-01.avif",
      "/images/projects/aydogmus-konutlari/gallery-02.avif",
      "/images/projects/aydogmus-konutlari/gallery-03.avif",
      "/images/projects/aydogmus-konutlari/gallery-04.avif",
      "/images/projects/aydogmus-konutlari/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/aydogmus-konutlari",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__aydogmus-konutlari.html"
  },
  {
    "id": "belinay-apartmani",
    "slug": "belinay-apartmani",
    "name": "Belinay Apartmanı",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [],
    "coverImage": "/images/projects/belinay-apartmani/cover.avif",
    "gallery": [
      "/images/projects/belinay-apartmani/gallery-01.avif",
      "/images/projects/belinay-apartmani/gallery-02.avif",
      "/images/projects/belinay-apartmani/gallery-03.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/belinay-apartmani",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__belinay-apartmani.html"
  },
  {
    "id": "bulut-apartmani",
    "slug": "bulut-apartmani",
    "name": "Bulut Apartmanı",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [
      {
        "body": "Bulut Apartmanı"
      }
    ],
    "coverImage": "/images/projects/bulut-apartmani/cover.avif",
    "gallery": [
      "/images/projects/bulut-apartmani/gallery-01.avif",
      "/images/projects/bulut-apartmani/gallery-02.avif",
      "/images/projects/bulut-apartmani/gallery-03.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/bulut-apartmani",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__bulut-apartmani.html"
  },
  {
    "id": "demiray-apartmani",
    "slug": "demiray-apartmani",
    "name": "Demiray Apartmanı",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [
      {
        "body": "PROJE GENEL ÖZELLİKLERİ"
      },
      {
        "body": "Deprem yönetmeliğine uygun karkas yapı,"
      },
      {
        "body": "C-25 sınıfı yüksek dayanımlı beton,"
      },
      {
        "body": "Ses ve ısı yalıtımı,"
      },
      {
        "body": "Merdivenler, küpeşteler birinci sınıf mermer,"
      },
      {
        "body": "Her daire için günısı platformu,"
      },
      {
        "body": "Alüminyum merdiven korkulukları,"
      },
      {
        "body": "Şifreli bina giriş kapısı, güvenlik ve lobi"
      },
      {
        "body": "Çocuk parkı kalimya"
      },
      {
        "body": "Asansör,"
      },
      {
        "body": "DAİRE ÖZELLİKLERİ"
      },
      {
        "body": "Dış duvarlarda ısı yalıtımlı ızotuğla,"
      },
      {
        "body": "Isı camlı pvc renkli doğrama"
      },
      {
        "body": "Lake panel kapı"
      },
      {
        "body": "Laminant parke"
      },
      {
        "body": "High gloss mutfak dolapları,"
      },
      {
        "body": "Mutfak tezgahları granit mermer,"
      },
      {
        "body": "Banyoda dekoratif seramik,"
      },
      {
        "body": "Gömme rezavauar, duşakabin,"
      },
      {
        "body": "Merkezi uydu sistemi"
      },
      {
        "body": "Görüntülü diafon"
      },
      {
        "body": "Daire kapıları çelik kapı,"
      },
      {
        "body": "Asma tava uygulaması,"
      },
      {
        "body": "Özel tasarım tavanlar,"
      },
      {
        "body": "Dekoratif balkon korkuluk sistemi."
      }
    ],
    "coverImage": "/images/projects/demiray-apartmani/cover.avif",
    "gallery": [
      "/images/projects/demiray-apartmani/gallery-01.avif",
      "/images/projects/demiray-apartmani/gallery-02.avif",
      "/images/projects/demiray-apartmani/gallery-03.avif",
      "/images/projects/demiray-apartmani/gallery-04.avif",
      "/images/projects/demiray-apartmani/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/demiray-apartmani",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__demiray-apartmani.html"
  },
  {
    "id": "gok-konaklari",
    "slug": "gok-konaklari",
    "name": "Gök Konakları",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [],
    "coverImage": "/images/projects/gok-konaklari/cover.avif",
    "gallery": [],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/gok-konaklari",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__gok-konaklari.html"
  },
  {
    "id": "huseyin-kav-sitesi",
    "slug": "huseyin-kav-sitesi",
    "name": "Hüseyin Kav Sitesi",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [
      {
        "body": "Geçmiş dönemlerde yaptığımız tamamlanan projelerden Hüseyin Kav Sitesi projesi."
      }
    ],
    "gallery": [],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/huseyin-kav-sitesi",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__huseyin-kav-sitesi.html"
  },
  {
    "id": "inci-konutlari",
    "slug": "inci-konutlari",
    "name": "İnci Konutları",
    "status": "Tamamlanan",
    "location": "Ayanoğlu Mahallesi, Antalya",
    "apartmentTypes": [
      "2+1",
      "3+1"
    ],
    "shortDescription": "Antalya Kepez’in prestijli bölgesi Ayanoğlu Mahallesi’nde yükselen İnci Konutları, yatırımcılar ve konforlu yaşam arayanlar için ideal bir fırsat sunuyor. Proje, 3 ayda teslim…",
    "sections": [
      {
        "body": "Antalya Kepez’in prestijli bölgesi Ayanoğlu Mahallesi’nde yükselen İnci Konutları, yatırımcılar ve konforlu yaşam arayanlar için ideal bir fırsat sunuyor. Proje, 3 ayda teslim edilecek olup toplam 16 daireden oluşmaktadır. 2+1 tipinde 4 daire ve 3+1 tipinde 12 daire."
      },
      {
        "title": "Genel Site Özellikleri",
        "items": [
          "Deprem yönetmeliğine uygun karkas yapı",
          "C-25/30 sınıfı yüksek dayanımlı beton",
          "Ses ve ısı yalıtımı",
          "1. sınıf mermer merdivenler ve köşebentler",
          "Her daireye özel güneş platformu",
          "Alüminyum merdiven korkulukları",
          "Şifreli bina giriş kapısı",
          "Güvenlik ve lobi",
          "Çocuk parkı, asansör, kamelya",
          "Yüzme havuzu ve güvenlik kulübesi"
        ]
      },
      {
        "title": "Daire Özellikleri",
        "items": [
          "Dış cephede ısı yalıtımı (İzotuğla + Asmolen)",
          "Isıcamlı PVC renkli doğrama",
          "Lake panel kapılar ve laminant parke",
          "High Gloss mutfak dolapları",
          "Dekoratif banyo seramikleri, gömme rezervuar ve duşakabin",
          "Merkezi uydu sistemi ve görüntülü diafon",
          "Ankastre set ve vestiyer"
        ]
      },
      {
        "body": "İnci Konutları, modern mimari ve yüksek yapı kalitesi ile hem yatırım hem de konforlu yaşam için ideal bir tercihtir. Detaylı bilgi ve yerinde sunum için iletişime geçebilirsiniz."
      }
    ],
    "gallery": [],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/inci-konutlari",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__inci-konutlari.html"
  },
  {
    "id": "luna-konutlari",
    "slug": "luna-konutlari",
    "name": "Luna Konutları",
    "status": "Tamamlanan",
    "location": "Kepez, Antalya",
    "apartmentTypes": [
      "2+1"
    ],
    "shortDescription": "Kepez’in merkezi konumunda yer alan bu modern 2+1 daire, yatırımcılar ve konforlu yaşam arayanlar için ideal bir fırsat sunuyor. Toplam **85 m² brüt / 70 m² net alan** ile ferah…",
    "sections": [
      {
        "body": "Kepez’in merkezi konumunda yer alan bu modern 2+1 daire, yatırımcılar ve konforlu yaşam arayanlar için ideal bir fırsat sunuyor. Toplam **85 m² brüt / 70 m² net alan** ile ferah bir yaşam alanı sağlanmaktadır."
      },
      {
        "title": "Daire Özellikleri",
        "items": [
          "2+1 oda düzeni",
          "Kapalı mutfak",
          "1 banyo",
          "Balkon",
          "Klima sistemi",
          "Açık otopark",
          "Asansör"
        ]
      },
      {
        "title": "Satış Avantajları",
        "items": [
          "Taksitli satış imkânı",
          "Takas olanağı",
          "Krediye uygun"
        ]
      },
      {
        "body": "Bu daire, Aydemir İnşaat güvencesiyle yatırım ve yaşam için güvenli bir seçim sunar. Farklı bütçelere uygun diğer daire seçeneklerimizle de hayalinizdeki evi bulabilirsiniz."
      }
    ],
    "coverImage": "/images/projects/luna-konutlari/cover.avif",
    "gallery": [
      "/images/projects/luna-konutlari/gallery-01.avif",
      "/images/projects/luna-konutlari/gallery-02.avif",
      "/images/projects/luna-konutlari/gallery-03.avif",
      "/images/projects/luna-konutlari/gallery-04.avif",
      "/images/projects/luna-konutlari/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/luna-konutlari",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__luna-konutlari.html"
  },
  {
    "id": "orman-palace",
    "slug": "orman-palace",
    "name": "Orman Palace",
    "status": "Tamamlanan",
    "location": "Karşıyaka Mahallesi, Antalya",
    "apartmentTypes": [
      "3+1"
    ],
    "shortDescription": "Aydemir İnşaat kalitesiyle Antalya Kepez Varsak Karşıyaka Mahallesi’nde yükseliyor! 3+1 Lüks Daireler – 155 m² Teslim: 15 Ay İçinde 4 Blok – Toplam 75 Daire PROJE GENEL…",
    "sections": [
      {
        "body": "Aydemir İnşaat kalitesiyle Antalya Kepez Varsak Karşıyaka Mahallesi’nde yükseliyor! 3+1 Lüks Daireler – 155 m² Teslim: 15 Ay İçinde 4 Blok – Toplam 75 Daire PROJE GENEL ÖZELLİKLERİ Deprem yönetmeliğine uygun şağlam karkas yapı C-25 sınıfı yüksek dayanımlı beton Ses ve ısı yalıtımı Birinci sınıf mermer merdivenler ve küpeşteler Şifreli bina giriş kapısı Güvenlik & Lobi, Çocuk Parkı, Kamelya 500 m² büyüklüğünde yüzme havuzu Kapalı otopark, asansör, Sosyal Tesis alanı DAİRE İÇİ ÖZELLİKLERİ Isı yalıtımlı dış duvarlar – Izotuğla sistem ısıtma Asma tavan, ısı camlı renkli PVC doğramalar Lake panel kapılar • Laminant parke Giyinme odası • Ebeveyn banyosu High Gloss mutfak dolapları • Akrilik mutfak tezgahı Banyoda dekoratif seramik • Gömme rezervuar Duşakabin • Merkezi uydu sistemi • Görüntülü diafon Vestiyer, Ankastre set Doğayla iç içe, sosyal yaşamla çevrili ve yüksek konforlu yeni bir hayat sizi bekliyor! Adres: Antalya / Kepez / Varsak / Karşıyaka Mahallesi"
      }
    ],
    "coverImage": "/images/projects/orman-palace/cover.avif",
    "gallery": [],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/orman-palace",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__orman-palace.html"
  },
  {
    "id": "orman-suit",
    "slug": "orman-suit",
    "name": "Orman Suit",
    "status": "Tamamlanan",
    "apartmentTypes": [],
    "sections": [
      {
        "body": "PROJE GENEL ÖZELLİKLERİ"
      },
      {
        "body": "Deprem yönetmeliğine uygun karkas yapı,"
      },
      {
        "body": "C-25 sınıfı yüksek dayanımlı beton,"
      },
      {
        "body": "Ses ve ısı yalıtımı,"
      },
      {
        "body": "Merdivenler, küpeşteler birinci sınıf mermer,"
      },
      {
        "body": "Her daire için günısı platformu,"
      },
      {
        "body": "Alüminyum merdiven korkulukları,"
      },
      {
        "body": "Şifreli bina giriş kapısı, güvenlik ve lobi"
      },
      {
        "body": "Çocuk parkı kalimya"
      },
      {
        "body": "Asansör,"
      },
      {
        "body": "Yüzme havuzu"
      },
      {
        "body": "DAİRE ÖZELLİKLERİ"
      },
      {
        "body": "Dış duvarlarda ısı yalıtımlı ızotuğla,"
      },
      {
        "body": "Asma tavan uygulaması"
      },
      {
        "body": "Isı camlı pvc renkli doğrama"
      },
      {
        "body": "Lake panel kapı"
      },
      {
        "body": "Laminant parke"
      },
      {
        "body": "Giyinme odası, ebeveyn banyosu"
      },
      {
        "body": "High gloss mutfak dolapları,"
      },
      {
        "body": "Akrilik mutfak tezgahı,"
      },
      {
        "body": "Banyoda dekoratif seramik,"
      },
      {
        "body": "Gömme rezavauar, duşakabin,"
      },
      {
        "body": "Merkezi uydu sistemi"
      },
      {
        "body": "Görüntülü diafon"
      },
      {
        "body": "Vestiyer"
      },
      {
        "body": "Ankasre set."
      }
    ],
    "coverImage": "/images/projects/orman-suit/cover.avif",
    "gallery": [
      "/images/projects/orman-suit/gallery-01.avif",
      "/images/projects/orman-suit/gallery-02.avif",
      "/images/projects/orman-suit/gallery-03.avif",
      "/images/projects/orman-suit/gallery-04.avif",
      "/images/projects/orman-suit/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/orman-suit",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__orman-suit.html"
  },
  {
    "id": "safir-konutlari",
    "slug": "safir-konutlari",
    "name": "Safir Konutları",
    "status": "Devam Eden",
    "location": "Varsak, Antalya",
    "apartmentTypes": [
      "2+1"
    ],
    "shortDescription": "Varsak, Antalya’nın hızla değer kazanan bölgelerinden biridir. Ulaşım kolaylığı, yeni projeler ve altyapı yatırımlarıyla bölgedeki gayrimenkul değerleri sürekli artış…",
    "sections": [
      {
        "title": "Proje Özellikleri:",
        "items": [
          "3746 m² geniş arsa",
          "Tek blok – 48 adet 2+1 daire",
          "Her katta 6 daire",
          "Kısmi takas imkânı",
          "Taksitli satış ve yüksek kredi desteği",
          "Yabancı satışa ve vatandaşlığa uygunluk",
          "Teslim tarihi: Haziran 2026",
          "Mevcut aşama: Tuğla – kalıp aşaması"
        ]
      },
      {
        "title": "Yatırım Avantajları",
        "body": "Varsak, Antalya’nın hızla değer kazanan bölgelerinden biridir. Ulaşım kolaylığı, yeni projeler ve altyapı yatırımlarıyla bölgedeki gayrimenkul değerleri sürekli artış göstermektedir. Bu nedenle komple satılık bina yatırımı, hem kira getirisi hem de uzun vadeli değer artışı açısından büyük avantaj sağlar."
      },
      {
        "title": "Güven ve Kalite",
        "body": "Projelerimizi Aydemir İnşaat güvencesiyle hayata geçiriyoruz. Modern mimari, güçlü inşaat kalitesi ve yatırımcılara özel ödeme kolaylıkları ile güvenli bir yatırım ortamı sunuyoruz."
      }
    ],
    "coverImage": "/images/projects/safir-konutlari/cover.avif",
    "gallery": [
      "/images/projects/safir-konutlari/gallery-01.avif",
      "/images/projects/safir-konutlari/gallery-02.avif",
      "/images/projects/safir-konutlari/gallery-03.avif",
      "/images/projects/safir-konutlari/gallery-04.avif",
      "/images/projects/safir-konutlari/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/safir-konutlari",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__safir-konutlari.html"
  },
  {
    "id": "technic-aydemir",
    "slug": "technic-aydemir",
    "name": "Technic Aydemir",
    "status": "Tamamlanan",
    "apartmentTypes": [
      "1+1",
      "2+1"
    ],
    "shortDescription": "Markantalya 12 km - Mall Of Antalya 9 km Düden Şelalesi 1.5 km - Tramvay 600 mt Hastane 5,5 km Havalimanı 13",
    "sections": [
      {
        "body": "8 Adet 1+1 Zemin Kat - 15 Adet 1+1 Normal Kat - 30 Adet 2+1 Normal Kat - Toplam 54 Daire"
      },
      {
        "body": "Markantalya 12 km - Mall Of Antalya 9 km Düden Şelalesi 1.5 km - Tramvay 600 mt Hastane 5,5 km Havalimanı 13 km"
      }
    ],
    "coverImage": "/images/projects/technic-aydemir/cover.avif",
    "gallery": [
      "/images/projects/technic-aydemir/gallery-01.avif",
      "/images/projects/technic-aydemir/gallery-02.avif",
      "/images/projects/technic-aydemir/gallery-03.avif",
      "/images/projects/technic-aydemir/gallery-04.avif",
      "/images/projects/technic-aydemir/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/technic-aydemir",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__technic-aydemir.html"
  },
  {
    "id": "yakut-konutlari",
    "slug": "yakut-konutlari",
    "name": "Yakut Konutları",
    "status": "Tamamlanan",
    "apartmentTypes": [
      "2+1"
    ],
    "shortDescription": "Yakut Konutları, modern mimari ve güçlü yapı özellikleriyle yatırımcılar ve aileler için ideal bir projedir. 1221 m² arsa üzerinde inşa edilen projede toplam 20 adet 2+1 daire…",
    "sections": [
      {
        "body": "Yakut Konutları, modern mimari ve güçlü yapı özellikleriyle yatırımcılar ve aileler için ideal bir projedir. 1221 m² arsa üzerinde inşa edilen projede toplam 20 adet 2+1 daire bulunmaktadır."
      },
      {
        "title": "Genel Özellikler",
        "items": [
          "Deprem yönetmeliğine uygun karkas yapı",
          "C-25/30 sınıfı yüksek dayanımlı beton",
          "Ses ve ısı yalıtımı",
          "1. sınıf mermer merdivenler ve köşebentler",
          "Her daireye özel güneş platformu",
          "Alüminyum merdiven korkulukları",
          "Şifreli bina giriş kapısı",
          "Güvenlik ve lobi",
          "Çocuk parkı, asansör, kamelya",
          "Yüzme havuzu ve güvenlik kulübesi"
        ]
      },
      {
        "title": "Daire Özellikleri",
        "items": [
          "Dış cephede ısı yalıtımı (İzotuğla + Asmolen)",
          "Isıcamlı PVC renkli doğrama",
          "Lake panel kapılar, laminant parke",
          "High Gloss mutfak dolapları",
          "Dekoratif banyo seramikleri",
          "Gömme rezervuar, duşakabin",
          "Merkezi uydu sistemi",
          "Görüntülü diafon",
          "Ankastre set ve vestiyer"
        ]
      },
      {
        "body": "Yakut Konutları, güvenlikli site yaşamı, sosyal alanları ve modern daireleri ile Antalya’nın yükselen değerlerinden biridir. Yatırım ve konforu bir arada sunan bu proje Aydemir İnşaat güvencesiyle hayata geçirilmektedir."
      }
    ],
    "gallery": [],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/yakut-konutlari",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__yakut-konutlari.html"
  },
  {
    "id": "zumrut-konutlari",
    "slug": "zumrut-konutlari",
    "name": "Zümrüt Konutları",
    "status": "Tamamlanan",
    "location": "Aktoprak Mahallesi, Antalya",
    "apartmentTypes": [
      "2+1"
    ],
    "shortDescription": "Aydemir İnşaat güvencesiyle Antalya Kepez / Aktoprak Mahallesi’nde 2+1 ayrı mutfaklı daireler sizleri",
    "sections": [
      {
        "body": "Aydemir İnşaat güvencesiyle Antalya Kepez / Aktoprak Mahallesi’nde 2+1 ayrı mutfaklı daireler sizleri bekliyor."
      },
      {
        "body": "Caddeye cephe konumuyla avantajlı bir lokasyona sahip olan projemiz, ilköğretim okuluna sadece 100 metre mesafededir. Hem yatırım hem de konfor arayan aileler için ideal yaşam alanı sunmaktadır."
      },
      {
        "title": "Daire Özellikleri",
        "items": [
          "Ayrı mutfaklı 2+1 daireler",
          "Ankastre fırın",
          "Vestiyer",
          "Duşakabin",
          "Duvar kağıdı",
          "Elektrikli panjur"
        ]
      },
      {
        "body": "Aydemir İnşaat kalitesiyle hayata geçirilen bu proje, ulaşım ve eğitim olanaklarına yakınlığıyla öne çıkmaktadır. Modern mimari detayları ve fonksiyonel tasarımıyla Aktoprak’ta yeni bir yaşam fırsatı sunuyor."
      }
    ],
    "coverImage": "/images/projects/zumrut-konutlari/cover.avif",
    "gallery": [
      "/images/projects/zumrut-konutlari/gallery-01.avif",
      "/images/projects/zumrut-konutlari/gallery-02.avif",
      "/images/projects/zumrut-konutlari/gallery-03.avif",
      "/images/projects/zumrut-konutlari/gallery-04.avif",
      "/images/projects/zumrut-konutlari/gallery-05.avif"
    ],
    "originalSource": "https://www.durmusaydemirinsaat.com/proje/zumrut-konutlari",
    "sourceFile": "durmus_aydemir_site_arsivi/sayfalar_html/proje__zumrut-konutlari.html"
  }
];
