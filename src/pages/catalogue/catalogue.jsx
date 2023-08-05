import React from "react";
import "./catalogue.scss";
import Cat1 from "../../assets/catalogue/cat (1).png";
import Cat2 from "../../assets/catalogue/cat (2).png";
import Cat3 from "../../assets/catalogue/cat (3).png";
const booksData = [
  { imgsrc: Cat1, id: 1, title: "Tshirt Catalogue 2023" },
  { imgsrc: Cat2, id: 2, title: "School Catalogue 2023" },
  { imgsrc: Cat3, id: 3, title: "Medical catalogue 2023" },
];

const Catalogue = () => {
  return (
    <>
      <div className="catalogue">
        <h1>Welcome to Our Catalogue</h1>

        <div className="books">
          {booksData.map((book) => (
            <div key={book.id} className="book">
              <h3>{book.title}</h3>
              <img src={book.imgsrc} alt="" />
              <p>{book.author}</p>
              <button>Click Here to Get It</button>
            </div>
          ))}
        </div>
      </div>

      <section className="section-cat">
        <div className="flex-sec-7">
          <h3>Have Requirements? Enquire Here</h3>
          <div className="wrap">
            <input
              placeholder="Enter your Email here"
              type="text"
              className="input-class-sec-7"
            />
            <button className="sec-7-btn">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalogue;
