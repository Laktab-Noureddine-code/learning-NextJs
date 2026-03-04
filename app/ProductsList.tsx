import Image from "next/image";
import { Product } from "./products-data";
export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Image
            src={`/` + product.image}
            alt={product.name}
            width={200}
            height={200}
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>${product.price}</span>
        </div>
      ))}
    </div>
  );
}
