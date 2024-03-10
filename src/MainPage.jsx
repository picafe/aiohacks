import './Main.css'
import { TextGenerateEffect } from "./components/text-generate-effect";

const words = `A portfolio like no other`;



export default function MainPage(props) {
  return <>
  <div className='text-center'>
    <h2 className='py-3 text-2xl'>A </h2>
    <h1 className='text-transparent text-4xl font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text'> PORTFOLIO </h1>
  
    <h2 className='py-3 text-2xl '> UNLIKE ANY OTHER </h2>
  </div>
  </>
}
