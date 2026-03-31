import { products } from "@/app/products-data";
import { NextRequest } from "next/server";

type ShopingCard = Record<string, string[]>;
const shopingCard: ShopingCard = {
  "1": ["123", "234"],
  "2": ["345", "456"],
  "3": ["123", "345"],
};

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> },
) {
  const { id } = await params;
  const productIds = shopingCard[id];
  if (productIds === undefined) {
    return new Response(JSON.stringify([]), {
      status: 404,
      headers: {
        "Content-type": "application/json",
      },
    });
  }
  const cardProducts = productIds.map((id) =>
    products.find((prod) => prod.id === id),
  );
  return new Response(JSON.stringify(cardProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

type CardBody = {
  productId: string;
};
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<Params> },
) {
  const { id } = await params;
  const body: CardBody = await request.json();
  const productId = body.productId;
  shopingCard[id] = shopingCard[id] ? shopingCard[id].concat(productId) : [];
  const cardProducts = shopingCard[id].map((id) =>
    products.find((prod) => prod.id === id),
  );
  return new Response(JSON.stringify(cardProducts), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<Params> },
) {
  const { id } = await params;
  const body: CardBody = await request.json();
  const removedId = body.productId;
  shopingCard[id] = shopingCard[id]
    ? shopingCard[id].filter((prod) => prod !== removedId)
    : shopingCard[id];
  const cardProducts = shopingCard[id].map((id) =>
    products.find((prod) => prod.id === id),
  );

  return new Response(JSON.stringify(cardProducts), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
