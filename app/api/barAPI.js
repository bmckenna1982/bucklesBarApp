import apiClient from './client';

const getAll = async (req, res) => {
    try {
        const response = await apiClient.get('/bottles');       
        if(response.data.success) {
            return response.data.bottles
        }
    } catch (error) {
        console.log('Error while getting all bottles')
        return [];
        
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
        console.log('Error while getting bottles from category')
        return [];
        
    }
}

const getInventory = async (req, res) => {    
    try {
        const response = await apiClient.get(`/inventory/${req.user}`);

        if(response.data.success) {
            return response.data.bottles
        }
    } catch (error) {
        console.log('Error while getting bottles from category')
        return [];
        
    }
}

const getCategories = async (req,res) => {
    try {
        const response = await apiClient.get('/categories');

        if(response.data.success) {
            return response.data.categories
        }
    } catch (error) {
        console.log('Error while getting categories')
        return [];        
    }
}

export default {
    getAll,
    getByCategory,
    getCategories
};