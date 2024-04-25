"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {motion} from "framer-motion"

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const form = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<FormFields> = async (data: any) => {
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(
        (result) => {
          toast.success("Message has been sent!");
          setLoading(false);
        },
        (error) => {
          toast.error("Smoething wen wrong...");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact">
      <div className="max-w-7xl mx-auto pt-20 px-4">
        <TextGenerateEffect
          words={"Contact With Me"}
          className="z-10 relative mb-20"
        />
        <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }} 
        viewport={{once:true}}
        className="mt-10 mx-auto sm:max-w-4xl">
          <BackgroundGradient className="sm:max-w-4xl bg-black rounded-3xl px-2 md:px-10 py-16">
            <h3 className="text-4xl font-bold text-center mb-10">
              Contact Form
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              ref={form}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-3">
                <label className="font-bold text-lg sm:text-xl" htmlFor="name">
                  Full name
                </label>
                <input
                  className="p-3 focus:outline-none focus:ring-2 focus:ring-violet-500  sm:p-4 rounded-2xl bg-violet-300/20 font-bold"
                  type="text"
                  {...register("name")}
                  id="name"
                  placeholder="Enter your full name..."
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-bold text-lg sm:text-xl" htmlFor="email">
                  Email
                </label>
                <input
                  className="p-3 focus:outline-none focus:ring-2 focus:ring-violet-500  sm:p-4 rounded-2xl bg-violet-300/20 font-bold"
                  type="text"
                  {...register("email")}
                  id="email"
                  placeholder="Enter your email..."
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-bold text-lg sm:text-xl" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="p-3 focus:outline-none focus:ring-2 focus:ring-violet-500  sm:p-4 rounded-2xl bg-violet-300/20 font-bold hover:outline-none"
                  {...register("message")}
                  id="message"
                  placeholder="Enter your message..."
                  rows={3}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-violet-600 hover:bg-violet-600/60 transition-colors duration-500 px-6 py-4 rounded-full text-xl font-semibold"
              >
                {loading ? "Loading..." : "Send Message"}
              </button>
            </form>
          </BackgroundGradient>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
