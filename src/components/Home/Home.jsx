import { useCallback, useContext, useEffect } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { fetchDataFromAPI } from "../../utils/Api";
import { Context } from "../../utils/AppContext";

const Home = () => {
  // ! context api
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  // ! get all the categories
  const getCategories = useCallback(() => {
    fetchDataFromAPI("/api/categories?populate=*").then((res) => {
      return setCategories(res.data);
    });
  }, [setCategories]);

  // ! get all the products
  const getProducts = useCallback(() => {
    fetchDataFromAPI("/api/products?populate=*&pagination[limit]=10").then(
      (res) => {
        return setProducts(res.data);
      }
    );
  }, [setProducts]);

  // ! render products and categories while Home is mounted
  useEffect(() => {
    getCategories();
    getProducts();
  }, [getCategories, getProducts]);

  // ! render
  return (
    <div className="home">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
