import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "../components/form";
import { CardComponent } from "../components/card";
import axios from "axios";

export const PersonList = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [id, setID] = useState("");

  const handleDataSave = () => {
    axios.get("https://64328f8c3e05ff8b3728ac15.mockapi.io/person").then(
      (response) => {
        let data = response?.data;
        setData(data);
        console.log("res", data);
      },
      (error) => {
        console.log("err", error);
      }
    );
  };

  useEffect(() => {
    handleDataSave();
  }, []);

  const getList = () => {
    return (
      <>
        {data?.map((data: any, index: any) => {
          return (
            <CardComponent
              name={data.name}
              age={`${new Date(data.dob).toLocaleDateString("en-US", {
                year: "numeric",
                day: "2-digit",
                month: "short",
              })}`}
              image={data.avatar}
              onClick={() => {
                setID(data?.id);
                openModel(data);
                setShowModal(true);
              }}
            />
          );
        })}
      </>
    );
  };
  const openModel = (e: any) => {
    return (
      <>
        <UserForm
          id={e}
          onclick={() => {
            setShowModal(false);
          }}
        />
      </>
    );
  };

  return (
    <>
      {showModal ? (
        openModel(id)
      ) : (
        <div className="grid lg:grid-cols-4 lg:gap-6 md:grid-cols-2 sm:grid-cols-1 md:gap-4 sm:gap-2  mx-6 my-6  ">
          {getList()}
        </div>
      )}
    </>
  );
};
