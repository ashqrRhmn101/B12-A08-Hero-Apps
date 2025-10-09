import React from "react";
import HeroSection from "./HeroSection";
import UseProducts from "../Hook/UseProducts";
import AppsCard from "./AppsCard";
import { Link } from "react-router";
import LoadingSkeleton from "./LoadingSkeleton";

const Home = () => {
  const { products, loading, error } = UseProducts();
  //   console.log(products)
  const featuredProducts = products.slice(0, 8);
  return (
    <div>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg-px-12 py-4 md:py-8 lg-py-12">
        <div className="text-center py-8 space-y-3">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
          {featuredProducts.map((product) => (
            <AppsCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="text-center">
        <Link to="/apps">
          <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
            Show All
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
