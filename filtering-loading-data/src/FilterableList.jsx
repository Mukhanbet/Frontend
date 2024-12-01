import React, { useState, useEffect } from "react";

const FilterableList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        "Apple",
        "Banana",
        "Cherry",
        "Orange",
        "Mango",
        "Peach",
        "Plum",
        "Kiwi",
        "Watermelon",
        "Melon",
      ];
      setData(mockData);
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>Data filtering</h1>
      <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default FilterableList;
