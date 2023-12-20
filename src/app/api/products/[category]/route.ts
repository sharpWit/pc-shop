// Cores //
import { NextResponse } from "next/server";

// Libraries //
import { db } from "@/lib/connect";

// FETCH ALL PRODUCTS
export const GET = async (
  request: Request,
  { params }: { params: { category: string } }
) => {
  const cat = params.category;

  try {
    const products = await db.product.findMany({
      where: {
        ...(cat ? { slug: cat } : null),
      },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
