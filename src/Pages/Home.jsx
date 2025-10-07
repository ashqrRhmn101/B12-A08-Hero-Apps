import React from "react";
import HeroSection from "./HeroSection";
import UseProducts from "../Hook/UseProducts";
import AppsCard from "./AppsCard";
import { Link } from "react-router";

const Home = () => {
  const { products, loading, error } = UseProducts();
  //   console.log(products)
  const featuredProducts = products.slice(0, 8);
  return (
    <div>
      <HeroSection />
      <div>
        <h1>Trend</h1>
        <p>Ex</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
        {featuredProducts.map((product) => (
          <AppsCard key={product.id} product={product} />
        ))}
      </div>

      <div>
        <Link to="/apps">
          <button className="btn">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
