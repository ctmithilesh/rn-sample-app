import axios from "axios"
const _api = 'https://fakestoreapi.com/products'
let data = null
export const fetchProductData = async () => {

    await axios.get(_api)
        .then(res => {
            console.log(res)
            data = res.data
        })
        .catch(err => {
            console.log(err)
        })

    return data;
}