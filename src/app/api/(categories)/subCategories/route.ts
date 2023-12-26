// Cores //
import { NextResponse } from "next/server";

// Libraries //
// import { db } from "@/lib/connect";
import supabase from "@/lib/supabase";

// FETCH ALL SubCATEGORIES
// export const GET = async (request: Request) => {
//   const { searchParams } = new URL(request.url);
//   const cat = searchParams.get("cat");

//   // Validate the cat parameter
//   if (!cat) {
//     return new NextResponse(
//       JSON.stringify({ message: "Missing 'cat' parameter" }),
//       { status: 400 }
//     );
//   }

//   try {
//     const { data: subCategories, error } = await supabase
//       .from("subCategory")
//       .select(cat);

//     if (error) {
//       console.error(error);
//       return new NextResponse(
//         JSON.stringify({ message: "Something went wrong!" }),
//         { status: 500 }
//       );
//     }

//     return new NextResponse(JSON.stringify(subCategories), { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }),
//       { status: 500 }
//     );
//   }
// };

// FETCH ALL SubCATEGORIES
// export const GET = async (request: Request) => {
//   const { searchParams } = new URL(request.url);
//   const cat = searchParams.get("cat");
//   try {
//     const subCategories = await db.subCategory.findMany({
//       where: {
//         ...(cat ? { slug: cat } : null),
//       },
//     });
//     return new NextResponse(JSON.stringify(subCategories), { status: 200 });
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
    const { data: subCategories, error } = await supabase
      .from("SubCategory")
      .select("*");
    if (error) {
      console.error(error);
      throw new Error("SubCategories could not be loaded");
    }
    return new NextResponse(JSON.stringify(subCategories), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
