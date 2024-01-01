"use client";

// Cores //
import Link from "next/link";
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

// Instruments //
import * as z from "zod";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { Session } from "@supabase/supabase-js";
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

const FormSchema = z.object({
  email: z.string().min(1, "ایمیل الزامی است!").email("ایمیل نامعتبر است!"),
  password: z
    .string()
    .min(1, "رمز عبور الزامی است!")
    .min(8, "رمز عبور حداقل باید 8 کاراکتر باشد!"),
});

interface Props {
  session: Session | null;
}

const SignInForm: FC<Props> = ({ session }) => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const router = useRouter();

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
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error?.status === 400) {
      toast({
        variant: "destructive",
        title: "شما با یک خطا مواجه شدید!",
        description: `${error?.message}`,
        action: <ToastAction altText="Try again">دوباره تلاش کنید</ToastAction>,
      });
    } else {
      // Check if data.session is not null before dispatching
      if (data.session) {
        dispatch(userInfoActions.userLogin(data.user));
        Cookies.set("userInfo", JSON.stringify(data.user));
        // Redirect to the home page ("/") after successful login
        router.refresh();
      }
    }
  };

  const handleSignOut = async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      // Redirect to the home page ("/") after successful sign-out
      router.push("/");
    } else {
      console.error("Sign-out Error:", error.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full font-main my-0 mx-auto bg-input p-2"
      >
        {session ? ( // Show logout button if user is logged in
          <Button
            variant={"destructive"}
            className="font-nav"
            onClick={handleSignOut}
          >
            خروج از حساب کاربری
          </Button>
        ) : (
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
            <Button
              className="w-full mt-6 transition-colors"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "در حال ورود..." : "ورود"}
            </Button>
          </div>
        )}
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-border after:ml-4 after:block after:h-px after:flex-grow after:bg-border font-main">
        یا
      </div>
      <p className="text-center text-sm text-muted-foreground mt-2 font-main">
        اگر هنوز حساب کاربری ندارید:
        <Link
          className="text-primary font-nav font-semibold hover:underline mr-1"
          href="/signup"
        >
          ثبت‌نام
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
