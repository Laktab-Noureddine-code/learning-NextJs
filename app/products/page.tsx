import { products } from "../products-data";
import ProductsList from "../ProductsList";

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">All Products</h1>
        <p className="mt-1 text-sm text-gray-500">Browse our collection of premium products.</p>
      </div>
      <ProductsList products={products} />
    </div>
  );
}
    