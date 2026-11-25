# English Learning Website — Organic Learning Experience

## 1. Peran dan tujuan

Bertindak sebagai **senior frontend developer sekaligus UI/UX designer**. Bangun website belajar bahasa Inggris yang terasa seperti sebuah ruang belajar digital yang hidup: materi tersusun seperti jalur eksplorasi, latihan terasa aktif, dan progres belajar terlihat sebagai perjalanan yang terus berkembang.

Website harus mudah digunakan oleh pemula, nyaman dibaca dalam sesi belajar yang panjang, dan mempunyai identitas visual yang kuat. Bangun **frontend saja** untuk versi pertama. Jangan membuat backend, API server, autentikasi sungguhan, atau integrasi database.

Gunakan data demo yang realistis dan `localStorage` untuk menyimpan progres, hasil latihan, profil demo, dan preferensi pengguna.

## 2. Referensi arah pengalaman dan desain

Referensi utama untuk memahami pendekatan pengalaman belajar:

- https://learnhypersheets.com/

Amati pendekatan umum referensi tersebut, bukan menyalin tampilannya secara langsung. Hal yang dapat dijadikan inspirasi:

- Website terasa seperti satu ekosistem belajar, bukan sekadar kumpulan halaman dashboard.
- Pengguna langsung memahami apa yang dapat dipelajari dan tindakan pertama yang perlu dilakukan.
- Materi, latihan, dan aktivitas interaktif memiliki hubungan yang jelas.
- Konten disajikan dalam bagian-bagian yang mudah dijelajahi.
- Ada rasa eksplorasi dan pencapaian, tetapi fitur visual tetap membantu proses belajar.
- Pengalaman harus tetap mudah digunakan dari perangkat mobile.

**Jangan menyalin** logo, nama, ilustrasi, karakter, teks, aset, susunan halaman secara persis, atau elemen khas Hyper Sheets. Buat identitas visual baru untuk produk English Learning ini.

## 3. Konsep desain: “Language Garden / Field Guide”

Gunakan konsep visual berupa **buku panduan belajar bahasa yang bertemu dengan taman pengetahuan**. Anggap setiap topik sebagai area yang dapat dijelajahi, setiap pelajaran sebagai langkah kecil, dan setiap latihan sebagai kesempatan untuk mempraktikkan hal yang sudah dipelajari.

Karakter desain:

- Organic dan earthy: hangat, alami, tenang, bersahaja, dan tidak terlalu mengilap.
- Editorial minimalism: tipografi kuat, hierarki konten jelas, ruang kosong terukur, serta komposisi yang tidak monoton.
- Playful but mature: terasa menyenangkan untuk belajar, tetapi tidak kekanak-kanakan.
- Exploratory: pengguna dapat melihat jalur belajar dan memilih aktivitas selanjutnya dengan mudah.
- Functional decoration: garis kontur, bentuk lengkung, ilustrasi botani abstrak, tekstur kertas yang sangat halus, atau penanda jalur hanya digunakan bila memperkuat konteks.

Hasil akhir harus terasa seperti produk digital yang dirancang khusus, bukan template admin, marketplace, atau dashboard SaaS generik.

## 4. Palet warna organic / earthy

Gunakan palet di bawah ini sebagai fondasi visual. Lima warna pastel dari brief sebelumnya tetap dipertahankan, lalu dilengkapi warna gelap dan warna alami agar kontras, kedalaman, dan keterbacaan lebih baik.

