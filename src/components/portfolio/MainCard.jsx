import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";
import aa from "./samplepfp.jpg";


export default function MainCard({
  className,
}) {
  const [scope, animate] = useAnimate();
  let wordsArray = blogContent.description.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
            >
              {word + " "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
  
  return (
    <div className={cn("w-full mx-auto", className)}>
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:shadow-xl border border-zinc-100">
          <div className="overflow-visible p-4">
            <div className="flex">
              <img src={aa} alt="dead" className="size-10 rounded-full">
              </img>
              <h2 className="font-bold my-4 text-lg text-zinc-700">
                {blogContent.greeting}
              </h2>
            </div>
            <h1 className="italic text-4xl text-zinc-700">
              {blogContent.header}
            </h1>
            <p className="font-normal my-4 text-sm text-zinc-500">
              {renderWords()}
            </p>
          </div>
        </div>
    </div>
  );
}

const blogContent = {
  greeting: "Hi!",
  header: "I code sometimes!",
  description: "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows",
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  image: "/demo/thumbnail.png",
  authorAvatar: "/manu.png",
};

// const TitleComponent = ({
//   title,
//   avatar,
// }) => (
//   <div className="flex space-x-2 items-center">
//     <img
//       src={avatar}
//       height="20"
//       width="20"
//       alt="thumbnail"
//       className="rounded-full border-2 border-white"
//     />
//     <p>{title}</p>
//   </div>
// );
