// Cores //
import { NextResponse } from "next/server";

// Libraries //
// import { db } from "@/lib/connect";
import supabase from "@/lib/supabase";

// FETCH A SPECIFIC PRODUCT
// export const GET = async (
//   request: Request,
//   { params }: { params: { title: string } }
// ) => {
//   const productName = params.title;

//   try {
//     const product = await db.product.findUnique({
//       where: {
//         enTitle: productName,
//       },
//     });
//     return new NextResponse(JSON.stringify(product), { status: 200 });
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
  { params }: { params: { title: string } }
) {
  const productName = params.title;

  try {
    const { data: product, error } = await supabase
      .from("Product")
      .select("*")
      .eq("enTitle", productName);

    if (error) {
      console.error(error);
      throw new Error("Product could not be loaded");
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
