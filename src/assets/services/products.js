import api from './api'

export function getProducts(limit, skip) {
    return api.get(`/products/?limit=${limit}&skip=${skip}&select=title,price,stock,images`)
}

export function getProductsByCategory(category) {
    return api.get(`/products/category/${category}`)
}

export function getProductsOnSearch(query) {
    return api.get(`/products/search?q=${encodeURIComponent(query)}`)
}

export function getCategories() {
    return api.get(`/products/category-list`)
}