| Token | HEX | Penggunaan |
|---|---|---|
| `--color-sage` | `#CCD5AE` | Sage lembut untuk panel pendukung dan area progres |
| `--color-pistachio` | `#E9EDC9` | Latar sekunder dan permukaan lembut |
| `--color-paper` | `#FEFAE0` | Latar utama bernuansa kertas |
| `--color-sand` | `#FAEDCD` | Area konten alternatif dan highlight |
| `--color-clay` | `#D4A373` | Aksen hangat, tombol utama, atau penanda penting |
| `--color-forest` | `#344638` | Warna gelap utama untuk header, tombol, dan area kontras |
| `--color-moss` | `#667653` | Aksen sekunder, status progres, dan detail navigasi |
| `--color-terracotta` | `#A65F46` | Aksen terbatas untuk feedback atau elemen yang perlu perhatian |
| `--color-ink` | `#292B25` | Teks utama |
| `--color-muted` | `#77786B` | Teks sekunder |
| `--color-line` | `#D8D2BF` | Garis pemisah dan border lembut |
| `--color-white` | `#FFFFFF` | Area input atau konten yang membutuhkan permukaan bersih |

Buat seluruh warna sebagai CSS custom properties di `:root`. Jangan menggunakan semua warna sekaligus pada setiap komponen. Gunakan warna kertas/ivory sebagai dasar, forest sebagai jangkar visual, sage dan sand sebagai permukaan pendukung, serta clay/terracotta hanya sebagai aksen.

Pastikan kontras teks dan latar memadai. Jangan memakai sage, clay, atau sand sebagai warna teks kecil di atas latar terang tanpa pemeriksaan kontras.

## 5. Aturan visual dan UI

### Layout dan komposisi

- Hindari dashboard yang terdiri dari banyak kartu seragam.
- Gunakan komposisi editorial: beberapa section lebar, kolom yang bervariasi, daftar materi, jalur belajar, dan panel ringkasan yang ditempatkan sesuai prioritas.
- Gunakan card hanya ketika konten memang perlu dikelompokkan. Tidak semua bagian harus menjadi card.
- Buat satu elemen utama yang dominan pada setiap halaman, lalu susun informasi pendukung di sekitarnya.
- Gunakan garis, nomor bab, label kategori, dan bentuk organik secukupnya untuk membangun identitas.
- Gunakan radius sedang dan konsisten. Hindari semua elemen berbentuk kapsul atau pill.
- Hindari bayangan tebal, glassmorphism, gradient neon, dan efek 3D yang tidak diperlukan.
- Jika menggunakan tekstur, pastikan sangat halus dan tidak mengurangi keterbacaan.

### Tipografi

- Gunakan maksimal dua keluarga font yang saling melengkapi.
- Pilih display font yang memiliki karakter editorial untuk heading dan sans-serif yang sangat mudah dibaca untuk isi.
- Jaga ukuran, weight, line-height, dan lebar paragraf agar materi nyaman dipelajari.
- Hindari terlalu banyak huruf kapital, heading klise, dan teks placeholder.

### Ikon dan ilustrasi

- Gunakan satu keluarga ikon konsisten seperti Lucide.
- Jangan menggunakan emoji sebagai pengganti ikon antarmuka.
- Gunakan ilustrasi organik sederhana jika benar-benar membantu menjelaskan konsep atau memberi identitas. Hindari ilustrasi stok generik.
- Jangan menambahkan karakter maskot atau elemen dekoratif berlebihan.
- Jangan membuat badge, chip, label, atau statistik hanya untuk memenuhi ruang.

### Micro-interaction

- Hover, focus, active, loading, jawaban benar/salah, dan perubahan progres harus memiliki feedback yang jelas.
- Animasi singkat, halus, dan fungsional. Jangan menggunakan animasi terus-menerus yang mengganggu belajar.
- Hormati `prefers-reduced-motion`.

## 6. Teknologi utama

- **Framework:** Vue.js 3.
- **Build tool:** Vite.
- **Bahasa:** JavaScript.
- **Component API:** Composition API dengan `<script setup>`.
- **Routing:** Vue Router.
- **State:** composables Vue; gunakan Pinia hanya jika kebutuhan state bersama memang membutuhkannya.
- **Styling:** CSS biasa atau CSS scoped dengan CSS variables.
- **Icons:** `lucide-vue-next`.
- **Storage:** `localStorage` untuk data demo.

Jangan mengganti Vue.js dengan React, Angular, atau framework lain. Proyek wajib dapat dijalankan dengan:

```bash
npm install
npm run dev
```

