import { Button } from "@/components/ui/button";

export const HomeSection = () => {
  return (
    <section
      className="relative flex h-svh w-full items-center justify-center text-white"
      id="home"
    >
      {/* blured circle  */}
      <div className="bg-myYellow absolute left-[calc(50%-12rem)] top-[calc(50%-12rem)] h-96 w-96 rounded-full opacity-60 blur-[200px] 2xl:scale-150" ></div>
      {/* hero section  */}
      <div className="relative z-10 flex h-[500px] w-[800px] flex-col items-center justify-center lg:scale-100 2xl:scale-150">
        <h1 className="from-myYellow absolute left-4 top-0 bg-gradient-to-b to-yellow-700 bg-clip-text text-7xl font-bold uppercase text-transparent">
          improve
        </h1>
        <h1 className="absolute left-[275px] top-16 bg-gradient-to-b from-transparent to-white/80 bg-clip-text text-2xl font-bold uppercase text-transparent">
          your
        </h1>
        <h1 className="absolute left-60 top-20 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-7xl font-bold uppercase text-transparent">
          on
        </h1>
        <h1 className="absolute right-[300px] -top-4 bg-gradient-to-b from-transparent to-white/80 bg-clip-text text-2xl font-bold uppercase text-transparent">
          your
        </h1>
        <h1 className="absolute right-32 top-0 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-7xl font-bold uppercase text-transparent">
          skills
        </h1>
        <h1 className="absolute right-48 top-20 bg-gradient-to-b from-myYellow to-yellow-700 bg-clip-text text-7xl font-bold uppercase text-transparent">
          own
        </h1>
        <img src="/src/assets/the man.png" className="h-full" alt="" />
        <p className="absolute bottom-4 text-sm capitalize text-white/60">
          prepare for a better future
        </p>

        <Button
          variant={"outline"}
          className="absolute -bottom-8 border-myYellow text-myYellow hover:bg-myYellow hover:text-myBg bg-transparent uppercase hover:border-transparent"
        >
          register
        </Button>
      </div>
    </section>
  );
};
