// Instruments //
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import * as z from "zod";

// Libraries //
import { db } from "@/lib/connect";

// Define a schema for input validation
const userSchema = z.object({
  username: z.string().min(1, "نام کاربری الزامی است!").max(100),
  email: z.string().min(1, "ایمیل الزامی است!").email("ایمیل نامعتبر است!"),
  password: z
    .string()
    .min(1, "رمز عبور الزامی است!")
    .min(8, "رمز عبور حداقل باید 8 کاراکتر باشد!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    // check if the email already exists
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User has already existed by the same email",
        },
        { status: 409 }
      );
    }

    // check if the username already exists
    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "User has already existed by the same username",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      {
        user: rest,
        message: "The user was created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