Pastikan script build tersedia dan dapat dijalankan dengan `npm run build`.

## 7. Struktur navigasi dan halaman

Pertahankan seluruh cakupan halaman dari brief sebelumnya. Minimal tersedia halaman berikut:

1. Dashboard / Learning Home
2. Courses
3. Vocabulary Test
4. Grammar Test
5. Listening Test
6. Progress
7. Profile
8. Settings
9. Vocabulary Material
10. Grammar Material

Gunakan Vue Router. Setiap halaman harus memiliki route yang jelas dan dapat dibuka langsung melalui URL.

Saran route:

| Halaman | Route |
|---|---|
| Dashboard | `/` |
| Courses | `/courses` |
| Vocabulary Material | `/materials/vocabulary` |
| Grammar Material | `/materials/grammar` |
| Vocabulary Test | `/tests/vocabulary` |
| Grammar Test | `/tests/grammar` |
| Listening Test | `/tests/listening` |
| Progress | `/progress` |
| Profile | `/profile` |
| Settings | `/settings` |

Navigasi desktop dapat menggunakan sidebar ringkas atau top navigation yang menyatu dengan identitas visual. Pada mobile, ubah menjadi menu drawer atau bottom navigation yang mudah dijangkau. Pilih satu pola yang paling sesuai dan terapkan konsisten.

Jangan memaksakan sidebar desktop pada layar kecil.

## 8. Detail setiap halaman dan perilakunya

### A. Dashboard / Learning Home (`/`)

Dashboard adalah titik masuk utama ke ekosistem belajar. Susun seperti halaman pembuka sebuah field guide, bukan dashboard statistik biasa.

Tampilkan:

- Sapaan singkat dan nama pengguna.
- Headline yang memberi konteks perjalanan belajar.
- Satu bagian utama untuk melanjutkan materi terakhir dengan CTA yang jelas.
- Jalur belajar atau learning path yang menunjukkan tahap yang sudah dan belum diselesaikan.
- Ringkasan progres keseluruhan yang divisualisasikan secara sederhana.
- Rekomendasi aktivitas berikutnya berdasarkan data demo atau aktivitas terakhir.
- Ringkasan kata vocabulary yang sudah dipelajari.
- Target belajar harian atau mingguan.
- Aktivitas terakhir dalam bentuk timeline atau daftar ringkas.

Buat satu area visual khas, misalnya peta jalur belajar berbentuk lengkung, garis pertumbuhan, atau ilustrasi abstrak taman pengetahuan. Area ini harus tetap membantu orientasi pengguna, bukan sekadar hiasan.

### B. Courses (`/courses`)

Tampilkan jalur atau course belajar bahasa Inggris berdasarkan level dan topik.

Setiap course berisi:

- Nama course.
- Deskripsi singkat.
- Level: Beginner, Elementary, atau Intermediate.
- Jumlah pelajaran atau estimasi durasi.
- Progres pengguna.
- Status: belum dimulai, sedang dipelajari, atau selesai.
- Tombol untuk membuka atau melanjutkan course.

Gunakan komposisi seperti learning trail, chapter list, atau katalog editorial. Hindari susunan kartu toko online.

Sediakan filter level/topik jika bermanfaat. Pastikan filter benar-benar bekerja.

### C. Vocabulary Test (`/tests/vocabulary`)

Buat tes vocabulary interaktif yang dapat diselesaikan dari awal sampai hasil akhir.

Fitur:

- Tampilkan satu soal pada satu waktu.
- Jenis soal dapat berupa arti kata, pemilihan kata yang sesuai konteks, sinonim/antonim sederhana, atau mencocokkan kata dan definisi.
- Sediakan beberapa pilihan jawaban.
- Pengguna memilih jawaban lalu mengirimkannya.
- Tampilkan feedback benar atau salah beserta penjelasan singkat.
- Sediakan indikator urutan soal, bukan badge dekoratif.
- Tampilkan skor akhir dan jumlah jawaban benar.
- Sediakan tombol untuk mengulang tes.
- Simpan hasil ke state progres dan `localStorage`.

