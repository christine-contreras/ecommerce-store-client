import { atom, selector } from 'recoil'

export const userAtom = atom({
  key: 'userAtom',
  default: null,
})

export const errorAtom = atom({
  key: 'errorAtom',
  default: [],
})

export const loadingAtom = atom({
  key: 'loadingAtom',
  default: false,
})
