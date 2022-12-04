import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Loader/Loader";
import "./AlluserData.css";
import ALLDataItems from "./ALLDataItems";
const AlluserData = () => {
  const token = localStorage.getItem("auth");
  const [item, setItem] = useState(null);
  console.log("item =", item);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://test.nexisltd.com/test`, {
        headers: {
          "Content-type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const object = Object.values(data);
      setItem(object);
    } catch (error) {
      console.log("Fetch aall error =", error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      {item === null ? (
        <Loader />
      ) : (
        <div className="showAllData">
          <h1>Attendance Information {item?.length}</h1>
          <div className="table">
            <div>
              <h5>Picture</h5>
              <h5>Employee Name</h5>
              <h5>Position</h5>
            </div>
            <div className="itemss">
              {item?.map((items) => (
                <ALLDataItems items={items} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AlluserData;
