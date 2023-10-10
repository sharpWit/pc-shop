"use client";

// Cores //
import Link from "next/link";
import { useRouter } from "next/navigation";

// Instruments //
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

const FormSchema = z.object({
  email: z.string().min(1, "ایمیل الزامی است!").email("ایمیل نامعتبر است!"),
  password: z
    .string()
    .min(1, "رمز عبور الزامی است!")
    .min(8, "رمز عبور حداقل باید 8 کاراکتر باشد!"),
});

const SignInForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      toast({
        variant: "destructive",
        title: "شما با یک خطا مواجه شدید!",
        description: `${signInData?.error}`,
        action: <ToastAction altText="Try again">دوباره تلاش کنید</ToastAction>,
      });
    } else {
      router.push("/");
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
        </div>
        <Button className="w-full mt-6 transition-colors" type="submit">
          ورود
        </Button>
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
