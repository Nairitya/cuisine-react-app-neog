import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const categoryList = {
    indian: [
      {
        name: "Biryani",
        rating: "4/5",
        reviews: "umaaah!!",
        image:
          "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Dosa",
        rating: "5/5",
        reviews: "crispyy deliciousness",
        image:
          "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    chinese: [
      {
        name: "Manchurian",
        rating: "3/5",
        reviews: "good.",
        image:
          "https://images.pexels.com/photos/5339079/pexels-photo-5339079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Spring rolls",
        rating: "4/5",
        reviews: "fullfilling",
        image:
          "https://images.pexels.com/photos/3569706/pexels-photo-3569706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  };
  let defaultCategory = categoryList.indian;
  let categoryKeys = Object.keys(categoryList);

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  function categoryClickHandler(category) {
    setSelectedCategory(categoryList[category]);
  }

  return (
    <div className="App">
      <h1 className="main-heading">CuisineCorner</h1>
      <div className="categoryContainer">
        {categoryKeys.map((key) => (
          <button
            className="category"
            id="indian"
            onClick={() => categoryClickHandler(key)}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>
      <ul className="product-list">
        {selectedCategory.map(({ name, rating, reviews, image }) => (
          <li className="product-list-item" key={name}>
            <div className="left image-container">
              <img className="product-list-item-image" src={image} alt={name} />
            </div>
            <div className="right">
              <h2>{name}</h2>
              <div className="rating">{rating}</div>
              <div className="reviews">{reviews}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="developer-credits">
        Made with{" "}
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>{" "}
        by{" "}
        <a href="https://github.com/nairitya" target="_blank" rel="noreferrer">
          Nairitya
        </a>
      </div>
    </div>
  );
}
