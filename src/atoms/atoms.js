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

//orders
export const ordersAtom = atom({
  key: 'ordersAtom',
  default: [],
})

// categories
export const categoriesAtom = atom({
  key: 'categoriesAtom',
  default: [],
})

export const selectedCategoryAtom = atom({
  key: 'selectedCategoryAtom',
  default: null,
})

export const selectedCategoryProductsAtom = selector({
  key: 'selectedCategoryProductsAtom',
  get: ({ get }) => {
    const category = get(selectedCategoryAtom)
    const products = category
      ? category.products?.filter((p) => p.isActive && p.inStock === 'in stock')
      : []
    return products
  },
})

export const selectedCategoryProductsCountAtom = selector({
  key: 'selectedCategoryProductsCountAtom',
  get: ({ get }) => {
    const products = get(selectedCategoryProductsAtom)
    return products ? products.length : 0
  },
})

export const plpFilterSelectorAtom = atom({
  key: 'plpFilterAtom',
  default: 'View All',
})

export const plpFilteredProducts = selector({
  key: 'plpFilteredProducts',
  get: ({ get }) => {
    const filter = get(plpFilterSelectorAtom)
    const products = get(selectedCategoryProductsAtom)
    const list = [...products]

    switch (filter) {
      case 'Price: Low To High':
        return list.sort(
          (a, b) => parseInt(a.skus[0].price) - parseInt(b.skus[0].price)
        )
      case 'Price: High To Low':
        return list.sort(
          (a, b) => parseInt(b.skus[0].price) - parseInt(a.skus[0].price)
        )
      default:
        return list
    }
  },
})

//products
export const productsAtom = atom({
  key: 'productsAtom',
  default: [],
})

export const selectedProductAtom = atom({
  key: 'selectedProductAtom',
  default: null,
})

export const selectedOptionIndexAtom = atom({
  key: 'selectedOptionIndexAtom',
  default: 0,
})

export const selectedProductOptionsAtom = selector({
  key: 'selectedProductOptionsAtom',
  get: ({ get }) => {
    const product = get(selectedProductAtom)
    const options = product ? product.options : null
    return options
  },
})

export const selectedProductImageUrlAtom = selector({
  key: 'selectedProductImageUrlAtom',
  get: ({ get }) => {
    const product = get(selectedProductAtom)
    const url = product && product.skus[0] ? product.skus[0].image_url : null
    return url
  },
})

export const selectedProductSkusAtom = selector({
  key: 'selectedProductSkusAtom',
  get: ({ get }) => {
    const product = get(selectedProductAtom)
    const skus = product ? product.skus : []
    return skus
  },
})

export const selectedProductCategoriesAtom = selector({
  key: 'selectedProductCategoriesAtom',
  get: ({ get }) => {
    const product = get(selectedProductAtom)
    const categories = product ? product.categories : []
    return categories
  },
})

// checkout and cart
export const checkoutAtom = atom({
  key: 'checkoutAtom',
  default: false,
})

export const cartAtom = atom({
  key: 'cartAtom',
  default: [],
})

export const cartItemsAtom = selector({
  key: 'cartItemsAtom',
  get: ({ get }) => {
    const cart = get(cartAtom)
    const items = cart ? cart.selected_items : []
    return items
  },
})

export const cartOpenAtom = atom({
  key: 'cartOpenAtom',
  default: false,
})

export const toggleCartOpenAtom = selector({
  key: 'toggleCartOpenAtom',
  get: ({ get }) => {
    const cartOpen = get(cartOpenAtom)
    return cartOpen
  },
  set: ({ get, set }) => {
    const cartOpen = get(cartOpenAtom)
    set(cartOpenAtom, !cartOpen)
  },
})

export const stripeCheckoutAtom = selector({
  key: 'stripeCheckoutAtom',
  get: ({ get }) => get(cartOpenAtom),
  set: ({ get, set }) => {
    const cart = get(cartAtom)
    const items = get(cartItemsAtom)
    const cartItemsIds = items?.map((item) => item.id)
    const cartOpen = get(cartOpenAtom)
    fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cartItemsIds,
        shipping: cart.shipping,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location = data.url
      })
      .catch((err) => console.log(err))
    set(cartOpen, false)
  },
})
