export const grammarLessons = [
  {
    id: 'simple-present',
    number: '01',
    title: 'Simple Present Tense',
    summary: 'Untuk kebiasaan, fakta, dan hal yang terjadi secara rutin.',
    explanation: 'Simple present dipakai ketika kita berbicara tentang sesuatu yang biasa dilakukan atau kebenaran Umum. Kata kerja mendapat akhiran -s atau -es hanya untuk subjek orang ketiga tunggal (he, she, it).',
    pattern: 'Subjek + kata kerja ( + s/es untuk he/she/it )',
    examples: [
      { positive: 'She reads English notes every evening.', negative: 'She does not read on Sundays.', question: 'Does she read every evening?' },
      { positive: 'They live near the garden.', negative: 'They do not live far from here.', question: 'Do they live near the garden?' }
    ],
    notes: 'Gunakan does pada pertanyaan dan kalimat negatif untuk he/she/it. Setelah does, kata kerja kembali ke bentuk dasar: Does she like, bukan Does she likes.',
    mistakes: [
      { wrong: 'He like fresh bread.', right: 'He likes fresh bread.' },
      { wrong: 'Does he likes the class?', right: 'Does he like the class?' }
    ],
    practice: '/tests/grammar'
  },
  {
    id: 'present-continuous',
    number: '02',
    title: 'Present Continuous Tense',
    summary: 'Untuk kegiatan yang sedang berlangsung sekarang.',
    explanation: 'Present continuous menggambarkan sesuatu yang sedang terjadi pada saat bicara atau sekitar waktu itu. Bentuknya adalah am/is/are + kata kerja dengan akhiran -ing.',
    pattern: 'Subjek + am/is/are + verb-ing',
    examples: [
      { positive: 'I am revising vocabulary now.', negative: 'I am not watching television.', question: 'Are you revising right now?' },
      { positive: 'The students are writing a short story.', negative: 'The students are not writing an exam.', question: 'Are the students writing?' }
    ],
    notes: 'Kata kerja tertentu jarang dipakai dalam bentuk -ing, seperti know, like, dan believe. Untuk itu gunakan simple present.',
    mistakes: [
      { wrong: 'She is know the answer.', right: 'She knows the answer.' },
      { wrong: 'They are study now.', right: 'They are studying now.' }
    ],
    practice: '/tests/grammar'
  },
  {
    id: 'simple-past',
    number: '03',
    title: 'Simple Past Tense',
    summary: 'Untuk kejadian yang sudah selesai di masa lalu.',
    explanation: 'Simple past dipakai untuk tindakan yang terjadi dan berakhir pada waktu tertentu di masa lalu. Kata kerja beraturan mendapat -ed, sementara kata kerja tidak beraturan punya bentuk khusus.',
    pattern: 'Subjek + kata kerja lampau ( -ed / bentuk tidak beraturan )',
    examples: [
      { positive: 'We visited the market yesterday.', negative: 'We did not visit the museum.', question: 'Did you visit the market?' },
      { positive: 'She wrote three new words.', negative: 'She did not write them down.', question: 'Did she write them down?' }
    ],
    notes: 'Setelah did, gunakan kata kerja dasar: Did you go, bukan Did you went. Keterangan waktu seperti yesterday, last week, dan in 2020 sering menyertai simple past.',
    mistakes: [
      { wrong: 'Did you went home?', right: 'Did you go home?' },
      { wrong: 'He doned his homework.', right: 'He did his homework.' }
    ],
    practice: '/tests/grammar'
  },
  {
    id: 'simple-future',
    number: '04',
    title: 'Simple Future Tense',
    summary: 'Untuk rencana, janji, dan prediksi.',
    explanation: 'Simple future dibentuk dengan will + kata kerja dasar. Pola going to juga dipakai untuk rencana yang sudah dipikirkan sebelumnya.',
    pattern: 'Subjek + will + kata kerja dasar',
    examples: [
      { positive: 'I will practice after dinner.', negative: 'I will not skip the quiz.', question: 'Will you practice tonight?' },
      { positive: 'It will rain this afternoon.', negative: 'It will not rain tomorrow.', question: 'Will it rain later?' }
    ],
    notes: 'Will tidak berubah sesuai subjek. Jangan menambahkan -s pada kata kerja setelah will.',
    mistakes: [
      { wrong: 'She will reads the text.', right: 'She will read the text.' },
      { wrong: 'I am will study.', right: 'I will study.' }
    ],
    practice: '/tests/grammar'
  },
  {
    id: 'subject-verb-agreement',
    number: '05',
    title: 'Subject–Verb Agreement',
    summary: 'Agar subjek dan kata kerja cocok dalam jumlah.',
    explanation: 'Subjek tunggal memakai kata kerja tunggal, subjek jamak memakai kata kerja jamak. Perhatikan kata di antara subjek dan kata kerja, karena sering menyesatkan.',
    pattern: 'Subjek tunggal + works / Subjek jamak + work',
    examples: [
      { positive: 'The notebook is on the desk.', negative: 'The notebooks are not on the desk.', question: 'Is the notebook on the desk?' },
      { positive: 'The list of words is short.', negative: 'The list of words is not long.', question: 'Is the list of words short?' }
    ],
    notes: 'Pada kalimat The list of words is..., subjeknya adalah list, bukan words. Gunakan kata kerja tunggal.',
    mistakes: [
      { wrong: 'The students is ready.', right: 'The students are ready.' },
      { wrong: 'A list of tasks are useful.', right: 'A list of tasks is useful.' }
    ],
    practice: '/tests/grammar'
  },
  {
    id: 'articles',
    number: '06',
    title: 'Articles: a, an, the',
    summary: 'Memilih penanda kata benda dengan tepat.',
    explanation: 'A dan an dipakai untuk benda tunggal yang belum dikenal. The dipakai ketika pembicara dan pendengar sudah tahu benda yang dimaksud.',
    pattern: 'a + awalan konsonan / an + awalan vokal / the + benda yang sudah jelas',
    examples: [
      { positive: 'I bought a notebook and an apple.', negative: 'I did not buy the notebook you mentioned.', question: 'Did you buy an apple?' },
      { positive: 'The apple is on the table.', negative: 'The apple is not fresh.', question: 'Is the apple fresh?' }
    ],
    notes: 'Perhatikan bunyinya, bukan hurufnya: an hour, bukan a hour, karena huruf h tidak dibunyikan.',
    mistakes: [
      { wrong: 'She is a engineer.', right: 'She is an engineer.' },
      { wrong: 'I need a water.', right: 'I need some water.' }
    ],
    practice: '/tests/grammar'
  },
  {
    id: 'prepositions',
    number: '07',
    title: 'Basic Prepositions',
    summary: 'Menunjukkan tempat, waktu, dan arah.',
    explanation: 'Preposisi kecil tapi penting. In untuk tempat tertutup dan bagian dari hari, on untuk permukaan dan tanggal, at untuk titik tertentu.',
    pattern: 'in + ruang/bulan · on + permukaan/tanggal · at + titik/jam',
    examples: [
      { positive: 'The keys are in the drawer.', negative: 'The keys are not on the shelf.', question: 'Are the keys in the drawer?' },
      { positive: 'We meet at seven on Monday.', negative: 'We do not meet on Tuesday.', question: 'Do we meet at seven?' }
    ],
    notes: 'Kata-kata tertentu punya pola tetap: arrive at a station, arrive in a city, dan good at something.',
    mistakes: [
      { wrong: 'The book is on the bag.', right: 'The book is in the bag.' },
      { wrong: 'I will call you in 8 o’clock.', right: 'I will call you at 8 o’clock.' }
    ],
    practice: '/tests/grammar'
  },
  {
    id: 'sentence-structure',
    number: '08',
    title: 'Sentence Structure',
    summary: 'Menyusun subjek, kata kerja, dan objek secara jelas.',
    explanation: 'Kalimat Inggris pada umumnya mengikuti urutan subjek – kata kerja – objek. Kata sifat biasanya mendahului kata benda yang dijelaskannya.',
    pattern: 'Subjek + kata kerja + objek + keterangan',
    examples: [
      { positive: 'She reads a short story at night.', negative: 'She does not read a long novel.', question: 'Does she read a short story?' },
      { positive: 'We keep a small garden behind the house.', negative: 'We do not keep it in front.', question: 'Do you keep a garden?' }
    ],
    notes: 'Keterangan waktu bisa diletakkan di awal atau akhir kalimat. Di awal, tambahkan koma: After lunch, I revise my notes.',
    mistakes: [
      { wrong: 'Reads she a story?', right: 'Does she read a story?' },
      { wrong: 'A story short is on the desk.', right: 'A short story is on the desk.' }
    ],
    practice: '/tests/grammar'
  }
]
