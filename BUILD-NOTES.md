# Meme-x v3 — "LICENSE EXPIRED 13 YEARS AGO" — build notes (23 Nov 2026 ~11:05–11:20 WIB)

## Perintah user
23 Nov 11:02 WIB: "coba A" — memilih Konsep A dari studi
(~/workspace/makefun/gta6-meme-x-01-v3-study.md). Konsep A = SIM / surat
perpanjangan SIM Leonida DMV. Build ini menggantikan v2 "Boarding Pass"
(rank 376/4.397, judge 84,11% — 5,01 poin di bawah bar top-50 89,12%).

## Studi yang dipakai
- ~/workspace/makefun/gta6-meme-x-01-v3-study.md (135 baris, 23 Nov ~11:05
  WIB): top-10 live, analisis 7 kriteria judge, gap v2, 3 konsep, daftar
  frasa DILARANG. Semua teks di bawah mengikuti spek Konsep A di studi itu.
- Kit: ~/workspace/makefun/gta6-meme-x-01-kit/ (fresh, 0 mismatch).
  RULES.txt dibaca; main.ts mengikuti pola starter (copy POST.json) +
  guard placeholder.

## Desain (meme-v3.html, 1024x1024)
Kartu SIM krem (#fdf8ec) di atas latar navy gelap (#101c33), sudut
membulat, bayangan — pipeline sama seperti v2 (HTML → screenshot
Playwright via shot.py → meme.png). Semua teks adalah teks HTML asli,
bukan raster.

- Header navy: "LEONIDA DMV" + "DEPT. OF MOTOR VEHICLES · VICE CITY" /
  kanan "DRIVER'S LICENSE" + "RENEWAL NOTICE", garis magenta di bawah.
- Headline RAKSASA merah (#d21f3c), 82px, 2 baris — INI leluconnya:
  "LICENSE EXPIRED / 13 YEARS AGO."
- Foto SIM (kiri, 240x240): aset maskot resmi make.fun
  (ghost-mark-1024.png) + kacamata hitam digambar sebagai SVG overlay di
  atas mata hantu (lensa x 34–49 dan 51–66, y 33–44 dari 100). Caption
  "LICENSE PHOTO". Hantu muncul 2x: foto SIM + banner.
- Field (kanan, 1 kolom, 8 baris, label abu 13px + nilai monospace 23px):
  NAME: GRAND THEFT AUTO V / LICENSE NO: GTA-V-2013 / EXPIRED: 17 SEP 2013
  / RENEWED: 19 NOV 2026 / NEW HOLDER: GRAND THEFT AUTO VI /
  AUTHORIZED DRIVERS: JASON & LUCIA / VISION TEST: 20/20 IN VICE CITY /
  RESTRICTION: NO DRIVING BEFORE 19 NOV 2026
- Baris pendukung (17px, 1 baris): "214 GB TO DOWNLOAD · DELAYED FALL
  2025 & MAY 2026 · WAITED 4,811 DAYS"
- Baris biaya: "RENEWAL FEE $79.99 — PAID IN FULL" (navy, 29px) +
  stempel "RENEWED" hijau (#0a7a3d), miring -8°, inline di kanan teks
  biaya (bukan overlap — nol risiko menutup teks).
- Banner bawah MAGENTA (#c8107a), besar: hantu 76px + "PAID BY MY AI
  AGENT" (34px) / "with real money it won in make.fun bounties." (24px).
- Angka yang dipakai (semua dari kosakata studi): 4.811 hari, 214 GB,
  $79,99, 17 Sep 2013 → 19 Nov 2026, delay Fall 2025 + May 2026.

## Yang TIDAK dipakai (no-dupe, sesuai studi)
- Frasa top-10: "You were a great tenant", "13 YEARS LATE. FINALLY
  BOARDING.", "GTA VI LOADED. THE CAR DIDN'T.", "Died 1 day before GTA
  VI", "Emotional damage: PRICELESS", "$1.00 for every day you waited".
- Hitungan denda $0,25/hari (garis rank 4) — hanya flat renewal fee
  $79,99.
- Layout boarding pass; tidak ada teks/field v2 yang dipakai mentah
  (yang sama hanya fakta publik: tanggal, $79,99, 214 GB, Jason & Lucia —
  kosakata bersama studi, bukan wording v2).

## File
- Repo lokal: ~/workspace/makefun/gta6-meme-x-01-bot-v3/ (belum git init /
  commit / push — parent yang lakukan).
  Isi: meme-v3.html, main.ts, README.md (3 badge live untuk repo
  astiip/gta6-meme-x-01-bot-v3), LICENSE (MIT + baris SPDX), POST.json
  (placeholder), post-text-draft.txt, BUILD-NOTES.md.
- meme.png BELUM ADA — parent render dari meme-v3.html (shot.py) lalu
  masukkan ke repo.
- Aset hantu: meme-v3.html merujuk
  ../gta6-meme-x-01-v2-work/ghost-mark-1024.png (path relatif — render
  langsung jalan). Sebelum/sesudah render, parent sebaiknya copy
  ghost-mark-1024.png ke dalam repo v3 dan sederhanakan src menjadi
  "ghost-mark-1024.png" supaya repo self-contained.

## main.ts
Sama seperti pola starter/v2 (copy POST.json ke /output) + guard: menolak
placeholder (url berakhiran /status/0), menolak '<' '>', menolak URL
bukan x.com/twitter.com. POST.json placeholder
{"url":"https://x.com/carbucity/status/0"} — WAJIB diganti URL post X
asli sebelum submit; main.ts menolak placeholder itu.

## Post text (draf, post-text-draft.txt, ~226 byte — jauh di bawah batas
~1.100 byte yang dibaca judge)
"My driver's license expired 13 years ago. GTA VI finally renewed it,
and my AI agent paid the $79.99 fee with real money it won in make.fun
bounties. 🪪 makefun-chair-grove-rutabaga
https://make.fun/bounty/gta6-meme-x-01"
- Play code: makefun-chair-grove-rutabaga (n=2; v1 pakai n=0, v2 pakai
  n=1 — jangan dipakai ulang).
- TIDAK posting ke X — sesuai perintah. User yang posting (atau parent
  via browser user), lalu update POST.json ke URL asli + commit baru.

## Risiko legibility (untuk dicek parent saat render)
1. Headline 82px: "LICENSE EXPIRED" dihitung ~814px dari lebar isi 860px
   — aman, tapi verifikasi tidak wrap di render (font render bisa beda
   sedikit dari Arial).
2. Baris RESTRICTION ("NO DRIVING BEFORE 19 NOV 2026", 29 karakter
   monospace 23px) dihitung ~570px dari kolom field 592px — pas-pasan
   (~22px sisa). Kalau wrap, kecilkan nilai ke 22px atau label ke 12px.
3. Baris pendukung 17px (1 baris, ~795px dari 860px) — kalau wrap ke 2
   baris, kartu tetap muat (banner margin-top:auto), tapi lebih baik
   tetap 1 baris.
4. Kacamata SVG: posisi lensa diperkirakan dari tampilan aset (mata
   hantu ~x 43% dan 57%, y ~39%). HARUS DILIHAT di render: lensa harus
   menutup kedua mata berkilau, tidak meleset ke dahi/pipi. Lensa kanan
   (x 51–66) sedikit menyentuh tepi kiri koin magenta yang dipegang
   hantu — itu wajar (kacamata di depan), tapi cek di render.
5. Banner 2 baris + hantu 76px: cek hantu tidak terpotong dan teks
   "make.fun" di baris 2 terbaca di 480px.
6. Cek 300px: yang harus terbaca = headline "LICENSE EXPIRED / 13 YEARS
   AGO.", stempel RENEWED, banner "PAID BY MY AI AGENT". Field 23px akan
   jadi ~7px di 300px — itu tekstur dokumen, sama seperti top-10; bukan
   yang dibaca judge di ukuran itu.

## YANG BELUM / BLOKIR — perlu parent
1. Render meme-v3.html → meme.png (1024x1024) via shot.py + cek visual
   (termasuk 6 risiko di atas) + cek 300px.
2. Copy ghost-mark-1024.png ke repo v3 (opsional tapi disarankan) +
   sederhanakan src di HTML bila sudah dicopy, lalu render ulang.
3. Posting ke X (user/parent) + update POST.json ke URL asli.
4. Bundle + check + submit — hanya setelah user lihat meme + bilang
   gas. Kompetisi tutup 23 Nov 21:00 WIB.
5. Kuota terakhir dicek 11:00 WIB: can_submit true, entries_made 2,
   day left 5, hard left 38 — konfirmasi ulang sebelum submit.

---

## REVISI 23 Nov 2026 ~11:15 WIB — perkuat joke (vonis judge-sim parent: kriteria 2 Funny kalah lawan top-3)

Tepat 2 perubahan, tidak ada yang lain diubah:

1. **Baris field baru, paling akhir (setelah RESTRICTION):**
   `POINTS — 13 — ONE PER YEAR OF WAITING`
   Alasan joke: SIM kena 13 poin, satu poin per tahun nunggu GTA VI — khas DMV, bukan milik entry lain. Nilai 28 karakter, muat satu baris di kolom value (~422px). Sengaja TIDAK pakai "ONE FOR EVERY YEAR OF WAITING" (36 karakter, akan wrap). Tanpa frasa terlarang top-10, tanpa hitungan $0,25/hari.
2. **Hantu di banner diperbesar: 76px → 96px** (width + height, `.banner img`).
   Upgrade termurah dari sim: bikin make.fun lebih menonjol tanpa nambah kepadatan.

**Perkiraan muat:** field sekarang 9 baris (tadinya 8). Kartu 912px, slack sebelumnya ~110px. Tambahan: ~33px (satu baris .row: 23px teks + 14px padding, minus border) + ~20px (banner naik 76→96px, padding banner tetap 20px atas-bawah). Total tambahan ~53px < slack ~110px → masih muat. Risiko yang tersisa untuk dicek parent saat render: (a) baris POINTS harus tetap satu baris — kalau value wrap, potong ke "13 — ONE PER YEAR" (jangan tambah baris); (b) banner 96px: hantu tidak boleh terpotong dan teks banner tidak boleh terdorong; (c) mid section (foto 240px + 9 baris field) masih lebih pendek dari tinggi kartu — flex column dengan banner margin-top:auto menahan sisanya.

**Tidak diubah:** headline, 8 field lama, support line, fee, stamp, banner text, warna, layout, ukuran font lain, main.ts, README.md, LICENSE, POST.json, post-text-draft.txt.
