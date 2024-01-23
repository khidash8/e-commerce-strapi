import { useEffect } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { fetchDataFromAPI } from "../../utils/Api";

const Home = () => {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const data = await fetchDataFromAPI("/api/categories?populate=*");
    console.log(data);
  };

  return (
    <div className="home">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
