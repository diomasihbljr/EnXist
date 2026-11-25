import {
  House, Map, BookOpen, ScrollText, SpellCheck2, Braces, Headphones, ChartNoAxesColumn, UserRound, Settings2
} from 'lucide-vue-next'

export const navGroups = [
  {
    label: 'Jalur belajar',
    items: [
      { to: '/', label: 'Learning Home', icon: House },
      { to: '/courses', label: 'Courses', icon: Map },
      { to: '/materials/vocabulary', label: 'Vocabulary', icon: BookOpen },
      { to: '/materials/grammar', label: 'Grammar', icon: ScrollText }
    ]
  },
  {
    label: 'Latihan',
    items: [
      { to: '/tests/vocabulary', label: 'Vocabulary Test', icon: SpellCheck2 },
      { to: '/tests/grammar', label: 'Grammar Test', icon: Braces },
      { to: '/tests/listening', label: 'Listening Test', icon: Headphones }
    ]
  },
  {
    label: 'Catatan belajar',
    items: [
      { to: '/progress', label: 'Progress', icon: ChartNoAxesColumn },
      { to: '/profile', label: 'Profile', icon: UserRound },
      { to: '/settings', label: 'Settings', icon: Settings2 }
    ]
  }
]

export const allNavItems = navGroups.flatMap((group) => group.items)
