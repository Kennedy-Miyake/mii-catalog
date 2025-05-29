import api from './api'

export function getProducts(limit, skip) {
    return api.get(`/products/?limit=${limit}&skip=${skip}&select=title,price,images`)
}