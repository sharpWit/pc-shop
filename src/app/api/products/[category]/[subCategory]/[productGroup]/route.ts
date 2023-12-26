// Cores //
import { NextResponse } from "next/server";

// Libraries //
// import { db } from "@/lib/connect";
import supabase from "@/lib/supabase";

// FETCH ALL PRODUCTS
// export const GET = async (
//   request: Request,
//   { params }: { params: { productGroup: string } }
// ) => {
//   const groupCat = params.productGroup;

//   try {
//     const products = await db.product.findMany({
//       where: {
//         ...(groupCat ? { groupTitle: groupCat } : null),
//       },
//     });
//     return new NextResponse(JSON.stringify(products), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }),
//       { status: 500 }
//     );
//   }
// };

export async function GET(
  request: Request,
  { params }: { params: { productGroup: string } }
) {
  const groupCat = params.productGroup;

  try {
    const { data: products, error } = await supabase
      .from("Product")
      .select("*")
      .eq(groupCat ? "groupTitle" : "", groupCat || null);

    if (error) {
      console.error(error);
      throw new Error("Products could not be loaded");
    }

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
