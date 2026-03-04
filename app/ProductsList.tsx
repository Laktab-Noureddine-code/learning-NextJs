import Image from "next/image";
import { Product } from "./products-data";
import Link from "next/link";
export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Image
            src={`/` + product.image}
            alt={product.name}
            width={200}
            height={200}
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>${product.price}</span>
        </Link>
      ))}
    </div>
  );
}
