
import MainCard from './components/portfolio/MainCard.jsx'
import './Main.css'

import { getUser, useQuery } from 'wasp/client/operations';

export default function PortfolioPage(props) {
  const { data: user, isLoading, error } = useQuery(getUser, { name: props.match.params.name })

  const text = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;
  return <>
    { user && <>
      {user.name}
      <MainCard words={props.match.params.name}/> 
    </>}

    { error && <h1>ERROR!</h1> }
  </>
}