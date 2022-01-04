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

export const addressAtom = selector({
  key: 'addressAtom',
  get: ({ get }) => {
    const user = get(userAtom)
    const address = user ? user.address : null
    return address
  },
})

export const userOrdersAtom = selector({
  key: 'userOrdersAtom',
  get: ({ get }) => {
    const user = get(userAtom)
    const orders = user ? user.orders : []
    return orders
  },
})

export const cartAtom = atom({
  key: 'cartAtom',
  default: [],
})

export const categoriesAtom = atom({
  key: 'categoriesAtom',
  default: [],
})

export const productsAtom = atom({
  key: 'productsAtom',
  default: [],
})

export const selectedSkusAtom = atom({
  key: 'selectedSkusAtom',
  default: [],
})

export const selectedProductCategoriesAtom = atom({
  key: 'selectedSkusAtom',
  default: [],
})

// export const updateSkus = selector({
//   key: 'updateSkus',
//   get:
//     (productID) =>
//     ({ get }) => {
//       const products = get(productsAtom)
//       const product = products.find((p) => p.id === productID)
//       return product.skus
//     },
//   set: ({ set, get }, productID, updatedSkus) => {
//     const products = get(productsAtom)
//     const product = products.find((p) => p.id === productID)
//     set(
//       productsAtom,
//       products.map((p) =>
//         p.id === productID ? { ...product, skus: updatedSkus } : product
//       )
//     )
//   },
// })

// export const updateProductsAtom = selector({
//   key: 'updateProductsAtom',
//   set: ({ set, get }, updatedProduct) => {
//     const products = get(productsAtom)
//     set(
//       productsAtom,
//       products.map((product) =>
//         product.id === updatedProduct.id ? updatedProduct : product
//       )
//     )
//   },
// })

export const loadingAtom = atom({
  key: 'loadingAtom',
  default: false,
})
