// Cores //
import { NextResponse } from "next/server";

// Libraries //
import { db } from "@/lib/connect";

// FETCH ALL CATEGORIES
export const GET = async () => {
  try {
    const categories = await db.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
