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

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );  

  return (
    <div>
      <h1>Data filtering</h1>
      <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm ? (
        filteredData.length > 0 ? (
          <div>
            {filteredData.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ) : (
          <p>Nothing found</p>
        )
      ) : (
        <p>Enter text to search</p>
      )}
    </div>
  );
};

export default FilterableList;