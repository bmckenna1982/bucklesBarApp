import { useState, useEffect, useContext } from "react";
import barAPI from "../api/barAPI";
import { AuthContext } from "../context/AuthContext";

export default useBottles = () => {
  const [bottles, setBottles] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [latestBottles, setLatestBottles] = useState([]);
  const [categoryBottles, setCategoryBottles] = useState([]);
  const [bestBottles, setBestBottles] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [categories, setCategories] =useState([]);
  const { user } = useContext(AuthContext);

  const filterByCategory = (data, category) => {
    return [...data].filter((item) => item.category === category);
  };

  const filterLatestBottles = (data) => {
    console.log("data", data);
    return data
      .sort((a, b) => (a.purchaseDate < b.purchaseDate ? 1 : -1))
      .slice(0, 3);
  };

  const sortRatedBottles = (data) => {
    return data.sort((a, b) => (a.rating < b.rating ? 1 : -1)).slice(0, 3);
  };

  const filterMultipleBottles = async () => {
    // const bottlesInventory = await barAPI.getAll()
    console.log("hook user", user);
    try {
      const inventory = await barAPI.getInventory(user.id);
      console.log("hook inventory", inventory);
      // const latestBottles = bottles.sort((a,b) => a.purchaseDate < b.purchaseDate ? 1 : -1).slice(0,3);
      setLatestBottles(filterLatestBottles(inventory));
      setBestBottles(sortRatedBottles(inventory));
      setInventory(inventory);
      // setCategoryBottles(filterByCategory(bottlesInventory));
    } catch (error) {
      console.log("error", error);
    }
  };

  // const getInventory = async () => {
  //     const inventory = await barAPI.getInventory();
  //     setCategories(inventory);
  // }

  const getCategories = async () => {
    const categoriesList = await barAPI.getCategories();
    setCategories(categoriesList);
  };

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
    categories,
    setCategoryBottles,
  };
};
