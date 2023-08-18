import React, { useEffect, useState } from "react";
import { FetchData } from "../services/userService";

const TestingAPICalls = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchData().then((data) => {
      setData(data);
    });
  });

  return (
    <div>
      {data.map((item, idx) => (
        <div key={idx}>{item.name}</div>
      ))}
    </div>
  );
};

export default TestingAPICalls;
