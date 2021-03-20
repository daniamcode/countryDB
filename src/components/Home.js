import React, {useState} from "react";
import './Home.css'
import CharactersQuery from './CharactersQuery';
import Search from './Search';
import { gql, useQuery } from "@apollo/client";

    
function App() {
  const CHQuery = gql`
  {
    characters {
      results {
        id
        name
        gender
        image
        status
        species
      }
    }
  }
`;

  const { loading, error, data } = useQuery(CHQuery);

  const [areaSmaller, setAreaSmaller] = useState(Number.MAX_VALUE)
  const [areaGreater, setAreaGreater] = useState(0)

  
  
  // data?.characters.results.map((character) => {
  //   let i = 0;
  //   if(parseInt(character.id) < areaSmaller && 
  //     parseInt(character.id) > areaGreater) i++
  //   return i
  // })
  return (
    <>
    <section className="filters">
      <h1>FILTERS</h1>
    <Search setAreaSmaller={setAreaSmaller} setAreaGreater={setAreaGreater}/>
      <h3>{`Number of results: ${data?.characters.results.length}`}</h3>
    </section>
    <section className="main">
      <CharactersQuery loading={loading} error={error} data={data} areaSmaller={areaSmaller} areaGreater={areaGreater}/>
    </section>
    </>
      );
}

export default App;
