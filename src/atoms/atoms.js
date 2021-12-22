import { atom, selector } from 'recoil'

export const userAtom = atom({
  key: 'userAtom',
  default: null,
})

export const categoriesAtom = atom({
  key: 'categoriesAtom',
  default: [
    'New Arrivals',
    'Best Sellers',
    'Necklaces',
    'Earrings',
    'Rings',
    'Bracelets',
    'View All',
  ],
})

export const errorAtom = atom({
  key: 'errorAtom',
  default: [],
})

export const loadingAtom = atom({
  key: 'loadingAtom',
  default: false,
})
