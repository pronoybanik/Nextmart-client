import React from "react";
import CreateCategoryModal from "./CreateCategoryModal";

const ManageCategories = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold">Manage category </h1>
      <CreateCategoryModal />
    </div>
  );
};

export default ManageCategories;
