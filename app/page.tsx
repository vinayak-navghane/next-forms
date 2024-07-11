"use client"

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string,
  lastName: string,
};

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  //console.log(watch("firstName")) // watch input value by passing the name of it

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex  flex-col items-center justify-between">
        <input className="border"
          placeholder="First Name" {...register("firstName")} />
        <input className="border"
          placeholder="Last Name" {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}
        <input type="submit"
          className="border"
        />
      </div>
    </form>
  );
}
/*
<main className="flex  flex-col items-center justify-between">
      <h1 className="pb-10">Next Forms</h1>
      <div className="flex flex-col justify-center">
        <label>Name</label>
        <input type="text"
          className="border"
          placeholder="Enter name"></input>
      </div>
    </main>

*/