import Image from "next/image";
import { Product } from "./products-data";
import Link from "next/link";
export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-gray-300"
        >
          <div className="relative aspect-square overflow-hidden rounded-t-xl bg-gray-100">
            <Image
              src={`/` + product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <h2 className="text-base font-semibold text-gray-900">{product.name}</h2>
            <p className="mt-1.5 text-sm text-gray-500 line-clamp-2">{product.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">${product.price}</span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors group-hover:bg-gray-900 group-hover:text-white">
                View
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
