// Cores //
import { NextResponse } from "next/server";

// Libraries //
import supabase from "@/lib/supabase";

export async function GET() {
  try {
    const { data: productGroups, error } = await supabase
      .from("ProductGroup")
      .select("*");
    if (error) {
      console.error(error);
      throw new Error("ProductGroups could not be loaded");
    }
    return new NextResponse(JSON.stringify(productGroups), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
