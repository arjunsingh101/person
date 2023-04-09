import React from "react";
export type cardTypes = {
  image?: string;
  name?: string;
  age?: string;
  onClick: (id: any) => void;
};

export const CardComponent = (props: cardTypes) => {
  const defaultimage =
    "https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80";
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pt-10 pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={props.image ? props.image : defaultimage}
          alt="Bonnie image"
        />

        <button onClick={(id: any) => props && props.onClick(id)}>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </button>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {props.age}
        </span>
      </div>
    </div>
  );
};
