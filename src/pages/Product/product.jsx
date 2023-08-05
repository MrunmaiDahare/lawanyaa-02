import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
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
    id: 40001,
    name: "Tshirt 1",
    image: Tshirt1,
    price: 9.99,
    description:
      "This is Tshirt 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 40002,
    name: "Tshirt 2",
    image: Tshirt2,
    price: 14.99,
    description:
      "This is Tshirt 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 40003,
    name: "Tshirt 3",
    image: Tshirt3,
    price: 19.99,
    description:
      "This is Tshirt 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const schoolProducts = [
  {
    id: 10001,
    name: "School 1",
    image: School1,
    price: 9.99,
    description:
      "This is School 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10002,
    name: "School 2",
    image: School2,
    price: 14.99,
    description:
      "This is School 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10003,
    name: "School 3",
    image: School3,
    price: 19.99,
    description:
      "This is School 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10004,
    name: "School 4",
    image: School4,
    price: 24.99,
    description:
      "This is School 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10005,
    name: "School 5",
    image: School5,
    price: 29.99,
    description:
      "This is School 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10006,
    name: "School 6",
    image: School6,
    price: 34.99,
    description:
      "This is School 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10007,
    name: "School 7",
    image: School7,
    price: 39.99,
    description:
      "This is School 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10008,
    name: "School 8",
    image: School8,
    price: 44.99,
    description:
      "This is School 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10009,
    name: "School 9",
    image: School9,
    price: 49.99,
    description:
      "This is School 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10010,
    name: "School 10",
    image: School10,
    price: 54.99,
    description:
      "This is School 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const hospitalityProducts = [
  {
    id: 20001,
    name: "Hospitality 1",
    image: Hosp1,
    price: 19.99,
    description:
      "This is Hospitality 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20002,
    name: "Hospitality 2",
    image: Hosp2,
    price: 24.99,
    description:
      "This is Hospitality 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20003,
    name: "Hospitality 3",
    image: Hosp3,
    price: 29.99,
    description:
      "This is Hospitality 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20004,
    name: "Hospitality 4",
    image: Hosp4,
    price: 34.99,
    description:
      "This is Hospitality 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20005,
    name: "Hospitality 5",
    image: Hosp5,
    price: 39.99,
    description:
      "This is Hospitality 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20006,
    name: "Hospitality 6",
    image: Hosp6,
    price: 44.99,
    description:
      "This is Hospitality 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20007,
    name: "Hospitality 7",
    image: Hosp7,
    price: 49.99,
    description:
      "This is Hospitality 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20008,
    name: "Hospitality 8",
    image: Hosp8,
    price: 54.99,
    description:
      "This is Hospitality 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20009,
    name: "Hospitality 9",
    image: Hosp9,
    price: 59.99,
    description:
      "This is Hospitality 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20010,
    name: "Hospitality 10",
    image: Hosp10,
    price: 64.99,
    description:
      "This is Hospitality 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 20011,
    name: "Hospitality 11",
    image: Hosp11,
    price: 69.99,
    description:
      "This is Hospitality 11. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const defaultProducts = [
  {
    id: 80001,
    name: "Stylish T-Shirt",
    image: Shop1,
    price: 399,
    description: "Premium quality fabric and trendy design.",
  },
  {
    id: 80002,
    name: "Sports Wear Set",
    image: Shop2,
    price: 200,
    description:
      "Perfect for active individuals. Stay comfortable and stylish.",
  },
  {
    id: 80003,
    name: "Classic Denim Jeans",
    image: Shop3,
    price: 499,
    description: "Timeless style and exceptional comfort.",
  },
  {
    id: 80004,
    name: "Casual Sneakers",
    image: Shop4,
    price: 299,
    description: "Versatile footwear for everyday wear.",
  },
  {
    id: 80005,
    name: "Elegant Dress",
    image: Shop5,
    price: 899,
    description: "Sophisticated design for special occasions.",
  },
  {
    id: 80006,
    name: "Formal Suit",
    image: Shop6,
    price: 1599,
    description: "Sharp and refined ensemble for formal events.",
  },
  {
    id: 80007,
    name: "Cozy Hoodie",
    image: Shop1,
    price: 349,
    description: "Warm and comfortable for chilly days.",
  },
  {
    id: 80008,
    name: "Active Leggings",
    image: Shop2,
    price: 299,
    description: "Flexible and supportive for workouts.",
  },
  {
    id: 80009,
    name: "Leather Belt",
    image: Shop3,
    price: 199,
    description: "Stylish accessory to complete your outfit.",
  },
  {
    id: 80010,
    name: "Sleek Watch",
    image: Shop4,
    price: 999,
    description: "Timepiece with a modern and minimalist design.",
  },
  {
    id: 80011,
    name: "Fashionable Sunglasses",
    image: Shop5,
    price: 299,
    description: "UV-protected eyewear for a stylish look.",
  },
  {
    id: 80012,
    name: "Trendy Backpack",
    image: Shop6,
    price: 599,
    description: "Spacious and fashionable for everyday use.",
  },
  {
    id: 80013,
    name: "Cotton Polo Shirt",
    image: Shop3,
    price: 349,
    description: "Classic and comfortable for a casual style.",
  },
  {
    id: 80014,
    name: "Smart Casual Blazer",
    image: Shop4,
    price: 899,
    description: "Polished outerwear for smart occasions.",
  },
  {
    id: 80015,
    name: "Warm Winter Coat",
    image: Shop5,
    price: 1299,
    description: "Insulated and stylish for cold weather.",
  },
  {
    id: 80016,
    name: "Stylish Fedora Hat",
    image: Shop6,
    price: 199,
    description: "Accentuate your look with a touch of sophistication.",
  },
  {
    id: 80017,
    name: "Chic Handbag",
    image: Shop1,
    price: 699,
    description: "Elegant and functional accessory for any outfit.",
  },
  {
    id: 80018,
    name: "Comfortable Slippers",
    image: Shop2,
    price: 149,
    description: "Soft and cozy footwear for relaxation.",
  },
  {
    id: 80019,
    name: "Statement Necklace",
    image: Shop3,
    price: 299,
    description: "Add a touch of glamour to your ensemble.",
  },
  {
    id: 80020,
    name: "Versatile Jumpsuit",
    image: Shop6,
    price: 799,
    description: "Effortless one-piece outfit for any occasion.",
  },
  {
    id: 80021,
    name: "Stylish Fedora Hat",
    image: Shop6,
    price: 199,
    description: "Accentuate your look with a touch of sophistication.",
  },
  {
    id: 80022,
    name: "Statement Necklace",
    image: Shop3,
    price: 299,
    description: "Add a touch of glamour to your ensemble.",
  },
  {
    id: 80023,
    name: "Versatile Jumpsuit",
    image: Shop6,
    price: 799,
    description: "Effortless one-piece outfit for any occasion.",
  },
  {
    id: 80024,
    name: "Stylish Fedora Hat",
    image: Shop6,
    price: 199,
    description: "Accentuate your look with a touch of sophistication.",
  },
];

const medicalProducts = [
  {
    id: 50001,
    name: "Medical Uniform 1",
    image: Med1,
    price: 399,
    description: "Premium quality fabric and trendy design.",
  },
  {
    id: 50002,
    name: "Medical Uniform 2",
    image: Med2,
    price: 299,
    description: "Comfortable and durable medical uniform for professionals.",
  },
  {
    id: 50003,
    name: "Medical Uniform 3",
    image: Med3,
    price: 199,
    description:
      "Stylish and functional medical uniform with multiple pockets.",
  },
  {
    id: 50004,
    name: "Medical Uniform 4",
    image: Med4,
    price: 249,
    description:
      "Lightweight and breathable medical uniform for all-day comfort.",
  },
  {
    id: 50005,
    name: "Medical Uniform 5",
    image: Med5,
    price: 179,
    description:
      "Elegant and professional medical uniform suitable for any healthcare setting.",
  },
  {
    id: 50006,
    name: "Medical Uniform 6",
    image: Med6,
    price: 349,
    description:
      "High-quality and wrinkle-resistant medical uniform for a polished look.",
  },
  {
    id: 50007,
    name: "Medical Uniform 7",
    image: Med7,
    price: 219,
    description:
      "Versatile and easy-to-care-for medical uniform for busy professionals.",
  },
  {
    id: 50008,
    name: "Medical Uniform 8",
    image: Med8,
    price: 299,
    description:
      "Functional and stylish medical uniform with modern design elements.",
  },
  {
    id: 50009,
    name: "Medical Uniform 9",
    image: Med9,
    price: 229,
    description:
      "Durable and comfortable medical uniform with adjustable features.",
  },
  {
    id: 50010,
    name: "Medical Uniform 10",
    image: Med10,
    price: 279,
    description: "Premium-quality medical uniform with a tailored fit.",
  },
];

const categories = [
  { categoryId: 1, categoryName: "School Uniform" },
  { categoryId: 2, categoryName: "Hospitality" },
  { categoryId: 3, categoryName: "Zilla Parishad" },
  { categoryId: 4, categoryName: "T-Shirt" },
  { categoryId: 5, categoryName: "Medical Uniform" },
  { categoryId: 6, categoryName: "Kurti Uniform" },
  { categoryId: 7, categoryName: "Saree Uniform" },
  { categoryId: 8, categoryName: "Chaise" },
];

const allProducts = [
  ...medicalProducts,
  ...defaultProducts,
  ...hospitalityProducts,
  ...tshirtProducts,
  ...schoolProducts,
];

const price = [
  "Less than ₹80",
  "₹80 - ₹200",
  "₹200 - ₹400",
  "₹400 - ₹800",
  "₹800 - ₹2000",
  "More than ₹2000",
];

const ProductCard = ({ product }) => {
  return (
    <div className="each-card">
      <Link
        to={`/productdetails?productid=${encodeURIComponent(product.id)}`}
        key={product.id}
      >
        <div className="cont-img">
          <img className="productimg" src={product.image} alt={product.name} />
          <div className="overlay">
            <div className="text">Quick View</div>
          </div>
        </div>
      </Link>
      <p className="text-center item-name">{product.name}</p>
      <p className="item-price">₹{product.price}</p>
    </div>
  );
};

function Product() {
  const [visibleProducts, setVisibleProducts] = useState(9);
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
    // Handle the popstate event when the user navigates using the browser back/forward buttons
    const handlePopstate = (event) => {
      const newTitle = event.state?.title || "";
      setTitle(newTitle);
    };

    window.onpopstate = handlePopstate;

    return () => {
      window.onpopstate = null; // Cleanup the event listener when the component unmounts
    };
  }, []);

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

  const handleCategories = (category) => {
    setTitle(category);
    const newUrl = `/products?title=${encodeURIComponent(category)}`;
    window.history.pushState({ title: category }, "", newUrl);
  };

  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter(true);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };
  return (
    <>
      <div className="outer-div">
        <div className="product-main">
          <p className="all-product to-hide">
            <Link
              to={`/products?title=${encodeURIComponent("All Products")}`}
              onClick={() => handleCategories("All Products")}
            >
              All Products
            </Link>{" "}
            {title === "All Products" ? (
              ""
            ) : (
              <>
                <SlArrowRight style={{ fontSize: "14px" }} />
                {title}
              </>
            )}{" "}
          </p>
          {/* <div className="mobile-filter-button-div"> */}
            <Button className="filter-btn" onClick={handleShowFilter}>
              Filter
            </Button>
            <Offcanvas
              show={showFilter}
              onHide={handleCloseFilter}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className="">
              <p className="txt-p">Categories</p>
              <div id="example-collapse-text">
                <div className="form-check">
                  {categories.map((category) => (
                    <div className="filter-element" key={category.categoryId}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={category.categoryId}
                        onClick={() => handleCategories(category.categoryName)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={category.categoryName}
                      >
                        {category.categoryName}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <p className="txt-p">Price Range</p>
              <div id="example-collapse-text">
                <div className="form-check">
                  {price.map((category) => (
                    <div className="filter-element" key={category}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={category}
                        onClick={() => handleCategories(category)}
                      />
                      <label className="form-check-label" htmlFor={category}>
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
              </Offcanvas.Body>
            </Offcanvas>
          {/* </div> */}
          <div className="row1">
            <div className="col2">
              <p className="txt-p">Categories</p>
              <div id="example-collapse-text">
                <div className="form-check">
                  {categories.map((category) => (
                    <div className="filter-element" key={category.categoryId}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={category.categoryId}
                        onClick={() => handleCategories(category.categoryName)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={category.categoryName}
                      >
                        {category.categoryName}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <p className="txt-p">Price Range</p>
              <div id="example-collapse-text">
                <div className="form-check">
                  {price.map((category) => (
                    <div className="filter-element" key={category}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={category}
                        onClick={() => handleCategories(category)}
                      />
                      <label className="form-check-label" htmlFor={category}>
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col1">
              <div className="grid-container">
                <div className="grid-item">
                  {productsToShow.map((product, index) => (
                    <ProductCard product={product} />
                  ))}
                </div>
              </div>
              <div className="bottom-col-1">
                <p className="showing">
                  Showing {visibleProducts} of {allProducts.length}
                </p>
                {console.log(visibleProducts + "ok" + productsToShow.length)}
                {visibleProducts < allProducts.length && (
                  <button className="btn-la" onClick={loadMoreProducts}>
                    {isLoading ? "Loading..." : "See More"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
