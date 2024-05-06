import Image from "next/image";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const Hero = () => {
  return (
    <section id="home" className="pt-28 overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-7xl w-full min-h-[calc(100vh-7rem)] mx-auto px-4">
        <LeftSide />
        <RightSide/>
      </div>
    </section>
  );
};

export default Hero;
