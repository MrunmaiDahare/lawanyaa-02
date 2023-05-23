import React from "react";
import { useState, useEffect } from "react";
import "./product.scss";
import Shop1 from "../../assets/Hoodie/p (8).png";
import Shop2 from "../../assets/Hoodie/p (2).jpg";
import Shop3 from "../../assets/Hoodie/p (3).jpg";
import Shop4 from "../../assets/Hoodie/p (4).png";
import Shop5 from "../../assets/Hoodie/p (5).png";
import Shop6 from "../../assets/Hoodie/p (6).png";

import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

import Hosp1 from "../../assets/hospitality/hosp1.png";
import Hosp2 from "../../assets/hospitality/hosp2.png";
import Hosp3 from "../../assets/hospitality/hosp3.png";
import Hosp4 from "../../assets/hospitality/hosp4.png";
import Hosp5 from "../../assets/hospitality/hosp5.png";
import Hosp6 from "../../assets/hospitality/hosp6.png";
import Hosp7 from "../../assets/hospitality/hosp7.png";
import Hosp8 from "../../assets/hospitality/hosp8.png";
import Hosp9 from "../../assets/hospitality/hosp9.png";
import Hosp10 from "../../assets/hospitality/hosp10.png";
import Hosp11 from "../../assets/hospitality/hosp11.png";
// import Hosp12 from "../../assets/hospitality/hosp12.png";

import School1 from "../../assets/school/sch1.png";
import School2 from "../../assets/school/sch2.png";
import School3 from "../../assets/school/sch3.png";
import School4 from "../../assets/school/sch4.png";
import School5 from "../../assets/school/sch5.png";
import School6 from "../../assets/school/sch6.png";
import School7 from "../../assets/school/sch7.png";
import School8 from "../../assets/school/sch8.png";
import School9 from "../../assets/school/sch9.png";
import School10 from "../../assets/school/sch10.png";
// import School11 from "../../assets/school/sch11.png";
// import School12 from "../../assets/school/sch12.png";

import Med1 from "../../assets/medical/med1.png";
import Med2 from "../../assets/medical/med2.png";
import Med3 from "../../assets/medical/med3.png";
import Med4 from "../../assets/medical/med4.png";
import Med5 from "../../assets/medical/med5.png";
import Med6 from "../../assets/medical/med6.png";
import Med7 from "../../assets/medical/med7.png";
import Med8 from "../../assets/medical/med8.png";
import Med9 from "../../assets/medical/med9.png";
import Med10 from "../../assets/medical/med10.png";

import Tshirt1 from "../../assets/tshirt/tshirt1.png";
import Tshirt2 from "../../assets/tshirt/tshirt2.png";
import Tshirt3 from "../../assets/tshirt/tshirt3.png";

