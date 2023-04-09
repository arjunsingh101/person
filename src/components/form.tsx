import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type formType = {
  onclick?: (id: any) => void;
  id?: string;
};

const UserForm = ({ onclick, id }: formType) => {
  const defaultimage =
    "https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState(defaultimage);
  const navigate = useNavigate();
  const getImage = (e: any) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCountryName = (e: any) => {
    let name = e.target.value;
    setCountry(name == 1 ? "India" : name == 2 ? "USA" : "Canada");
  };

  console.log("kjdsfdsjknjks", id);

  const handleDataSave = (e: any) => {
    console.log("jdahjsbajd", e);
    let body = {
      name: name,
      email: email,
      dob: dob,
      country: country,
      avatar: image,
    };
    axios
      .post(`https://64328f8c3e05ff8b3728ac15.mockapi.io/person/${id}`, body)
      .then(
        (response) => {
          // const { name, email, dob, avatar, country }: any = response;
          // setName(name);
          // setEmail(email);
          // setDOB(dob);
          // setImage(avatar);
          // setCountry(country);
          if (response) {
            navigate("/personlist");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    e.preventDefault();
  };
  const setData = () => {
    axios.get(`https://64328f8c3e05ff8b3728ac15.mockapi.io/person/:${id}`).then(
      (response) => {
        const { name, email, dob, avatar, country }: any = response;
        setName(name);
        setEmail(email);
        setDOB(dob);
        setImage(avatar);
        setCountry(country);
        if (response) {
          navigate("/personlist");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  useEffect(() => {
    setData();
  }, []);
  return (
    <form>
      <div
        className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="font-semibold text-lg mr-auto">
                  Person Details
                </h2>
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
              </div>
              <div className="mt-5">
                <div className="form">
                  <div className="md:space-y-2 mb-3">
                    <div className="flex items-center py-6">
                      <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                        <img
                          className="w-12 h-12 mr-4 object-cover"
                          src={image}
                          alt="Avatar Upload"
                        />
                      </div>
                      <label className="cursor-pointer ">
                        <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                          Browse
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={getImage}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Name <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder=" Name"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required={true}
                        type="text"
                        name="name"
                        id="integration_shop_name"
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                      />
                      <p className="text-red text-xs hidden">
                        Please fill out this field.
                      </p>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Mail <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Email ID"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required={true}
                        type="text"
                        name="email"
                        id="integration_shop_name"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                      />
                      <p className="text-red text-xs hidden">
                        Please fill out this field.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        DOB <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="DOB"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required={true}
                        type="date"
                        name="dob"
                        id="integration_shop_name"
                        value={dob}
                        onChange={(e: any) => setDOB(e.target.value)}
                      />
                      <p className="text-red text-xs hidden">
                        Please fill out this field.
                      </p>
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Country<abbr title="required">*</abbr>
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                        required={true}
                        name="country"
                        id="integration_city_id"
                        value={country}
                        onChange={handleCountryName}
                      >
                        <option value={1}>Seleted Country</option>
                        <option value={2}>India</option>
                        <option value={3}>USA</option>
                        <option value={4}>Canada</option>
                      </select>
                      <p
                        className="text-sm text-red-500 hidden mt-3"
                        id="error"
                      >
                        Please fill out this field.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                      Cancel
                    </button>
                    <input
                      type="submit"
                      name="Save"
                      onClick={(e) => {
                        if (
                          name != "" &&
                          email != "" &&
                          dob != "" &&
                          country != ""
                        ) {
                          onclick && onclick(e);
                          handleDataSave(e);
                        }
                      }}
                      className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
