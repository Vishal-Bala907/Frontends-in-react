import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function AddNewTask() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/save", data)
      .then(function (res) {
        if (res.status === 201) {
          toast.success("Task added successfully", {
            position: "top-left",
          });
        } else {
          toast.error("Unable to add", {
            position: "top-left",
          });
        }
      })
      .catch(function (err) {
        console.error(err);
      });
    // console.log(data);
  };
  return (
    <section className="flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center gap-6 flex-col py-4">
          <label htmlFor="title" className="text-2xl ">
            Enter title
          </label>
          <input
            className="border-b-2 outline-none w-72 sm:w-[450px] border-black"
            type="text"
            {...register("title", {
              required: true,
              minLength: 5,
            })}
          />
        </div>
        <div className="flex justify-center items-center gap-6 flex-col py-4">
          <label htmlFor="title" className="text-2xl ">
            Enter Description
          </label>
          <textarea
            className="border-b-2 border-black outline-none w-72 sm:w-[450px]"
            {...register("description", {
              required: true,
              minLength: 5,
            })}
          />
        </div>
        <div className="flex justify-center items-center gap-6 flex-col py-4">
          <label htmlFor="title" className="text-2xl ">
            Start Time
          </label>
          <input
            className="border-b-2 outline-none w-72 sm:w-[450px] border-black"
            type="time"
            {...register("startTime", {
              required: true,
            })}
          />
        </div>
        <div className="flex justify-center items-center gap-6 flex-col py-4">
          <label htmlFor="title" className="text-2xl ">
            Start Time
          </label>
          <input
            className="border-b-2 outline-none w-72 sm:w-[450px] border-black"
            type="time"
            {...register("endTime", {
              required: true,
            })}
          />
          <button
            className="bg-blue-500 text-black px-8 py-4 rounded-3xl shadow-md hover:bg-blue-900 hover:text-white"
            type="submit"
          >
            Add work
          </button>
          <Toaster />
        </div>
      </form>
    </section>
  );
}
