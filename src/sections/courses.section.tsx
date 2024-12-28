import { CourseCarousel } from "@/components/carousel.component";



export const CoursesSection = ()=>{
    return (
      <section
        className="relative flex h-svh w-full flex-col items-center justify-center"
        id="courses"
      >
        {/* blured circle  */}
        <div className="bg-myLightPurple absolute h-96 w-96 rounded-full opacity-60 blur-[200px] 2xl:scale-150"></div>
        <h1 className="absolute top-16 text-center text-3xl font-bold text-white 2xl:top-14 2xl:scale-150">
          Discover Our Courses
        </h1>
        <p className="absolute top-28 w-[500px] text-center text-sm text-white/30 2xl:top-32 2xl:scale-150">
          Boost your skills with expert-led courses in web development, AI,
          business intelligence, and more. Learn at your pace and shape your
          future!
        </p>
        {/* course carousel */}
        <div className="relative top-10 flex h-[550px] w-full overflow-hidden bg-red-400/0 2xl:top-28 2xl:h-[900px]">
          {/* let edge hider */}
          <div className="from-myBg absolute z-40 h-full w-40 bg-gradient-to-r to-transparent 2xl:w-44"></div>
          {/* let edge hider */}
          <div className="from-myBg absolute right-0 z-40 h-full w-40 bg-gradient-to-l to-transparent 2xl:w-44"></div>

          <CourseCarousel />
        </div>
      </section>
    );
}