### D. Grammar Test (`/tests/grammar`)

Buat tes grammar interaktif untuk topik:

- Simple Present Tense.
- Present Continuous Tense.
- Simple Past Tense.
- Simple Future Tense.
- Subject–verb agreement.
- Articles (`a`, `an`, `the`).
- Prepositions dasar.
- Sentence structure.

Gunakan pilihan ganda atau melengkapi kalimat. Terapkan alur soal, feedback, skor akhir, pengulangan tes, dan penyimpanan progres seperti Vocabulary Test.

### E. Listening Test (`/tests/listening`)

Buat halaman listening yang memungkinkan pengguna mendengarkan audio lalu menjawab pertanyaan.

Fitur:

- Pemutar audio dengan play/pause, progress bar, dan durasi jika file audio tersedia.
- Instruksi sebelum audio diputar.
- Pertanyaan berdasarkan isi audio.
- Pilihan jawaban dan feedback.
- Hasil akhir dan penyimpanan skor.
- Aturan pemutaran ulang yang jelas.

Untuk versi frontend, siapkan struktur aset `public/audio/`. Gunakan file audio lokal jika tersedia. Jika aset audio belum tersedia, sediakan fallback yang jujur dan jelas. Jangan membuat tombol audio palsu yang tidak memutar apa pun. Pisahkan data audio dan soal dari komponen tampilan agar aset mudah diganti.

### F. Progress (`/progress`)

Tampilkan perjalanan belajar pengguna dari waktu ke waktu.

Isi minimal:

- Progres keseluruhan.
- Jumlah vocabulary yang sudah dipelajari.
- Riwayat dan skor Vocabulary, Grammar, dan Listening Test.
- Frekuensi atau waktu belajar berdasarkan data yang memang dicatat aplikasi.
- Materi yang sudah selesai dan masih berlangsung.
- Ringkasan pencapaian belajar yang bermakna.
- Grafik sederhana jika membantu memahami perkembangan.

Data halaman ini harus berasal dari state/localStorage yang sama dengan hasil tes dan status materi. Jangan memakai angka statis yang tidak berubah.

### G. Profile (`/profile`)

Tampilkan profil demo pengguna:

- Nama.
- Email contoh.
- Avatar sederhana atau inisial.
- Level bahasa Inggris.
- Tanggal mulai belajar.
- Ringkasan aktivitas belajar.

Pengguna dapat mengedit nama dan informasi profil yang relevan. Simpan perubahan secara lokal. Jangan meminta atau menyimpan kata sandi.

### H. Settings (`/settings`)

Sediakan pengaturan yang benar-benar berfungsi:

- Tema terang dan gelap. Tema gelap harus tetap mengikuti nuansa forest/earthy dan menjaga kontras.
- Preferensi notifikasi demo on/off jika ditampilkan.
- Preferensi belajar sederhana.
- Tombol reset progres dengan dialog konfirmasi.

Simpan pengaturan ke `localStorage`. Tampilkan feedback saat pengaturan berubah.

### I. Vocabulary Material (`/materials/vocabulary`)

Buat materi vocabulary seperti halaman catatan atau indeks kata dalam field guide.

Kelompokkan kata berdasarkan tema, misalnya:

- Daily Activities.
- Food and Drinks.
- School and Study.
- Travel.
- Nature.
- Technology.
- Feelings and Communication.

Setiap entri kata memiliki:

- Kata dalam bahasa Inggris.
- Arti dalam bahasa Indonesia.
- Kelas kata jika relevan.
- Contoh kalimat bahasa Inggris.
- Terjemahan contoh kalimat.
- Tombol untuk menandai sudah/belum dipelajari.

Tambahkan pencarian kata, filter topik, dan tampilan detail kata yang nyaman dibaca. Status kata yang telah dipelajari harus memperbarui Dashboard dan Progress.

### J. Grammar Material (`/materials/grammar`)

Buat materi grammar dengan struktur seperti bab-bab ringkas dalam buku panduan.

