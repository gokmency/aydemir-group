# Durmuş Aydemir Group web sitesi

Astro ve TypeScript ile üretilen, tamamen statik premium kurumsal site.

## Yerel geliştirme

```bash
npm install
npm run dev
```

Yerel adres: `http://localhost:4321`

## Kontrol ve üretim derlemesi

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run preview
```

Üretim çıktısı `dist/` klasörüne yazılır.

## İçeriği arşivden yeniden üretme

Proje kökünde:

```bash
node scripts/build-content.mjs
```

Bu komut `src/data` verilerini ve seçili AVIF medya dosyalarını yeniden üretir. `durmus_aydemir_site_arsivi/` kaynak klasörünü değiştirmez.

## Dağıtım

Cloudflare Pages veya Vercel için:

- Proje kökü: `site`
- Derleme komutu: `npm run build`
- Çıktı klasörü: `dist`
- Node.js: 22 veya üstü

## Ortam değişkenleri

Zorunlu ortam değişkeni yoktur.

## Form

İletişim formu veri depolamaz. Kullanıcının mesajını doğrulanmış WhatsApp numarasına aktarır. E-posta tabanlı bir gönderim istenirse Formspree, Cloudflare Worker, Resend veya özel API bağlantısı eklenmelidir.
