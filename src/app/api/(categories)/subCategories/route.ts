// Cores //
import { cache } from "react";
import { NextResponse } from "next/server";

// Libraries //
import supabase from "@/lib/supabase";

export const GET = cache(async () => {
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
});
