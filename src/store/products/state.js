const state = () => ({
    products: [],
    product_detail: {
        id: '',
        name: '',
        image: '',
        price: 0,
        price_discount: 0,
    },
    related_products: [],
    quantity_default: 1,
    isProgress: false,
})

export default state 