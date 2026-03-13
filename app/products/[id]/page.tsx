import NotFoundPage from "@/app/not-found";
import { products } from "@/app/products-data";
import Image from "next/image";
import Link from "next/link";
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
        <Link
          href="/products"
          className="transition-colors hover:text-gray-900"
        >
          Products
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={`/` + product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            {product.description}
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/card"
              className="flex items-center justify-center rounded-lg bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800"
            >
              Add to Cart
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
