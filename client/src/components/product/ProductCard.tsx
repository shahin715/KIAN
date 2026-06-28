import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string | null;
}

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="
        block
        bg-white
        rounded-lg
        overflow-hidden
        border
        hover:shadow-lg
        transition
      "
    >
      <div className="relative aspect-3/4 bg-gray-100">
        {product.image ? (
       <Image
  src={`http://localhost:5000${product.image}`}
  alt={product.name}
  fill
  unoptimized={true}
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 25vw"
/>
        ) : (
          <div
            className="
              flex
              items-center
              justify-center
              w-full
              h-full
              text-gray-400
            "
          >
            No Image
          </div>
        )}
      </div>

      <div className="p-4">
        <h3
          className="
            text-sm
            font-medium
            text-gray-900
            line-clamp-2
          "
        >
          {product.name}
        </h3>

        <p
          className="
            mt-2
            text-lg
            font-semibold
          "
        >
          {"\u09F3"}
          {product.price}
        </p>
      </div>
    </Link>
  );
}