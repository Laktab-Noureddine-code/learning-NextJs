"use client";
import { useState } from "react";
import { products } from "../products-data";
import Link from "next/link";
import Image from "next/image";

export default function CardPage() {
  const [cardIds, setCardIds] = useState<string[]>(["123", "234"]);
  const cardProducts = cardIds.map((id) => products.find((p) => p.id === id)!);

  const total = cardProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Shopping Cart</h1>
      <p className="mt-1 text-sm text-gray-500">{cardProducts.length} item{cardProducts.length !== 1 && "s"} in your cart</p>

      <div className="mt-8 space-y-0 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white shadow-sm">
        {cardProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="flex items-center gap-6 p-6 transition-colors hover:bg-gray-50"
          >
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={`/` + product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h2 className="text-base font-semibold text-gray-900">{product.name}</h2>
              <p className="mt-1 text-sm text-gray-500 line-clamp-1">{product.description}</p>
            </div>
            <span className="text-lg font-semibold text-gray-900">${product.price}</span>
          </Link>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <span className="text-sm text-gray-600">Subtotal</span>
          <span className="text-sm font-medium text-gray-900">${total}</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <span className="text-sm text-gray-600">Shipping</span>
          <span className="text-sm font-medium text-gray-900">Free</span>
        </div>
        <div className="flex items-center justify-between pt-4">
          <span className="text-base font-semibold text-gray-900">Total</span>
          <span className="text-base font-semibold text-gray-900">${total}</span>
        </div>
        <Link
          href="/checkout"
          className="mt-6 flex w-full items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