Materi awal minimal:

- Simple Present Tense.
- Present Continuous Tense.
- Simple Past Tense.
- Simple Future Tense.
- Subject–verb agreement.
- Articles.
- Prepositions dasar.
- Sentence structure.

Setiap materi memiliki:

- Penjelasan singkat dalam bahasa Indonesia.
- Pola atau rumus.
- Contoh kalimat positif, negatif, dan pertanyaan bila relevan.
- Catatan penggunaan.
- Contoh kesalahan umum dan koreksinya.
- Latihan singkat yang mengarah ke Grammar Test.

Jangan hanya menampilkan definisi panjang. Pecah konten menjadi subbagian yang mudah dipindai dan gunakan contoh kontekstual.

## 9. Pola desain per halaman

Gunakan pola berikut untuk membangun konsistensi tanpa membuat seluruh halaman tampak sama:

- **Dashboard:** editorial welcome, learning trail, dan satu tindakan utama.
- **Courses:** learning path atau chapter map, dengan status progres yang mudah dipahami.
- **Materials:** layout seperti buku catatan/field guide, daftar topik di satu sisi dan isi materi di area utama.
- **Tests:** distraction-free practice mode dengan fokus pada soal, pilihan, dan feedback.
- **Progress:** visualisasi perjalanan dan riwayat aktivitas, bukan tumpukan angka statistik.
- **Profile:** profil sederhana dengan ringkasan identitas belajar.
- **Settings:** daftar pengaturan yang terkelompok dan mudah dipindai.

Jangan memaksakan ornamen taman, daun, atau garis lengkung pada setiap komponen. Gunakan visual organik sebagai bahasa desain pendukung, bukan dekorasi berulang.

## 10. Komponen dan struktur folder yang disarankan

Buat komponen reusable ketika benar-benar digunakan berulang kali. Struktur boleh disesuaikan selama pemisahan halaman, komponen, data, dan logika tetap jelas.

```text
src/
├── assets/
│   └── styles/
│       ├── main.css
│       ├── variables.css
│       └── typography.css
├── components/
│   ├── AppHeader.vue
│   ├── AppSidebar.vue
│   ├── AppBottomNav.vue
│   ├── LearningPath.vue
│   ├── ProgressOverview.vue
│   ├── CourseItem.vue
│   ├── LessonRow.vue
│   ├── QuestionCard.vue
│   ├── AnswerOption.vue
│   ├── AudioPlayer.vue
│   ├── VocabularyEntry.vue
│   ├── GrammarLesson.vue
│   └── EmptyState.vue
├── data/
│   ├── courses.js
│   ├── vocabulary.js
│   ├── grammar.js
│   └── tests.js
├── composables/
│   ├── useProgress.js
│   ├── useLocalStorage.js
│   ├── useTheme.js
│   └── useProfile.js
├── layouts/
│   └── MainLayout.vue
├── router/
│   └── index.js
├── views/
│   ├── DashboardView.vue
│   ├── CoursesView.vue
│   ├── VocabularyTestView.vue
│   ├── GrammarTestView.vue
│   ├── ListeningTestView.vue
│   ├── ProgressView.vue
│   ├── ProfileView.vue
│   ├── SettingsView.vue
│   ├── VocabularyMaterialView.vue
│   └── GrammarMaterialView.vue
├── App.vue
└── main.js

public/
└── audio/
    └── (aset audio listening jika tersedia)
```

## 11. Alur data dan interaksi

- Semua tautan navigasi harus menuju route yang benar.
- Semua tombol harus memiliki aksi nyata.
- Semua form memiliki label, validasi dasar, dan pesan kesalahan yang mudah dipahami.
- Tes dapat dikerjakan, dinilai, diulang, dan hasilnya disimpan.
- Hasil tes memperbarui Dashboard dan Progress.
- Status vocabulary yang telah dipelajari memperbarui ringkasan progres.
- Profil dan pengaturan tersimpan secara lokal.
- Sediakan empty state ketika belum ada aktivitas.
- Berikan feedback yang konsisten untuk jawaban benar/salah, penyimpanan, dan reset.
- Hindari penggunaan `alert()` untuk semua interaksi. Gunakan dialog atau pesan inline yang dirancang sesuai UI.
- Tangani kondisi `localStorage` kosong atau gagal dibaca.
- Jangan menghapus progres latihan yang masih berlangsung tanpa alasan yang jelas.

