export const vocabularyThemes = [
  { id: 'daily', name: 'Daily Activities', note: 'Kata untuk rutinitas dan kebiasaan.' },
  { id: 'food', name: 'Food and Drinks', note: 'Apa yang kita makan dan minum.' },
  { id: 'school', name: 'School and Study', note: 'Benda dan kegiatan di ruang belajar.' },
  { id: 'travel', name: 'Travel', note: 'Bergerak dari satu tempat ke tempat lain.' },
  { id: 'nature', name: 'Nature', note: 'Hal-hal yang tumbuh dan mengelilingi kita.' },
  { id: 'technology', name: 'Technology', note: 'Alat yang dipakai sehari-hari.' },
  { id: 'feelings', name: 'Feelings and Communication', note: 'Menyampaikan keadaan dan maksud.' }
]

export const vocabulary = [
  { id: 'w01', theme: 'daily', word: 'wake up', type: 'verb', meaning: 'bangun (dari tidur)', example: 'I wake up at six every morning.', translation: 'Saya bangun pukul enam setiap pagi.' },
  { id: 'w02', theme: 'daily', word: 'commute', type: 'verb', meaning: 'bepergian ke tempat kerja/sekolah', example: 'She commutes by train.', translation: 'Ia bepergian dengan kereta api.' },
  { id: 'w03', theme: 'daily', word: 'errand', type: 'noun', meaning: 'tugas kecil di luar rumah', example: 'I have one errand after lunch.', translation: 'Saya punya satu urusan kecil setelah makan siang.' },
  { id: 'w04', theme: 'daily', word: 'routine', type: 'noun', meaning: 'rutinitas', example: 'A calm routine helps me study.', translation: 'Rutinitas yang tenang membantu saya belajar.' },
  { id: 'w05', theme: 'daily', word: 'tidy', type: 'verb', meaning: 'merapikan', example: 'We tidy the desk before dinner.', translation: 'Kami merapikan meja sebelum makan malam.' },
  { id: 'w06', theme: 'daily', word: 'rest', type: 'verb', meaning: 'beristirahat', example: 'You should rest after a long walk.', translation: 'Kamu sebaiknya beristirahat setelah jalan panjang.' },

  { id: 'w07', theme: 'food', word: 'breakfast', type: 'noun', meaning: 'sarapan', example: 'Breakfast is ready on the table.', translation: 'Sarapan sudah siap di meja.' },
  { id: 'w08', theme: 'food', word: 'recipe', type: 'noun', meaning: 'resep', example: 'This recipe uses three ingredients.', translation: 'Resep ini memakai tiga bahan.' },
  { id: 'w09', theme: 'food', word: 'fresh', type: 'adjective', meaning: 'segar, baru', example: 'The market sells fresh bread.', translation: 'Pasar menjual roti segar.' },
  { id: 'w10', theme: 'food', word: 'shared', type: 'adjective', meaning: 'dibagi bersama', example: 'We ordered a shared plate of fruit.', translation: 'Kami memesan satu piring buah untuk bersama.' },
  { id: 'w11', theme: 'food', word: 'boil', type: 'verb', meaning: 'merebus', example: 'Boil the water before adding tea.', translation: 'Rebus air sebelum memasukkan teh.' },
  { id: 'w12', theme: 'food', word: 'snack', type: 'noun', meaning: 'camilan', example: 'A small snack keeps me focused.', translation: 'Camilan kecil membuat saya tetap fokus.' },

  { id: 'w13', theme: 'school', word: 'assignments', type: 'noun', meaning: 'tugas yang diberikan', example: 'I finished two assignments today.', translation: 'Saya menyelesaikan dua tugas hari ini.' },
  { id: 'w14', theme: 'school', word: 'revise', type: 'verb', meaning: 'mengulang pelajaran', example: 'We revise vocabulary before a quiz.', translation: 'Kami mengulang kosakata sebelum kuis.' },
  { id: 'w15', theme: 'school', word: 'notebook', type: 'noun', meaning: 'buku catatan', example: 'Her notebook is full of examples.', translation: 'Buku catatannya penuh dengan contoh.' },
  { id: 'w16', theme: 'school', word: 'schedule', type: 'noun', meaning: 'jadwal', example: 'The class schedule changed today.', translation: 'Jadwal kelas berubah hari ini.' },
  { id: 'w17', theme: 'school', word: 'question', type: 'noun', meaning: 'pertanyaan', example: 'Ask a question if the text is unclear.', translation: 'Ajukan pertanyaan jika teksnya kurang jelas.' },
  { id: 'w18', theme: 'school', word: 'practice', type: 'verb', meaning: 'berlatih', example: 'Practice ten minutes every day.', translation: 'Berlatihlah sepuluh menit setiap hari.' },

  { id: 'w19', theme: 'travel', word: 'journey', type: 'noun', meaning: 'perjalanan', example: 'The journey took about two hours.', translation: 'Perjalanan itu memakan waktu sekitar dua jam.' },
  { id: 'w20', theme: 'travel', word: 'platform', type: 'noun', meaning: 'peron', example: 'The train waits at platform three.', translation: 'Kereta menunggu di peron tiga.' },
  { id: 'w21', theme: 'travel', word: 'luggage', type: 'noun', meaning: 'bagasi', example: 'Keep your luggage close.', translation: 'Jaga bagasi Anda tetap dekat.' },
  { id: 'w22', theme: 'travel', word: 'destination', type: 'noun', meaning: 'tujuan', example: 'Our destination is the old town.', translation: 'Tujuan kami adalah kota tua.' },
  { id: 'w23', theme: 'travel', word: 'book', type: 'verb', meaning: 'memesan (tiket/kamar)', example: 'I booked a seat by the window.', translation: 'Saya memesan kursi dekat jendela.' },
  { id: 'w24', theme: 'travel', word: 'nearby', type: 'adjective', meaning: 'di dekat sini', example: 'There is a cafe nearby.', translation: 'Ada kafe di dekat sini.' },

  { id: 'w25', theme: 'nature', word: 'garden', type: 'noun', meaning: 'taman', example: 'The garden wakes up in spring.', translation: 'Taman menjadi hidup di musim semi.' },
  { id: 'w26', theme: 'nature', word: 'seed', type: 'noun', meaning: 'biji', example: 'A small seed becomes a tall plant.', translation: 'Sebiji kecil menjadi tanaman tinggi.' },
  { id: 'w27', theme: 'nature', word: 'shade', type: 'noun', meaning: 'teduh', example: 'We sat in the shade of a tree.', translation: 'Kami duduk di teduhan pohon.' },
  { id: 'w28', theme: 'nature', word: 'stream', type: 'noun', meaning: 'aliran kecil', example: 'A stream runs behind the house.', translation: 'Sebuah aliran kecil mengalir di belakang rumah.' },
  { id: 'w29', theme: 'nature', word: 'bloom', type: 'verb', meaning: 'bermekar', example: 'The flowers bloom in April.', translation: 'Bunga-bunga mekar pada bulan April.' },
  { id: 'w30', theme: 'nature', word: 'breeze', type: 'noun', meaning: 'angin sepoi', example: 'A cool breeze came through the window.', translation: 'Angin sepoi yang sejuk masuk lewat jendela.' },

  { id: 'w31', theme: 'technology', word: 'device', type: 'noun', meaning: 'perangkat', example: 'This device saves my notes.', translation: 'Perangkat ini menyimpan catatan saya.' },
  { id: 'w32', theme: 'technology', word: 'charge', type: 'verb', meaning: 'mengisi daya', example: 'I charge my phone at night.', translation: 'Saya mengisi daya ponsel di malam hari.' },
  { id: 'w33', theme: 'technology', word: 'screen', type: 'noun', meaning: 'layar', example: 'The screen is easy to read.', translation: 'Layarnya mudah dibaca.' },
  { id: 'w34', theme: 'technology', word: 'connect', type: 'verb', meaning: 'menghubungkan', example: 'Connect the speaker before the call.', translation: 'Hubungkan speaker sebelum panggilan.' },
  { id: 'w35', theme: 'technology', word: 'update', type: 'verb', meaning: 'memperbarui', example: 'Remember to update your notes.', translation: 'Ingat untuk memperbarui catatanmu.' },
  { id: 'w36', theme: 'technology', word: 'offline', type: 'adjective', meaning: 'tanpa koneksi internet', example: 'The lessons work offline.', translation: 'Pelajaran-pelajaran itu bekerja tanpa internet.' },

  { id: 'w37', theme: 'feelings', word: 'calm', type: 'adjective', meaning: 'tenang', example: 'I feel calm after a short walk.', translation: 'Saya merasa tenang setelah jalan sebentar.' },
  { id: 'w38', theme: 'feelings', word: 'nervous', type: 'adjective', meaning: 'gugup', example: 'She was nervous before the test.', translation: 'Ia gugup sebelum tes.' },
  { id: 'w39', theme: 'feelings', word: 'explain', type: 'verb', meaning: 'menjelaskan', example: 'Can you explain this word again?', translation: 'Bisakah kamu menjelaskan kata ini lagi?' },
  { id: 'w40', theme: 'feelings', word: 'agree', type: 'verb', meaning: 'setuju', example: 'We agree on the answer.', translation: 'Kami setuju tentang jawabannya.' },
  { id: 'w41', theme: 'feelings', word: 'polite', type: 'adjective', meaning: 'sopan', example: 'A polite reply makes a difference.', translation: 'Balasan yang sopan membuat perbedaan.' },
  { id: 'w42', theme: 'feelings', word: 'encourage', type: 'verb', meaning: 'mendorong, menyemangati', example: 'Friends encourage each other to learn.', translation: 'Teman-teman saling menyemangati untuk belajar.' }
]
