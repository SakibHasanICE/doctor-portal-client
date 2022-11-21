import React from "react";

const Components = ({ children }) => {
  return (
    <button className="btn btn-primary text-white mb-7 bg-gradient-to-r from-primary to-secondary">
      {children}
    </button>
  );
};

export default Components;
