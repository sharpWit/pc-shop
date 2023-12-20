// Cores //
import { NextResponse } from "next/server";

// Libraries //
import { db } from "@/lib/connect";

// FETCH A SPECIFIC PRODUCT
export const GET = async (
  request: Request,
  { params }: { params: { title: string } }
) => {
  const productName = params.title;

  try {
    const product = await db.product.findUnique({
      where: {
        enTitle: productName,
      },
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
