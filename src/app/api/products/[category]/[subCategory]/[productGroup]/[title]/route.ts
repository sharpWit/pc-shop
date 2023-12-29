// Cores //
import { NextResponse } from "next/server";

// Libraries //
import supabase from "@/lib/supabase";

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
