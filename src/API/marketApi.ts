import axios from "axios";

const API = process.env.REACT_APP_API_KEY

const rootMarketApi = axios.create({
    baseURL: 'https://run.mocky.io/',
});

export const MarketApi = {
    async getProducts() {
        const result = await rootMarketApi.get('v3/' + API);
        return result.data
    }
};