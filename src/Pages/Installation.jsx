import React, { useEffect, useState } from "react";
import InstallationCard from "./InstallationCard";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  //   console.log(installed);
  const [sortInstall, setSortInstall] = useState("none");
  useEffect(() => {
    const savedApp = JSON.parse(localStorage.getItem("install"));
    if (savedApp) {
      setInstalled(savedApp);
    }
  }, []);

  //   // Sort Handle
  const sortedItem = (() => {
    // const numericOnly = installed.filter(
    //   (p) =>
    //     !p.downloads?.toString().toLowerCase().includes("k") &&
    //     !p.downloads?.toString().toLowerCase().includes("m")
    // );

    if (sortInstall === "install-asc") {
      return [...installed].sort((a, b) => a.size - b.size);
    } else if (sortInstall === "install-desc") {
      return [...installed].sort((a, b) => b.size - a.size);
    } else {
      return installed;
    }
  })();

  //   // handleRemove .
  const handleUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updateList = existingList.filter((p) => p.id !== id);
    setInstalled(updateList);
    localStorage.setItem("install", JSON.stringify(updateList));
  };
  return (
    <div>
      <div className="flex justify-between items-center py-8">
        <h1 className="text-xl font-bold">{sortedItem.length} Apps Found</h1>
        <label className="form-control w-[150px] max-w-xs">
          <select
            value={sortInstall}
            onChange={(e) => setSortInstall(e.target.value)}
            className="select select-bordered "
          >
            <option value="none">Sort By Size</option>
            <option value="install-asc">Low-&gt;High</option>
            <option value="install-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div>
        {sortedItem.map((product) => (
          <InstallationCard
            key={product.id}
            product={product}
            handleUninstall={handleUninstall}
          />
        ))}
      </div>
    </div>
  );
};

export default Installation;
