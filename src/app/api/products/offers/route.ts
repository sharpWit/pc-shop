// Cores //
import { NextResponse } from "next/server";

// Libraries //
import { db } from "@/lib/connect";

// FETCH ALL OFFERED PRODUCTS
export const GET = async () => {
  try {
    const offersProducts = await db.product.findMany({
      where: {
        isOffer: true,
      },
    });
    return new NextResponse(JSON.stringify(offersProducts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
