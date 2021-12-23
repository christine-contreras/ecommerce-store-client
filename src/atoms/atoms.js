import { atom, selector } from 'recoil'

export const userAtom = atom({
  key: 'userAtom',
  default: null,
})

export const adminAtom = selector({
  key: 'adminAtom',
  get: ({ get }) => {
    const user = get(userAtom)
    const isAdmin = user ? user.isAdmin : false
    return isAdmin
  },
})

export const cartAtom = atom({
  key: 'cartAtom',
  default: [],
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

export const loadingAtom = atom({
  key: 'loadingAtom',
  default: false,
})
