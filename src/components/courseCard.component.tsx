import { cn } from "@/lib/utils";
import { Course } from "@/types/interfeces/common.interface";
import React from "react";

interface CourseCardProps {
  course: Course;
  isActive: boolean;
}
export const CourseCard: React.FC<CourseCardProps> = ({ course, isActive }) => {
  return (
    <div
      className={cn(
        "from-myLightPurple/40 to-myBottomCardGradient shadow-myBg/60 mt-20 flex h-fit w-96 scale-90 select-none flex-col rounded-lg bg-gradient-to-b p-3 opacity-90 text-white/80 shadow-lg duration-300 ease-in-out 2xl:scale-150 2xl:mt-20 ",
        isActive && "mt-10 scale-100 opacity-100",
      )}
    >
      <img
        className="h-56 w-full rounded-lg shadow-inner shadow-black"
        src={`/src/assets/courses/${course.image}`}
        alt="Course Image"
      />
      <h2 className="mb-1 mt-2 text-lg font-semibold">{course.name}</h2>
      
        <p className={cn("mb-2 text-sm font-light text-purple-100/50 duration-300 ease-in-out h-0 opacity-0",isActive&&"opacity-100 h-28")}>
          {course.description}
        </p>
      
      <div className="flex items-center justify-end gap-2 font-bold">
        <h1 className="text-myYellow text-xl">{course.price} DT</h1>
        <h1 className="bg-myYellow text-myBg rounded px-1 py-0.5 font-semibold">
          Per Month
        </h1>
      </div>
    </div>
  );
};
