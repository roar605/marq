import {
  HomeOne,
  NavBar,
  Footer,
  Slid,
  Vision,
  Homefive,
  Homefour,
  Homesix,
  Homethree,
  Work,
  Blogs,
} from "./comp";

import img1 from "../public/images/img1.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col w-dvw">
      <div className="min-h-dvh w-dvw ">
        {/* <div className="relative w-dvw">
          <div className="absolute top-0 left-0 z-0">
            <Image
              src={img1}
              alt=""
              className="object-fill h-dvh w-dvw brightness-[0.5]"
            />
          </div>
        </div> */}

        <div className="bg-[url('/images/img11.jpg')]">
          <NavBar />
          <HomeOne />
        </div>
      </div>
      <div className="">
        <Work />

        <Homethree />
        <Vision />
        <div className="">
          <Homefour />
        </div>
        {/* <Blogs/> */}
        <Slid />
        <Homefive />
        <Homesix />

        <Footer />
      </div>
    </div>
  );
}
