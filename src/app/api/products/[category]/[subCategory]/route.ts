// Cores //
import { NextResponse } from "next/server";

// Libraries //
import { db } from "@/lib/connect";

// FETCH ALL PRODUCTS
export const GET = async (
  request: Request,
  { params }: { params: { subCategory: string } }
) => {
  const subCat = params.subCategory;

  try {
    const products = await db.product.findMany({
      where: {
        ...(subCat ? { subSlug: subCat } : null),
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
