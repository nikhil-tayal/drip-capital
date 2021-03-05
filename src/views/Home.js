import React, { useState, useEffect } from "react";
import { GET } from "../Utils/webAPI.service";
import { API_GET_ALL_LIST } from "../Utils/APIUrls";
import { AppCard } from "../components";
export default function Home(props) {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    GET(API_GET_ALL_LIST).then(({ data }) => {
      setAppData(data.items);
    });
  }, []);
  return (
    <div className="home__wrapper">
      <div className="container">
        {appData.map((data) => {
          let { fields, sys } = data;
          return (
            <AppCard fields={fields} {...props} id={sys.id}/>
          );
        })}
      </div>
    </div>
  );
}
