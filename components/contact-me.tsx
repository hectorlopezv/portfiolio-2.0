import React from "react";
import { EnvelopeIcon, MapIcon, PhoneIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // Todo SENT TO A SERVER
    window.location.href = `mailto:hectorvmlopez@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} ${formData.message} (${formData.email})`;
  };
  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left 
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="my-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50  underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+57 32055528711</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">hectorvmlopez@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Barranquilla, Colombia</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-full mx-auto"
      >
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput w-full"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput w-full"
            type="email"
          />
        </div>

        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput w-full"
          type="text"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        />
        <button
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black
          font-bold text-lg
          "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
