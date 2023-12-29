// Cores //
import { NextResponse } from "next/server";

// Libraries //
import supabase from "@/lib/supabase";

export async function GET() {
  try {
    const { data: offersProducts, error } = await supabase
      .from("Product")
      .select("*")
      .eq("isOffer", true);

    if (error) {
      console.error(error);
      throw new Error("OffersProducts could not be loaded");
    }
    if (offersProducts && offersProducts.length > 0) {
      return new NextResponse(JSON.stringify(offersProducts), { status: 200 });
    } else {
      return new NextResponse(
        JSON.stringify({ message: "No offer products found!" }),
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
