import React ,{useContext} from "react";
import "./ProductDisplay.css";
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
   
  const {product} = props;
  const {addCart} = useContext(ShopContext);

  return (
  <div className="productdisplay">
    {/* Left */}
    <div className="productdisplay-left">
      <div className="productdisplay-img-list">
        <img src={product.image} alt="DisplayImage" />
        <img src={product.image} alt="DisplayImage" />
        <img src={product.image} alt="DisplayImage" />
        <img src={product.image} alt="DisplayImage" />
      </div>
      <div className="productdisplay-img">
        <img className="productdisplay-main-img" src={product.image} alt="" />
      </div>
    </div>
    {/* Right */}
    <div className="productdisplay-right">
      <h1>{product.name}</h1>
      <div className="productdisplay-right-stars">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(122)</p>
      </div>
      <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">
          ${product.old_price}
        </div>
        <div className="productdisplay-right-price-new">
          ${product.new_price}
        </div>
      </div>
      {/* Discription */}
      <div className="productdisplay-right-description">    
Welcome to our vibrant world of fashion! Discover our latest collection where style meets comfort. From timeless classics to trendsetting designs, we have something for every occasion.
      </div>
      {/* size*/}
      <div className="productdisplay-right-size">
        <h1>Selected Size</h1>
        <div className="productdisplay-right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
      </div>
      <button onClick={()=>{addCart(product.id)}}>ADD TO CART</button>
      <p className="productdisplay-right-category">
        <span>Category :</span>
        Women , T-Shirt , Crop-Top
      </p>
      <p className="productdisplay-right-category">
        <span>Tags :</span>
        Mordern , Latest
      </p>
    </div>
  </div>
  )
};

export default ProductDisplay;
