import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
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
    window.location.href = `mailto:hectorvmlopez@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData?.name} ${formData?.message} (${formData?.email})`;
  };
  return (
    <div
      className=" relative flex flex-col text-center md:text-left 
    max-w-7xl px-10 justify-evenly mx-auto items-center
    h-screen pb-10
    "
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-xl  lg:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col">

        <h4 className="text-xl lg:text-4xl font-semibold text-center">
          I got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50  underline">Lets Talk.</span>
        </h4>

        <div className="space-y-4 lg:space-y-10 mt-5">
          <div className="flex items-center justify-start lg:justify-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] w-6 h-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-md lg:text-2xl">+57 32055528711</p>
          </div>
          <div className="flex items-center justify-start lg:justify-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] w-6 h-6 md:h-7 md:w-7  animate-pulse" />
            <p className="text-md lg:text-2xl">hectorvmlopez@gmail.com</p>
          </div>
          <div className="flex items-center justify-start lg:justify-center space-x-5">
            <MapIcon className="text-[#F7AB0A] w-6 h-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-md lg:text-2xl">Barranquilla, Colombia</p>
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
          className="bg-[#F7AB0A] py-3 md:py-5 lg:px-10 rounded-md text-black
          font-bold text-md lg:text-lg
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
