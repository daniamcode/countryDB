import React, {useState} from "react";
import '../styles/Home.css'
import List from '../presentational/List';
import Search from '../presentational/Search';
import { gql, useQuery } from "@apollo/client";
//import resultsNumber from '../../scripts/resultsNumber'

    
const Home = () => {
  const [gender, setGender] = useState("")
  const [status, setStatus] = useState("")
  const [species, setSpecies] = useState("")

  const ListQuery = gql`
  query Gender($gender:String, $status:String, $species:String){
    characters(filter: {gender:$gender, status:$status, species:$species}) {
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

  const { loading, error, data } = useQuery(ListQuery, {
    variables: { gender, status, species },
  });

  return (
    <>
    <section className="filters">
      <h1>FILTERS</h1>
    <Search setGender={setGender} setStatus={setStatus} setSpecies={setSpecies}/>
      <h3>{`Number of results: ${data?.characters?.results.length}`}</h3>
    </section>
    <section className="home__main">
      <List loading={loading} error={error} data={data} />
    </section>
    </>
      );
}

export default Home;
