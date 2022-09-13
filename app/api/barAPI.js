import apiClient from './client';

const getAll = async (req, res) => {
    try {
        const response = await apiClient.get('/bottles');

        if(response.data.success) {
            return response.data.bottles
        }
    } catch (error) {
        return [];
        console.log('Error while getting all bottles')
    }
}

const getByCategory = async (category, qty) => {
    const endpoint = qty ? `/bottles/${category}/${qty}` : `/bottles/${category}`;
    try {
        const response = await apiClient.get(endpoint);

        if(response.data.success) {
            return response.data.bottles
        }
    } catch (error) {
        return [];
        console.log('Error while getting bottles from category')
    }
}

export default {
    getAll,
    getByCategory
};