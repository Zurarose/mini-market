import axios from "axios";

const rootMarketApi = axios.create({
    baseURL: 'https://run.mocky.io/',
})

export const MarketApi = {
    async getProducts() {
        const result = await rootMarketApi.get('v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
        return result.data
    }
}