import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

const cardbg = "/public/main-card-bg.png"

import Meteors from "../Meteors.jsx";


export default function MainCard({ className, user }) {
    const [scope, animate] = useAnimate();
    let wordsArray = user.description.split(" ");
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

    console.log(user)

    return (
        <div className={cn("w-full mx-auto", className)}>
            <div className="main-card bg-[#131311] bg-cover relative overflow-hidden h-full rounded-4xl transition duration-200 group hover:shadow-xl text-zinc-100 m-4 p-12">
                <img src={cardbg} alt="Card hello background" className="main-card-bg" />
                <div className="overflow-visible p-4">
                    <Meteors />
                    <div className='group flex flex-row items-center my-auto'>
                        <div
                            style={{ backgroundImage: "url(/public/profilepics/" + user.image + ")" }}
                            className='size-14 block flex-shrink-0 m-4 bg-cover rounded-full bg-center'
                        />
                        <div className='group block text-left'>
                            <h5 className=' text-lg font-semibold text-gray-200'>
                                {user.greeting}
                            </h5>
                                <p className='text-sm text-gray-500'>
                                    {user.subtitle}
                                </p>
                        </div>
                        
                    </div>

                    <h1 className="text-4xl">
                        {user.header}
                    </h1>
                    <div className="font-normal my-4 text-sm leading-6">
                        {renderWords()}
                    </div>
                </div>
            </div>
        </div>
    );
}

// const blogContent = {
//     greeting: "Hi!",
//     header: "I code sometimes!",
//     description: "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows",
//     slug: "amazing-tailwindcss-grid-layouts",
//     image: "/demo/thumbnail.png",
// };