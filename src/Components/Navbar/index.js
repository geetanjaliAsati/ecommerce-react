import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";
import styles from "./styles.module.css";
import { HeartIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/solid";
const Navbar = () => {
  const { categories, setCategory } = useProduct();

  return (
    <>
      <div className="flex flex-wrap justify-between m-15">
        <h1>Logo</h1>
        <>
          <input type="text" placeholder="search..." />
        </>

        <div>
          <button >
            cart0
          </button>
        </div>
      </div>
      <div className="bg-zinc-900/10 mt-3 mx-auto h-[2px] shadow-sm"></div>
      <nav className={styles.categoryNav}>
        <>
          <Link to="/" className={styles.categoryLink}>
            <h1
              className="truncate capitalize mx-4"
              onClick={() => setCategory("")}
            >
              All
            </h1>
          </Link>
        </>
        {categories &&
          categories.map((i) => (
            <div>
              <Link to={`/${i}`} className={styles.categoryLink}>
                <h1
                  className="truncate capitalize mx-4"
                  onClick={() => setCategory(i)}
                >
                  {i}
                </h1>
              </Link>
            </div>
          ))}
      </nav>
      <div className="bg-zinc-900/10 mx-auto h-[2px] shadow-sm"></div>
    </>
  );
};

export default Navbar;
