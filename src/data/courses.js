export const courses = [
  {
    id: 'first-words',
    number: '01',
    title: 'First Words',
    level: 'Beginner',
    topic: 'Vocabulary',
    lessons: 8,
    minutes: 45,
    description: 'Kata-kata yang paling sering dipakai untuk mulai bercerita tentang diri dan keseharian.',
    startRoute: '/materials/vocabulary',
    trail: ['Sapaan', 'Keseharian', 'Makan', 'Tempat']
  },
  {
    id: 'daily-routes',
    number: '02',
    title: 'Daily Routes',
    level: 'Beginner',
    topic: 'Vocabulary',
    lessons: 10,
    minutes: 60,
    description: 'Perbendaharaan kata untuk perjalanan, belajar, dan kegiatan sehari-hari.',
    startRoute: '/materials/vocabulary',
    trail: ['Rutinitas', 'Sekolah', 'Perjalanan', 'Alam']
  },
  {
    id: 'sentence-ground',
    number: '03',
    title: 'Sentence Ground',
    level: 'Elementary',
    topic: 'Grammar',
    lessons: 8,
    minutes: 75,
    description: 'Menyusun kalimat yang jelas dengan present dan past tense serta urutan kata yang tepat.',
    startRoute: '/materials/grammar',
    trail: ['Simple Present', 'Present Continuous', 'Simple Past', 'Struktur']
  },
  {
    id: 'small-talk',
    number: '04',
    title: 'Small Talk',
    level: 'Elementary',
    topic: 'Grammar',
    lessons: 9,
    minutes: 80,
    description: 'Bertanya dan menjawab dengan percaya diri memakai future tense, artikel, dan preposisi.',
    startRoute: '/tests/grammar',
    trail: ['Simple Future', 'Articles', 'Prepositions', 'Pertanyaan']
  },
  {
    id: 'garden-listening',
    number: '05',
    title: 'Garden Listening',
    level: 'Elementary',
    topic: 'Listening',
    lessons: 6,
    minutes: 50,
    description: 'Melatih telinga mengenali kata dan makna dari percakapan pendek yang akrab.',
    startRoute: '/tests/listening',
    trail: ['Dengar', 'Tangkap inti', 'Jawab', 'Ulang']
  },
  {
    id: 'field-notes',
    number: '06',
    title: 'Field Notes',
    level: 'Intermediate',
    topic: 'Mixed',
    lessons: 12,
    minutes: 110,
    description: 'Menggabungkan vocabulary, grammar, dan listening dalam sesi latihan yang lebih panjang.',
    startRoute: '/tests/vocabulary',
    trail: ['Kata', 'Kalimat', 'Audio', 'Ujian']
  }
]

export const levels = ['All', 'Beginner', 'Elementary', 'Intermediate']
export const topics = ['All', 'Vocabulary', 'Grammar', 'Listening', 'Mixed']
