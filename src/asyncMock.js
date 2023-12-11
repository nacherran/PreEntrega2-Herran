import img1 from './img/camisas.png'
import img2 from './img/chupinAzul.png'
import img3 from './img/joggerGris.png'


const products = [
    {
        id: '1',
        name: 'Camisa estampada',
        price: 15000,
        category: 'camisas',
        img: img1,
        stock: 20,
        description: 'Descripcion de pantalon'
    },
    { id: '2', name: 'Chupin blue', price: 20000, category: 'pantalones', img: img2, stock: 20, description: 'Descripcion de pantalon'},
    { id: '3', name: 'Jogger gris', price: 18000, category: 'joggers', img: img3, stock: 20, description: 'Descripcion de jogger'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}