import React, { useState } from "react";
import "../styles/Home.css";
import List from "../presentational/List";
import Search from "../presentational/Search";
import { useQuery } from "@apollo/client";
//import resultsNumber from '../../scripts/resultsNumber'


const Home = ({ listQuery }) => {
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");

  const { loading, error, data } = useQuery(listQuery, {
    variables: { gender, status, species },
  });

  return (
    <>
      <section className="filters">
        <h1>FILTERS</h1>
        <Search
          setGender={setGender}
          setStatus={setStatus}
          setSpecies={setSpecies}
        />
        <h3>{`Number of results: ${data?.characters?.results.length}`}</h3>
      </section>
      <section className="home__main">
        <List loading={loading} error={error} data={data} />
      </section>
    </>
  );
};

export default Home;
