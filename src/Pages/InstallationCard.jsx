import { Download, Star } from "lucide-react";
import React from "react";
import { ToastContainer } from "react-toastify";

const InstallationCard = ({ product, handleUninstall }) => {
  const { image, title, downloads, ratingAvg, size, id } = product;
  return (
    <div>
      <div className="bg-base-200 shadow mb-4 md:flex justify-between items-center p-5 ">
        <div className="md:flex items-center gap-12 space-y-3">
         <div className="bg-gray-100 p-5 md:py-5 md:px-8 rounded-2xl">
           <img
            src={image}
            className="max-w-sm rounded-lg shadow-xl h-[120px] mx-auto"
          />
         </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex justify-between gap-5 space-y-5">
              <p>
                <span className="font-semibold flex items-center gap-1 text-green-400">
                  <span>
                    <Download size={16} />
                  </span>
                  {downloads}
                </span>
              </p>
              <p>
                <span className="font-semibold flex items-center gap-1 text-yellow-500">
                  <Star size={16} />
                  {ratingAvg}
                </span>
              </p>
              <p>
                <span className="font-semibold ">{size} MB</span>
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleUninstall(id)}
          className="btn bg-green-500 text-white"
        >
          {/* <ToastContainer /> */}
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallationCard;
