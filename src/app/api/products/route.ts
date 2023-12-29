// Cores //
import { NextResponse } from "next/server";

// Libraries //
import supabase from "@/lib/supabase";

export async function GET() {
  try {
    const { data: products, error } = await supabase
      .from("Product")
      .select("*");
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
