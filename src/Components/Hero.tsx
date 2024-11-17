import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-slate-300">
      <h1 className="text-center text-blue-800 text-3xl p-4 font-bold underline">
        A Responsive Webpage
      </h1>

      <div className="bg-slate-300 flex md:flex-row flex-col items-center md:items-start md:justify-around w-full min-h-screen">
        <div className="mt-8 md:mt-10">
          <Image
            src="/desk-launge-chair.jpg"
            width={330}
            height={330}
            alt="Desk Lounge Chair"
          />
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            Desk Lounge Chair
          </p>
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            PKR: 15,000/-
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 font-bold text-white rounded-lg py-3 px-6 mt-5 md:mt-6">
              Buy Now
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <Image
            src="/office-launge-chair01.jpg"
            width={330}
            height={330}
            alt="Office Lounge Chair"
          />
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            Office Lounge Chair
          </p>
          <p className="text-center mt-4 md:mt-6 text-black font-extrabold">
            PKR: 20,000/-
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 font-bold text-white rounded-lg py-3 px-6 mt-5 md:mt-6">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
