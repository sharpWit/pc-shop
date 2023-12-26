// Cores //
import { NextResponse } from "next/server";

// Libraries //
// import { db } from "@/lib/connect";
import supabase from "@/lib/supabase";

// FETCH ALL Banners Content
// export const GET = async () => {
//   try {
//     const banners = await db.bannerContent.findMany({});
//     return new NextResponse(JSON.stringify(banners), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }),
//       { status: 500 }
//     );
//   }
// };
export async function GET() {
  try {
    const { data: bannerContent, error } = await supabase
      .from("BannerContent")
      .select("*");
    if (error) {
      console.error(error);
      throw new Error("BannerContent could not be loaded");
    }
    return new NextResponse(JSON.stringify(bannerContent), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
