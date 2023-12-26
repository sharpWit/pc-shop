// Cores //
import { NextResponse } from "next/server";

// Libraries //
// import { db } from "@/lib/connect";
import supabase from "@/lib/supabase";

// FETCH ALL CATEGORIES
// export const GET = async () => {
//   try {
//     const categories = await db.category.findMany();
//     return new NextResponse(JSON.stringify(categories), { status: 200 });
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
    const { data: categories, error } = await supabase
      .from("Category")
      .select("*");
    if (error) {
      console.error(error);
      throw new Error("Categories could not be loaded");
    }
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
