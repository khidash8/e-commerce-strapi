import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Home;
