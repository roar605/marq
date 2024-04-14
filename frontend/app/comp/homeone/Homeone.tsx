"use client";

export default function HomeOne() {
  return (
    <div className="flex border-2 border-red-600 h-[90vh] w-full">
      <div className="w-[45vw]">hello</div>
      <div className="w-[55vw] border-2  flex flex-col justify-center">
        <div className="text-6xl font-bold mb-4 font-serif">
          Helping You Think{" "}
        </div>
        <div className="text-6xl font-bold mb-4 font-serif">
          Strategically & Execute
        </div>
        <div className="text-6xl font-bold mb-4 font-serif">Brilliantly.</div>
        <div>
          <div className="mt-2 mb-1 font-semibold text-lg">
            Marqstats is focused on delivering exceptional client service and
            expertise to
          </div>
          <div className="mt-1 mb-1 font-semibold text-lg">
            accelerate progress.{" "}
          </div>
        </div>
        <div>
          <div className="mt-2 mb-1 font-semibold text-lg">
            What’s the result? Transformed experiences, decisive actions and
            long-term value for
          </div>
          <div className="mt-1 font-semibold text-lg">all stakeholders.</div>
        </div>
        <div className="flex mt-7 p-2  rounded-md border-2 border-black bg-black hover:bg-white hover:text-black text-white text-base w-fit">
          LET'S WORK TOGETHER{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 15"
            fill="currentColor"
            className="w-5 h-5 ml-3"
          >
            <path
              fill-rule="evenodd"
              d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}