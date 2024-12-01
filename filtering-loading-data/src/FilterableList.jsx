import React, { useState, useEffect } from "react";

const FilterableList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h1>Data filtering</h1>
    </div>
  );
};

export default FilterableList;
