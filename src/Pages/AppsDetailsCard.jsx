import React from "react";
import UseProducts from "../Hook/UseProducts";
import { useParams } from "react-router";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppsDetailsCard = () => {
  const { id } = useParams();
  const parsIntId = parseInt(id);
  const { products, loading } = UseProducts();
  // console.log(typeof parsIntId)
  const product = products.find((p) => p.id === parsIntId);
  // console.log(product);
  if (loading) return <p>loading....</p>;
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = product;

  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updateList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return alert("Already Added");
      updateList = [...existingList, product];
    } else {
      updateList.push(product);
    }

    localStorage.setItem("install", JSON.stringify(updateList));
  };
  return (
    <div>
      <div className="hero bg-base-200 shadow">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="py-6">
              Developed by <span className="text-blue-400">{companyName}</span>
            </p>
            <div className="flex justify-between gap-5 space-y-5">
              <p>
                Downloads <br />
                <span className="text-4xl font-bold">{downloads}</span>
              </p>
              <p>
                Average Ratings <br />
                <span className="text-4xl font-bold">{ratingAvg}</span>
              </p>
              <p>
                Total Reviews <br />
                <span className="text-4xl font-bold">{reviews}</span>
              </p>
            </div>
            <button
              onClick={handleInstall}
              className="btn bg-green-500 text-white"
            >
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>
      <div className="bg-base-200 p-5 mt-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4 text-center sm:text-left">
          Ratings
        </h2>
        <div className="w-full h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratings}
              layout="vertical"
              margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
            >
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis
                dataKey="name"
                type="category"
                width={60}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="count" fill="#ff9800" barSize={20} radius={6} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AppsDetailsCard;
