"use client";

// Cores //
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Instruments //
import * as z from "zod";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";

// State //
import { userInfoActions } from "@/store/user-slice";

// Libraries //
import supabase from "@/lib/supabase";

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
import { useToast } from "../ui/toasts/use-toast";
import { ToastAction } from "../ui/toasts/toast";

// Types //
import { IUserInfoRootState } from "@/types/user";

const FormSchema = z
  .object({
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
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true); // Set loading state to true during form submission
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      console.log("SignUp Response:", data);

      if (!error?.status) {
        if (data.user) {
          // Dispatch the userLogin action and set cookies separately
          dispatch(userInfoActions.userLogin(data.user));
          Cookies.set("userInfo", JSON.stringify(data.user));
        }

        setShow(true);
        toast({
          variant: "default",
          title: "ثبت‌نام موفق، منتظر تائید شما",
          description: "لطفاً ایمیل خود را تائید کنید.",
        });

        router.refresh();
      } else {
        console.error("SignUp Error:", error.message, error.stack);

        toast({
          variant: "destructive",
          title: "ثبت‌نام ناموفق",
          action: (
            <ToastAction altText="لطفاً دوباره تلاش کنید.">
              دوباره تلاش کنید
            </ToastAction>
          ),
        });
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      // Handle unexpected errors
      toast({
        variant: "destructive",
        title: "خطای غیر منتظره",
        description: "مشکلی در ثبت‌نام رخ داده است. لطفاً دوباره تلاش کنید.",
      });
    } finally {
      setLoading(false); // Set loading state to false after form submission
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
          disabled={loading} // Disable the submit button when loading
        >
          {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
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
      <div
        className={`bg-muted mt-2 p-4 rounded-md font-main text-lg ${
          show ? "block" : "hidden"
        }`}
      >
        <p className="text-primary font-bold mb-2">تائید حساب کاربری</p>
        <p className="text-sm text-muted-foreground">
          برای تائید حساب کاربری، لطفاً صندوق ایمیل‌های خود را چک کنید.
        </p>
      </div>
    </Form>
  );
};

export default SignUpForm;
