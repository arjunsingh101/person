import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPersonScreen from "./screens/addPersonScreen";
import { PersonList } from "./screens/personList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddPersonScreen />}></Route>
        <Route path="/personlist" element={<PersonList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
