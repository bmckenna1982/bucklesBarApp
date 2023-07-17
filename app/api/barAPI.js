import apiClient from './client';

const getAll = async () => {
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

const getInventory = async (userId) => {
    try {
        const response = await apiClient.get(`/inventory/${userId}`);
        // console.log('inventory response', response)
        if(response.status == '200') {            
            return response.data.inventory
        }
    } catch (error) {
        console.log('Error while getting inventory')
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

const googleLoginOrRegister = async (accessToken) => {
    try {
      const data = await apiClient.post('/google', {
        accessToken,
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  };
const login = async (credentials) => {
    try {
        let response = await apiClient.post('/auth/login', {
            credentials
        });
        // console.log('login config', response.config)
        // console.log('login data', response.data)
        if(response.data) {
            return response.data
        }
    } catch (error) {
        console.log('Error logging in', error.response)
        return [];        
    }
};
const postUser = async (newUser) => {
    try {
        const response = await apiClient.post('/users', {
            newUser
        });
        // console.log('response', response)
        if(response.data.success) {
            return response.data
        }
    } catch (error) {
        console.log('Error while getting categories')
        return [];        
    }
};
const getAllUsers = async (req,res) => {
    try {
        const response = await apiClient.get('/users');

        if(response.data.success) {
            return response.data.categories
        }
    } catch (error) {
        console.log('Error while getting categories')
        return [];        
    }
};

export default {
    getAll,
    getByCategory,
    getCategories,
    getInventory,
    googleLoginOrRegister,
    login,
    postUser
};