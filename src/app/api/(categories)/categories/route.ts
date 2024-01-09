// Cores //
import { cache } from "react";
import { NextResponse } from "next/server";

// Libraries //
import supabase from "@/lib/supabase";

export const GET = cache(async () => {
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
});
