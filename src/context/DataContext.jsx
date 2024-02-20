// DataContext.js

import React, { createContext, useState, useEffect } from "react";

// Create the DataContext
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  // State to hold store data
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch store data on component mount
  useEffect(() => {
    // Fetch products
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));

    // Fetch categories
    getCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Function to fetch a single product by ID
  const fetchProductById = async (productId) => {
    try {
      const product = await getProductById(productId);
      return product;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      return null;
    }
  };

  // Define the context value
  const contextValue = {
    products,
    categories,
    fetchProductById,
  };

  // Provide the context value to the children components
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