Gunakan satu sumber data/state yang konsisten agar Dashboard, Courses, dan Progress tidak menampilkan angka yang saling bertentangan.

## 12. Responsivitas

Website wajib responsif untuk ponsel, tablet, laptop, dan desktop.

- Gunakan pendekatan mobile-first.
- Gunakan CSS Grid dan Flexbox sesuai kebutuhan.
- Hindari lebar tetap yang menyebabkan horizontal scroll.
- Navigasi desktop harus berubah menjadi pola mobile yang nyaman.
- Pada layar kecil, learning path dan daftar bab harus berubah menjadi alur vertikal atau susunan yang tetap mudah dipahami.
- Pemutar audio dan soal tes harus nyaman digunakan dengan sentuhan.
- Atur ukuran font, line-height, jarak, dan padding secara proporsional.
- Uji minimal pada lebar sekitar 360 px, 768 px, 1024 px, dan 1440 px.
- Pastikan tidak ada teks terpotong, elemen bertumpuk, atau konten keluar dari viewport.

## 13. Aksesibilitas dan kualitas kode

- Gunakan elemen HTML semantik seperti `header`, `nav`, `main`, `section`, `form`, dan `button`.
- Pastikan setiap input mempunyai label.
- Sediakan focus state yang terlihat untuk keyboard navigation.
- Jangan mengandalkan warna saja untuk menandai status benar atau salah.
- Periksa kontras warna.
- Tambahkan `alt` yang sesuai pada gambar informatif.
- Gunakan nama komponen, variabel, dan fungsi yang jelas.
- Hindari komponen atau file yang terlalu besar.
- Pisahkan data statis dari tampilan.
- Hindari duplikasi logika di tiga jenis tes.
- Hormati `prefers-reduced-motion`.
- Jangan meninggalkan error atau warning penting di console.

## 14. Batasan tahap pengembangan

Untuk versi pertama:

- Frontend saja, tanpa backend atau database.
- Tidak perlu login/register sungguhan.
- Tidak perlu pembayaran, langganan, atau integrasi layanan pihak ketiga.
- Tidak perlu fitur sosial, leaderboard publik, atau sistem kompetisi kompleks.
- Gunakan data demo yang realistis.
- Gunakan `localStorage` untuk menyimulasikan penyimpanan data.
- Buat struktur kode yang memungkinkan backend/API ditambahkan kemudian.

## 15. Hasil akhir yang wajib dibuat

Hasilkan proyek Vue.js yang benar-benar dapat dijalankan, bukan hanya gambar desain atau potongan kode. Pastikan hasil akhir memiliki:

1. Semua 10 halaman yang ditentukan.
2. Navigasi antarhalaman yang berfungsi.
3. Identitas visual organic/earthy yang konsisten dan orisinal.
4. Pengalaman belajar yang terasa seperti ekosistem eksplorasi materi, bukan dashboard generik.
5. Vocabulary Test, Grammar Test, dan Listening Test dengan alur lengkap.
6. Materi Vocabulary dan Grammar yang dapat dibaca dan digunakan.
7. Dashboard dan Progress yang terhubung dengan aktivitas lokal.
8. Profile dan Settings yang dapat diedit serta disimpan secara lokal.
9. Layout responsif pada mobile, tablet, dan desktop.
10. Struktur komponen dan kode yang rapi serta mudah dikembangkan.
11. README proyek yang menjelaskan cara instalasi dan menjalankan aplikasi.
12. Script build yang berhasil dijalankan dengan `npm run build`.

## 16. Checklist sebelum menyelesaikan proyek

