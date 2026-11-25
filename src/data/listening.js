// Data audio sengaja dipisah dari komponen tampilan.
// Taruh berkas di public/audio/ lalu isi `audioSrc` dengan path, mis. '/audio/market-morning.mp3'.
// Bila audioSrc kosong, UI menampilkan fallback transkrip yang jujur — bukan tombol audio palsu.

export const listeningTracks = [
  {
    id: 'l1',
    title: 'A Morning at the Market',
    setting: 'Pasar kecil, pagi hari',
    duration: 'sekitar 1 menit',
    audioSrc: null,
    instructions: 'Dengarkan percakapan antara Ana dan penjual buah. Perhatikan apa yang dibeli Ana dan jam berapa ia tiba.',
    transcript: [
      { speaker: 'Ana', text: 'Good morning. I would like some fresh apples, please.' },
      { speaker: 'Seller', text: 'Good morning! These apples came this morning. How many do you need?' },
      { speaker: 'Ana', text: 'Six, please. I also need a bottle of water.' },
      { speaker: 'Seller', text: 'Six apples and one bottle of water. That is nine thousand rupiah.' },
      { speaker: 'Ana', text: 'Here you are. Thank you. I came early because the market is calm before eight.' }
    ],
    questions: [
      { id: 'lq1', prompt: 'What does Ana buy?', options: ['Six apples and water', 'Six oranges and tea', 'Four apples and bread'], answer: 0, explanation: 'Ana meminta six apples dan a bottle of water.' },
      { id: 'lq2', prompt: 'How much does Ana pay?', options: ['Nine thousand rupiah', 'Eight thousand rupiah', 'Ten thousand rupiah'], answer: 0, explanation: 'Penjual menyebut harga nine thousand rupiah.' },
      { id: 'lq3', prompt: 'Why does Ana come early?', options: ['The market is calm before eight', 'The apples are cheaper', 'She has a class'], answer: 0, explanation: 'Ana mengatakan the market is calm before eight.' }
    ]
  },
  {
    id: 'l2',
    title: 'notes on the Desk',
    setting: 'Ruang belajar, sore hari',
    duration: 'sekitar 1 menit',
    audioSrc: null,
    instructions: 'Dengarkan pesan singkat dari Rani untuk temannya. Perhatikan di mana catatannya dan apa yang akan mereka lakukan.',
    transcript: [
      { speaker: 'Rani', text: 'Hi Dan, I left my notebook on the desk near the window.' },
      { speaker: 'Rani', text: 'I revised the present tense questions in it. Please read page twelve.' },
      { speaker: 'Rani', text: 'After that, we can practice together at five. Do not forget your own notes.' }
    ],
    questions: [
      { id: 'lq4', prompt: 'Where is the notebook?', options: ['On the desk near the window', 'In the bag', 'Under the chair'], answer: 0, explanation: 'Rani mengatakan ia meletakkan buku catatannya di meja dekat jendela.' },
      { id: 'lq5', prompt: 'What should Dan read?', options: ['Page twelve', 'Page two', 'Page twenty'], answer: 0, explanation: 'Rani meminta Dan membaca page twelve.' },
      { id: 'lq6', prompt: 'When will they practice?', options: ['At five', 'At ten', 'At three'], answer: 0, explanation: 'Mereka akan berlatih bersama pukul lima.' }
    ]
  },
  {
    id: 'l3',
    title: 'The Small Garden',
    setting: 'Kebun belakang rumah',
    duration: 'sekitar 1 menit',
    audioSrc: null,
    instructions: 'Dengarkan cerita pendek tentang kebun kecil. Perhatikan apa yang tumbuh dan siapa yang merawatnya.',
    transcript: [
      { speaker: 'Narrator', text: 'Behind the house there is a small garden. My grandmother planted seeds there last spring.' },
      { speaker: 'Narrator', text: 'Now the flowers bloom in April, and a thin stream runs along the edge.' },
      { speaker: 'Narrator', text: 'Every evening she sits in the shade and waters the plants slowly.' }
    ],
    questions: [
      { id: 'lq7', prompt: 'Who planted the seeds?', options: ['The grandmother', 'The neighbour', 'The narrator'], answer: 0, explanation: 'Cerita menyebut my grandmother planted seeds there.' },
      { id: 'lq8', prompt: 'When do the flowers bloom?', options: ['In April', 'In June', 'In January'], answer: 0, explanation: 'Teks mengatakan the flowers bloom in April.' },
      { id: 'lq9', prompt: 'What does grandmother do every evening?', options: ['Waters the plants in the shade', 'Sells the flowers', 'Opens the window'], answer: 0, explanation: 'Ia duduk di teduhan dan menyiram tanaman perlahan.' }
    ]
  }
]
