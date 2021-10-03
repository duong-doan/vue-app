const state = () => ({
    products: [],
    product_detail: {
        name: '',
        image: '',
        price: 0,
        price_discount: 0,
    },
    related_product: [],
    isProgress: false,
    quantity_default: 1,
})

export default state 