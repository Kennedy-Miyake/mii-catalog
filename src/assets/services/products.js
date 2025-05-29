import api from './api'

export function getProductById(id) {
    return api.get(`/products/${id}`)
}