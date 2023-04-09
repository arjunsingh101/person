import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "../components/form";
import { CardComponent } from "../components/card";

function AddPersonScreen() {
  return (
    <div>
      <UserForm />
    </div>
  );
}

export default AddPersonScreen;
