"use client";

// Cores //
import Link from "next/link";
import { useRouter } from "next/navigation";

// Instruments //
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Components //
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form/Form";
import { Button } from "../ui/button";
import { InputField } from "../ui/form/InputField";

const FormSchema = z
  .object({
    username: z.string().min(1, "نام کاربری الزامی است!").max(100),
    email: z.string().min(1, "ایمیل الزامی است!").email("ایمیل نامعتبر است!"),
    password: z
      .string()
      .min(1, "رمز عبور الزامی است!")
      .min(8, "رمز عبور حداقل باید 8 کاراکتر باشد!"),
    confirmPassword: z.string().min(1, "رمز عبور را مجدد تکرار کنید!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "رمز عبور یکسان نیست!",
  });

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });

    if (response.ok) {
      router.push("/login");
    } else {
      console.error("Registration failed!");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full font-main my-0 mx-auto bg-input p-2"
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام کاربری</FormLabel>
                <FormControl>
                  <InputField placeholder="یک نام دلخواه" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ایمیل</FormLabel>
                <FormControl>
                  <InputField placeholder="mail@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رمز عبور</FormLabel>
                <FormControl>
                  <InputField
                    type="password"
                    placeholder="رمز عبور خود را وارد کنید"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رمز عبور مجدد</FormLabel>
                <FormControl>
                  <InputField
                    placeholder="رمز عبور را مجدد وارد کنید"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className=" w-full mt-6 bg-secondary text-secondary-foreground hover:text-primary-foreground transition-colors"
          type="submit"
        >
          ثبت‌نام
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-border after:ml-4 after:block after:h-px after:flex-grow after:bg-border font-main">
        یا
      </div>
      <p className="text-center text-sm text-muted-foreground mt-2 font-main">
        اگر قبلا ثبت‌نام کرده‌اید:
        <Link
          className="text-primary font-nav font-semibold hover:underline mr-1"
          href="/login"
        >
          ورود
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
