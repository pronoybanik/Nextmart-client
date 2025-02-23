import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllCategories } from "@/services/Category";
import { getAllProducts } from "@/services/product";
import { ICategory } from "@/types";
import React from "react";

const AllProductPage = async () => {
  const { data: categories } = await getAllCategories();
  const { data: products } = await getAllProducts();
  
  return (
    <NMContainer>
      <ProductBanner title="All Products" path="Home-Products" />

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold my-5">Feature Collection</h1>
        <div className="flex gap-2">
          <p>Previous</p>
          <p>Next</p>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-6 mt-10">
        {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>

      <div>
        <AllProducts products={products} />
      </div>
    </NMContainer>
  );
};

export default AllProductPage;
