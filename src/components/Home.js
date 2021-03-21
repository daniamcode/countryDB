import React, {useState} from "react";
import './Home.css'
import CharactersQuery from './CharactersQuery';
import Search from './Search';
import { gql, useQuery } from "@apollo/client";

    
const Home = () => {
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

  const [idSmaller, setIdSmaller] = useState(Number.MAX_VALUE)
  const [idGreater, setIdGreater] = useState(0)


  return (
    <>
    <section className="filters">
      <h1>FILTERS</h1>
    <Search setIdSmaller={setIdSmaller} setIdGreater={setIdGreater}/>
      {/* <h3>{`Number of results: ${data?.characters.results.length}`}</h3> */}
    </section>
    <section className="main">
      <CharactersQuery loading={loading} error={error} data={data} idSmaller={idSmaller} idGreater={idGreater}/>
    </section>
    </>
      );
}

export default Home;
