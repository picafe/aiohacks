
import MainCard from './components/portfolio/MainCard.jsx'
import './Main.css'

export default function Demo() {
  const text = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;
  return <>
    <div className="grid grid-cols-3 grid rows-2 gap-10">
        <MainCard words={text} className={"col-span-2"}/>
    </div>
  </>
}