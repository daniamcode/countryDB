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
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(listQuery, {
    variables: { gender, status, species, page },
  });

  const onPaginate = (event) => {
    event.preventDefault();
    switch (event.target.value) {
      case "first":
        setPage(1);
        break;
      case "previous":
        setPage(data?.characters?.info?.prev);
        break;
      case "next":
        setPage(data?.characters?.info?.next);
        break;
      case "last":
        setPage(data?.characters?.info?.pages);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section className="filters">
        <h1>FILTERS</h1>
        <Search setGender={setGender} setStatus={setStatus} setSpecies={setSpecies} />
        <h3>{`Number of results: ${data?.characters?.results.length}`}</h3>
      </section>
      <section className="home__main">
        <List loading={loading} error={error} data={data} />
      </section>
      <section className="pagination">
        {data?.characters?.info?.prev && (
          <>
            <button value="first" onClick={onPaginate}>
              First
            </button>
            <button value="previous" onClick={onPaginate}>
              Previous
            </button>
          </>
        )}
        Page {page} of {data?.characters?.info?.pages}
        {data?.characters?.info?.next && (
          <>
            <button value="next" onClick={onPaginate}>
              Next
            </button>
            <button value="last" onClick={onPaginate}>
              Last
            </button>
          </>
        )}
      </section>
    </>
  );
};

export default Home;
