import { useState, useEffect } from "react";
import barAPI from "../api/barAPI";

export default useBottles = () => {
    const [bottles, setBottles] =useState([]);
    const [inventory, setInventory] =useState([]);
    const [latestBottles, setLatestBottles] =useState([]);
    const [categoryBottles, setCategoryBottles] =useState([]);
    const [bestBottles, setBestBottles] =useState([]);
    const [categories, setCategories] =useState([]);
  
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
    
    const getCategories = async () => {
        const categoriesList = await barAPI.getCategories();
        setCategories(categoriesList);
    }

    useEffect(() => {
      filterMultipleBottles();
      getCategories();
    }, []);

    return {
        bottles,
        inventory,
        latestBottles,
        categoryBottles,
        bestBottles,
        categories
    }
}