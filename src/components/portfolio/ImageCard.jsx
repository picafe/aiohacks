import { cn } from "../../utils/cn";

export default function ImageCard({ imgSrc, className }) {
  return (
    <div className={cn("w-full mx-auto", className)}>
      <div
        style={{ backgroundImage: "url(/public/profilepics/" + imgSrc + ")" }}
        className="
          
          bg-cover 
          relative 
          overflow-hidden 
          h-full 
          rounded-4xl 
          transition 
          duration-200 
          group 
          hover:shadow-xl 
          text-zinc-100 
          m-4 
          p-12
        "
      ></div>
    </div>
  );
}