- [ ] Proyek berjalan dengan `npm install` dan `npm run dev`.
- [ ] `npm run build` berhasil.
- [ ] Semua route dapat dibuka dan tidak menghasilkan halaman kosong.
- [ ] Semua tautan navigasi berfungsi.
- [ ] Tidak ada tombol utama yang hanya menjadi hiasan.
- [ ] Tes Vocabulary dapat dikerjakan sampai hasil akhir.
- [ ] Tes Grammar dapat dikerjakan sampai hasil akhir.
- [ ] Listening menyediakan audio yang dapat diputar atau fallback yang jujur jika aset belum tersedia.
- [ ] Hasil tes tersimpan dan terlihat pada Progress.
- [ ] Status materi Vocabulary tersimpan.
- [ ] Edit Profile dan Settings tetap tersimpan setelah refresh.
- [ ] Layout diuji pada lebar 360 px, 768 px, 1024 px, dan 1440 px.
- [ ] Tidak ada horizontal scroll yang tidak disengaja.
- [ ] Kontras teks dan latar dapat dibaca.
- [ ] Tidak ada error penting di console.
- [ ] Desain tidak dipenuhi badge, card, ornamen, atau elemen tanpa fungsi.
- [ ] Tampilan terinspirasi oleh pendekatan eksplorasi belajar pada referensi, tetapi identitas visual dan asetnya orisinal.

## 17. Instruksi pengerjaan untuk AI coding assistant

Sebelum mengubah kode:

1. Baca seluruh file brief ini.
2. Periksa struktur proyek yang sudah ada.
3. Periksa `package.json` dan dependency yang sudah terpasang.
4. Jangan menghapus file atau konfigurasi yang masih diperlukan.
5. Buat rencana singkat berdasarkan kondisi proyek, lalu langsung implementasikan.

Saat mengerjakan:

- Jangan berhenti pada mockup, wireframe, atau penjelasan.
- Buat dan edit file proyek secara langsung.
- Implementasikan fondasi desain terlebih dahulu: CSS variables, tipografi, layout, navigasi, dan komponen dasar.
- Bangun Dashboard sebagai representasi utama identitas visual.
- Lanjutkan seluruh halaman dan interaksi yang ditentukan; jangan berhenti setelah Dashboard.
- Gunakan data lokal untuk simulasi frontend.
- Jangan mengurangi fitur yang tercantum dalam brief.
- Jika aset tertentu tidak tersedia, buat fallback yang jujur dan tetap fungsional.

Setelah implementasi:

1. Jalankan atau pastikan `npm install` dapat dijalankan.
2. Jalankan `npm run build` dan perbaiki error build.
3. Uji semua route dan interaksi utama.
4. Periksa tampilan pada ukuran mobile, tablet, dan desktop.
5. Periksa browser console dan terminal.
6. Laporkan fitur yang sudah selesai dan keterbatasan yang masih ada secara jujur.

**TUGAS UTAMA: Bangun website English Learning menggunakan Vue.js 3 + Vite sesuai seluruh brief ini. Pertahankan seluruh halaman dan fungsi, tetapi gunakan identitas visual “Language Garden / Field Guide” dengan palet organic/earthy. Desain harus orisinal, responsif, fungsional, dan tidak terlihat seperti template AI generik.**

---

## Cara menjalankan proyek

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite (biasanya `http://localhost:5173`).

Build produksi:

```bash
npm run build
npm run preview
```

### Catatan implementasi

- Seluruh data demo, progres, profil, dan pengaturan tersimpan di `localStorage` dengan kunci `enxist:state:v1`.
- Belum ada berkas audio. Sesi listening menampilkan transkrip terbuka sebagai fallback yang jujur; untuk mengaktifkan pemutar, taruh berkas di `public/audio/` lalu isi `audioSrc` di `src/data/listening.js`.
- Halaman: `/`, `/courses`, `/materials/vocabulary`, `/materials/grammar`, `/tests/vocabulary`, `/tests/grammar`, `/tests/listening`, `/progress`, `/profile`, `/settings`.

