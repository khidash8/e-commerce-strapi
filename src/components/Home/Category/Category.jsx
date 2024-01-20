import "./Category.scss";
import CatImg1 from "../../../assets/category/cat-1.jpg";
import CatImg2 from "../../../assets/category/cat-2.jpg";
import CatImg3 from "../../../assets/category/cat-3.jpg";
import CatImg4 from "../../../assets/category/cat-4.jpg";
const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
          <img src={CatImg1} alt="" />
        </div>

        <div className="category">
          <img src={CatImg2} alt="" />
        </div>

        <div className="category">
          <img src={CatImg3} alt="" />
        </div>

        <div className="category">
          <img src={CatImg4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
