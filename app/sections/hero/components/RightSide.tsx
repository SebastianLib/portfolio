import Image from "next/image";

const RightSide = () => {
  return (
    <div className="w-full min-h-[400px] relative">
      <div className="w-[450px] h-[380px] md:w-[950px] md:h-[700px] absolute -right-36 -top-10">
        <Image src="/elipses.svg" fill alt="elipse" />
      </div>
      <div className="w-[250px] h-[320px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px] z-10 absolute -bottom-12 md:bottom-0 left-[50%] 
      translate-x-[-50%] ">
        <Image
          src="/profile.png"
          alt="person"
          fill
          className="object-cover transform scale-x-[-1]"
        />
      </div>
      <div className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] absolute -bottom-60 md:-bottom-72 left-[50%] 
      translate-x-[-50%] ">
        <Image src="/blob.svg" alt="person" fill className="absolute" />
      </div>
    </div>
  );
};

export default RightSide;
