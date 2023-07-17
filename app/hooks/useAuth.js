import { useState, useEffect } from "react";
import barAPI from "../api/barAPI";

export default useAuth = () => {
    const [user, setUser] =useState([]);    
    const [allUsers, setAllUsers] =useState([]);    
  
    const filterByCategory = (data, category) => {
      return [...data].filter(item => item.category === category)
    }
  
    const filterLatestBottles = (data) => {
      return data.sort((a,b) => a.purchaseDate < b.purchaseDate ? 1 : -1).slice(0,3);
    }
    
    const sortRatedBottles = (data) => {
        return data.sort((a,b) => a.rating < b.rating ? 1 : -1).slice(0,3);
    }

    const filterMultipleBottles = async () => {
      const bottlesInventory = await barAPI.getAll()      
      // const latestBottles = bottles.sort((a,b) => a.purchaseDate < b.purchaseDate ? 1 : -1).slice(0,3);
      setLatestBottles(filterLatestBottles(bottlesInventory));
      setBestBottles(sortRatedBottles(bottlesInventory));      
    //   setCategoryBottles(filterByCategory(bottlesInventory));
    }
    
    const getAllUsers = async () => {
        const allUsersList = await barAPI.getAllUsers();
        setAllUsers(allUsersList);
    }

    const postUsers = async (user) => {
        const user = await barAPI.postUser(user);
        setUser(user);
    }

    useEffect(() => {
      filterMultipleBottles();
      getCategories();
    }, []);

    return {
        allUsers,
        user
    }
}