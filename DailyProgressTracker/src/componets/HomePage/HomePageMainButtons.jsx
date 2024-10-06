export default function HomePageMainButtons({ title, description }) {
  return (
    <div
      className="bg-slate-200 text-black p-20 montserrat-alternates-regular
      hover:shadow-10xl
     rounded-2xl shadow-xl lg:w-[420px] w-[300px] h-fit hover:bg-slate-100 hover:cursor-pointer
    "
    >
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
