const Hero = () => {
  return (
    <section className="mt-28">
      <div className="flex flex-col md:flex-row max-w-7xl w-full min-h-[calc(100vh-7rem)] mx-auto">
        <div className="w-full">
          <div className="flex h-full flex-col justify-center">
            <div>
              <p className="capitalize text-4xl text-white">
                frontend developer
              </p>
              <h2 className="capitalize text-7xl font-semibold text-transparent bg-clip-text
              bg-gradient-to-l from-blue-500 to-purple-500">
                Sebastian <br />
                Lib
              </h2>
            </div>
            <div className="mt-20 border-l-[6px] border-l-neutral-500">
              <p className="pl-3 text-neutral-500 text-xl max-w-sm">
                Self-taught frontend developer passionate about continuous
                learning and innovative web design.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </section>
  );
};

export default Hero;
