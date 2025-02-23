import ManageProducts from "@/components/modules/shop/products";
import { getAllProducts } from "@/services/product";

const ManageProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {

  const { page } = await searchParams;

  const { data, meta } = await getAllProducts(page);
  return (
    <div>
      <ManageProducts products={data} meta={meta} />
    </div>
  );
};

export default ManageProductsPage;
