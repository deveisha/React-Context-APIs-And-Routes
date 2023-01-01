import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const FetchData = () => {
   const [userData, setUserData] = useState();
    const fetchData = async () => {
    await fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("fetchData=====>", userData);
  return (
    <div>
      <Cards userData={userData} />
    </div>
  );
};

export default FetchData;