const tshirtProducts = [
  {
    name: "Tshirt 1",
    image: Tshirt1,
    price: 9.99,
    description:
      "This is Tshirt 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Tshirt 2",
    image: Tshirt2,
    price: 14.99,
    description:
      "This is Tshirt 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Tshirt 3",
    image: Tshirt3,
    price: 19.99,
    description:
      "This is Tshirt 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const schoolProducts = [
  {
    name: "School 1",
    image: School1,
    price: 9.99,
    description:
      "This is School 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "School 2",
    image: School2,
    price: 14.99,
    description:
      "This is School 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "School 3",
    image: School3,
    price: 19.99,
    description:
      "This is School 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "School 4",
    image: School4,
    price: 24.99,
    description:
      "This is School 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "School 5",
    image: School5,
    price: 29.99,
    description:
      "This is School 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "School 6",
    image: School6,
    price: 34.99,
    description:
      "This is School 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "School 7",
    image: School7,
    price: 39.99,
    description:
      "This is School 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "School 8",
    image: School8,
    price: 44.99,
    description:
      "This is School 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "School 9",
    image: School9,
    price: 49.99,
    description:
      "This is School 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "School 10",
    image: School10,
    price: 54.99,
    description:
      "This is School 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const hospitalityProducts = [
  {
    name: "Hospitality 1",
    image: Hosp1,
    price: 19.99,
    description:
      "This is Hospitality 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Hospitality 2",
    image: Hosp2,
    price: 24.99,
    description:
      "This is Hospitality 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Hospitality 3",
    image: Hosp3,
    price: 29.99,
    description:
      "This is Hospitality 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Hospitality 4",
    image: Hosp4,
    price: 34.99,
    description:
      "This is Hospitality 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Hospitality 5",
    image: Hosp5,
    price: 39.99,
    description:
      "This is Hospitality 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Hospitality 6",
    image: Hosp6,
    price: 44.99,
    description:
      "This is Hospitality 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Hospitality 7",
    image: Hosp7,
    price: 49.99,
    description:
      "This is Hospitality 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Hospitality 8",
    image: Hosp8,
    price: 54.99,
    description:
      "This is Hospitality 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Hospitality 9",
    image: Hosp9,
    price: 59.99,
    description:
      "This is Hospitality 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Hospitality 10",
    image: Hosp10,
    price: 64.99,
    description:
      "This is Hospitality 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Hospitality 11",
    image: Hosp11,
    price: 69.99,
    description:
      "This is Hospitality 11. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const defaultProducts = [
  {
    name: "Stylish T-Shirt",
    image: Shop1,
    price: 399,
    description: "Premium quality fabric and trendy design.",
  },
  {
    name: "Sports Wear Set",
    image: Shop2,
    price: 200,
    description:
      "Perfect for active individuals. Stay comfortable and stylish.",
  },
  {
    name: "Classic Denim Jeans",
    image: Shop3,
    price: 499,
    description: "Timeless style and exceptional comfort.",
  },
  {
    name: "Casual Sneakers",
    image: Shop4,
    price: 299,
    description: "Versatile footwear for everyday wear.",
  },
  {
    name: "Elegant Dress",
    image: Shop5,
    price: 899,
    description: "Sophisticated design for special occasions.",
  },
  {
    name: "Formal Suit",
    image: Shop6,
    price: 1599,
    description: "Sharp and refined ensemble for formal events.",
  },
  {
    name: "Cozy Hoodie",
    image: Shop1,
    price: 349,
    description: "Warm and comfortable for chilly days.",
  },
  {
    name: "Active Leggings",
    image: Shop2,
    price: 299,
    description: "Flexible and supportive for workouts.",
  },
  {
    name: "Leather Belt",
    image: Shop3,
    price: 199,
    description: "Stylish accessory to complete your outfit.",
  },
  {
    name: "Sleek Watch",
    image: Shop4,
    price: 999,
    description: "Timepiece with a modern and minimalist design.",
  },
  {
    name: "Fashionable Sunglasses",
    image: Shop5,
    price: 299,
    description: "UV-protected eyewear for a stylish look.",
  },
  {
    name: "Trendy Backpack",
    image: Shop6,
    price: 599,
    description: "Spacious and fashionable for everyday use.",
  },
  {
    name: "Cotton Polo Shirt",
    image: Shop3,
    price: 349,
    description: "Classic and comfortable for a casual style.",
  },
  {
    name: "Smart Casual Blazer",
    image: Shop4,
    price: 899,
    description: "Polished outerwear for smart occasions.",
  },
  {
    name: "Warm Winter Coat",
    image: Shop5,
    price: 1299,
    description: "Insulated and stylish for cold weather.",
  },
  {
    name: "Stylish Fedora Hat",
    image: Shop6,
    price: 199,
    description: "Accentuate your look with a touch of sophistication.",
  },

  {
    name: "Chic Handbag",
    image: Shop1,
    price: 699,
    description: "Elegant and functional accessory for any outfit.",
  },
  {
    name: "Comfortable Slippers",
    image: Shop2,
    price: 149,
    description: "Soft and cozy footwear for relaxation.",
  },
  {
    name: "Statement Necklace",
    image: Shop3,
    price: 299,
    description: "Add a touch of glamour to your ensemble.",
  },
  {
    name: "Versatile Jumpsuit",
    image: Shop6,
    price: 799,
    description: "Effortless one-piece outfit for any",
  },
  {
    name: "Stylish Fedora Hat",
    image: Shop6,
    price: 199,
    description: "Accentuate your look with a touch of sophistication.",
  },
  {
    name: "Statement Necklace",
    image: Shop3,
    price: 299,
    description: "Add a touch of glamour to your ensemble.",
  },
  {
    name: "Versatile Jumpsuit",
    image: Shop6,
    price: 799,
    description: "Effortless one-piece outfit for any",
  },
  {
    name: "Stylish Fedora Hat",
    image: Shop6,
    price: 199,
    description: "Accentuate your look with a touch of sophistication.",
  }
];

const medicalProducts = [
  {
    name: "Medical Uniform 1",
    image: Med1,
    price: 399,
    description: "Premium quality fabric and trendy design.",
  },
  {
    name: "Medical Uniform 2",
    image: Med2,
    price: 299,
    description: "Comfortable and durable medical uniform for professionals.",
  },
  {
    name: "Medical Uniform 3",
    image: Med3,
    price: 199,
    description:
      "Stylish and functional medical uniform with multiple pockets.",
  },
  {
    name: "Medical Uniform 4",
    image: Med4,
    price: 249,
    description:
      "Lightweight and breathable medical uniform for all-day comfort.",
  },
  {
    name: "Medical Uniform 5",
    image: Med5,
    price: 179,
    description:
      "Elegant and professional medical uniform suitable for any healthcare setting.",
  },
  {
    name: "Medical Uniform 6",
    image: Med6,
    price: 349,
    description:
      "High-quality and wrinkle-resistant medical uniform for a polished look.",
  },
  {
    name: "Medical Uniform 7",
    image: Med7,
    price: 219,
    description:
      "Versatile and easy-to-care-for medical uniform for busy professionals.",
  },
  {
    name: "Medical Uniform 8",
    image: Med8,
    price: 299,
    description:
      "Functional and stylish medical uniform with modern design elements.",
  },
  {
    name: "Medical Uniform 9",
    image: Med9,
    price: 229,
    description:
      "Durable and comfortable medical uniform with adjustable features.",
  },
  {
    name: "Medical Uniform 10",
    image: Med10,
    price: 279,
    description: "Premium-quality medical uniform with a tailored fit.",
  },
];
const allProducts =[...medicalProducts, ...defaultProducts, ...hospitalityProducts, ...tshirtProducts, ...schoolProducts];
const ProductCard = ({ product }) => {
  return (
    <div className="each-card">
      <div className="cont-img">
        <img className="productimg" src={product.image} alt={product.name} />
        <div className="overlay">
          <div className="text">Quick View</div>
        </div>
      </div>
      <p className="text-center item-name">{product.name}</p>
      <p className="item-price">₹{product.price}</p>
    </div>
  );
};

function Product() {
  const [visibleProducts, setVisibleProducts] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [productsToShow, setProductsToShow] = useState([]);
  const [title, setTitle] = useState("");

  const loadMoreProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
      setIsLoading(false);
    }, 1000); // Simulating a loading delay of 1 second
  };
  console.log(title);
  useEffect(() => {
    let products;
    if (title === "School Uniform") {
      products = schoolProducts;
    } else if (title === "Hospitality Uniform") {
      products = hospitalityProducts;
    } else if (title === "Corporate Uniform") {
      products = hospitalityProducts;
    } else if (title === "Kurti Uniform") {
      products = hospitalityProducts;
    } else if (title === "Medical Apron") {
      products = medicalProducts;
    } else if (title === "All Products") {
      products = allProducts;
    } else if (title === "Promotional Tshirt") {
      products = tshirtProducts;
    } else {
      products = defaultProducts;
    }
    setProductsToShow(products.slice(0, visibleProducts));
  }, [title, visibleProducts]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const titleParam = urlParams.get("title");
    if (titleParam) {
      setTitle(titleParam);
    }
  }, []);
  console.log(productsToShow);
  return (
    <>
      <div className="product-main">
        <p className="all-product to-hide">
        <Link to={`/products?title=${encodeURIComponent("All Products")}`}>All Products</Link> {title === "All Products"? "":  <>
          <SlArrowRight />
          {title}
        </>}{" "}
        </p>

        <div className="row1">
          <div className="col1">
            <div className="grid-container">
              <div className="grid-item">
                {productsToShow.map((product, index) => (
                  <Link to="/productdetails" key={index}>
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="bottom-col-1">
              <p className="showing">
                Showing {visibleProducts} of {allProducts.length}
              </p>
              {console.log(visibleProducts +"ok" +productsToShow.length)}
              {visibleProducts < allProducts.length && (
                <button className="btn-la" onClick={loadMoreProducts}>
                  {isLoading ? "Loading..." : "See More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
