// Cores //
import { NextResponse } from "next/server";

// Libraries //
import { db } from "@/lib/connect";

// FETCH ALL Banners Content
export const GET = async () => {
  try {
    const banners = await db.bannerContent.findMany({});
    return new NextResponse(JSON.stringify(banners), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
