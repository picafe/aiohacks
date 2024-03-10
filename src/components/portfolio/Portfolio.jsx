import MainCard from "./MainCard.jsx";
import ImageCard from "./ImageCard.jsx";

export default function Portfolio({ user }) {
    return <div className="p-16 w-full grid md:grid-cols-3 grid-cols-1 grid-rows-2 gap-1">
        <MainCard className={"col-span-2"} user={user}/> 
        <ImageCard imgSrc={user.image}/>
    </div>
}