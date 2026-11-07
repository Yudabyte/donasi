# Yuda Logo Design - Halaman Scan & Pay QRIS

Web statis HTML, CSS, dan JavaScript dengan server Node.js tanpa dependensi tambahan.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Mengganti QR

Timpa file `public/assets/qris.png` dengan gambar QR baru, lalu refresh halaman.
Jika file QR hilang, halaman akan menampilkan petunjuk penggantian gambar.

## Struktur

```text
package.json
server.js
public/
  index.html
  style.css
  script.js
  assets/qris.png
```

Ganti port dengan `PORT=8080 npm run dev`.

## Deploy gratis 24 jam

Repository ini sudah memiliki workflow GitHub Pages. Setelah workflow selesai, situs dapat dibuka di:

https://yudabyte.github.io/donasi/

Aktifkan satu kali melalui **Settings → Pages → Source: GitHub Actions** di repository GitHub.
