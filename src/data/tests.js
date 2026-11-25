export const vocabularyQuestions = [
  {
    id: 'v1', type: 'Arti kata', prompt: 'What does “breeze” mean?', options: ['Angin sepoi', 'Badai besar', 'Hujan deras', 'Panas terik'], answer: 0,
    explanation: 'Breeze adalah angin yang lembut dan sejuk, bukan badai.'
  },
  {
    id: 'v2', type: 'Konteks', prompt: 'The flowers ___ in April.', options: ['bloom', 'boil', 'commute', 'tidy'], answer: 0,
    explanation: 'Bloom berarti mekar. Kata lain tidak cocok dengan subjek flowers.'
  },
  {
    id: 'v3', type: 'Sinonim', prompt: 'Which word is closest to “fresh”?', options: ['New', 'Old', 'Heavy', 'Quiet'], answer: 0,
    explanation: 'Fresh berarti baru atau segar, sehingga new paling dekat maknanya.'
  },
  {
    id: 'v4', type: 'Antonim', prompt: '“Nervous” is the opposite of…', options: ['Calm', 'Busy', 'Late', 'Brief'], answer: 0,
    explanation: 'Nervous (gugup) berlawanan dengan calm (tenang).'
  },
  {
    id: 'v5', type: 'Arti kata', prompt: 'Choose the meaning of “destination”.', options: ['Tujuan', 'Peron', 'Bagasi', 'Jadwal'], answer: 0,
    explanation: 'Destination adalah tempat yang dituju dalam sebuah perjalanan.'
  },
  {
    id: 'v6', type: 'Konteks', prompt: 'Please ___ the water before adding the tea.', options: ['boil', 'bloom', 'agree', 'revise'], answer: 0,
    explanation: 'Boil berarti merebus, sesuai dengan konteks air dan teh.'
  },
  {
    id: 'v7', type: 'Kelas kata', prompt: 'Which word is a verb?', options: ['Encourage', 'Notebook', 'Breeze', 'Recipe'], answer: 0,
    explanation: 'Encourage adalah kata kerja yang berarti menyemangati.'
  },
  {
    id: 'v8', type: 'Sinonim', prompt: '“Errand” is closest in meaning to…', options: ['A small task', 'A long holiday', 'A big meal', 'A loud sound'], answer: 0,
    explanation: 'Errand adalah urusan atau tugas kecil yangbiasanya dilakukan di luar rumah.'
  },
  {
    id: 'v9', type: 'Konteks', prompt: 'We sat in the ___ of a tall tree.', options: ['shade', 'screen', 'luggage', 'platform'], answer: 0,
    explanation: 'Shade berarti teduhan, cocok dengan konteks pohon.'
  },
  {
    id: 'v10', type: 'Arti kata', prompt: 'What does “offline” mean?', options: ['Tanpa koneksi internet', 'Sedang terhubung', 'Sangat cepat', 'Milik sekolah'], answer: 0,
    explanation: 'Offline berarti tidak terhubung ke internet.'
  },
  {
    id: 'v11', type: 'Konteks', prompt: 'I ___ my phone every night.', options: ['charge', 'book', 'explain', 'rest'], answer: 0,
    explanation: 'Charge berarti mengisi daya, sesuai dengan konteks ponsel.'
  },
  {
    id: 'v12', type: 'Antonim', prompt: '“Polite” is the opposite of…', options: ['Rude', 'Calm', 'Fresh', 'Nearby'], answer: 0,
    explanation: 'Polite (sopan) berlawanan dengan rude (kasar).'
  }
]

export const grammarQuestions = [
  {
    id: 'g1', topic: 'Simple Present', prompt: 'She ___ English notes every evening.', options: ['reads', 'read', 'is read', 'reading'], answer: 0,
    explanation: 'Subjek orang ketiga tunggal pada simple present memakai kata kerja berakhiran -s.'
  },
  {
    id: 'g2', topic: 'Simple Present', prompt: '___ you like fresh bread?', options: ['Do', 'Does', 'Are', 'Did'], answer: 0,
    explanation: 'Subjek you memakai Do pada pertanyaan simple present.'
  },
  {
    id: 'g3', topic: 'Present Continuous', prompt: 'I ___ vocabulary right now.', options: ['am revising', 'revise', 'revises', 'revised'], answer: 0,
    explanation: 'Kegiatan yang sedang berlangsung memakai am/is/are + verb-ing.'
  },
  {
    id: 'g4', topic: 'Present Continuous', prompt: 'They ___ an exam at the moment.', options: ['are not writing', 'do not write', 'did not write', 'not writing'], answer: 0,
    explanation: 'Kalimat negatif present continuous memakai are not + verb-ing.'
  },
  {
    id: 'g5', topic: 'Simple Past', prompt: 'We ___ the market yesterday.', options: ['visited', 'visit', 'visits', 'visiting'], answer: 0,
    explanation: 'Yesterday menandakan masa lalu, jadi gunakan bentuk lampau visited.'
  },
  {
    id: 'g6', topic: 'Simple Past', prompt: 'Did you ___ home early?', options: ['go', 'went', 'gone', 'going'], answer: 0,
    explanation: 'Setelah did, kata kerja kembali ke bentuk dasar: go.'
  },
  {
    id: 'g7', topic: 'Simple Future', prompt: 'She ___ the text tomorrow.', options: ['will read', 'will reads', 'is will read', 'will reading'], answer: 0,
    explanation: 'Will diikuti kata kerja dasar tanpa -s.'
  },
  {
    id: 'g8', topic: 'Subject–Verb Agreement', prompt: 'The list of words ___ short.', options: ['is', 'are', 'were', 'be'], answer: 0,
    explanation: 'Subjek utamanya adalah list (tunggal), jadi kata kerjanya is.'
  },
  {
    id: 'g9', topic: 'Articles', prompt: 'She is ___ engineer.', options: ['an', 'a', 'the', '—'], answer: 0,
    explanation: 'Engineer diawali bunyi vokal, jadi memakai an.'
  },
  {
    id: 'g10', topic: 'Articles', prompt: 'I need ___ water.', options: ['some', 'a', 'an', 'one'], answer: 0,
    explanation: 'Water adalah kata benda tak terhitung, jadi gunakan some, bukan a.'
  },
  {
    id: 'g11', topic: 'Prepositions', prompt: 'The keys are ___ the drawer.', options: ['in', 'on', 'at', 'by'], answer: 0,
    explanation: 'In dipakai untuk sesuatu di dalam ruang tertutup seperti laci.'
  },
  {
    id: 'g12', topic: 'Prepositions', prompt: 'We meet ___ seven ___ Monday.', options: ['at / on', 'in / on', 'at / in', 'on / at'], answer: 0,
    explanation: 'At untuk jam, on untuk hari.'
  },
  {
    id: 'g13', topic: 'Sentence Structure', prompt: 'Choose the correct order.', options: ['She reads a short story.', 'Reads she a short story.', 'A short story reads she.', 'She a story reads short.'], answer: 0,
    explanation: 'Urutan kalimat Inggris adalah subjek – kata kerja – objek.'
  },
  {
    id: 'g14', topic: 'Sentence Structure', prompt: 'Choose the correct sentence.', options: ['A short story is on the desk.', 'A story short is on the desk.', 'Story a short is on the desk.', 'Is a short story on the desk.'], answer: 0,
    explanation: 'Kata sifat diletakkan sebelum kata benda yang dijelaskannya.'
  }
]
