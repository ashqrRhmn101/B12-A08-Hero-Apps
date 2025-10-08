import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppsCard = ({ product }) => {
  const { image, title, downloads, ratingAvg, id } = product;
  return (
    <Link to={`/apps/${id}`}>
      <div className="rounded-lg border p-2 space-y-3 hover:scale-105 transition ease-in-out">
        <div className="bg-gray-100 h-[100px] rounded-lg">
          <img className="" src={image} alt="" />
        </div>
        <div>
          <h1>{title}</h1>
        </div>
        <div className="flex justify-between items-center">
          <button className="btn bg-green-100 text-green-500">
            {" "}
            <span>
              <Download size={16} />
            </span>{" "}
            {downloads}
          </button>
          <button className="btn ">
            <Star size={16} /> {ratingAvg}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
