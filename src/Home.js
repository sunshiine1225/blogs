//import { useState} from "react";
import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data, ispending,error} = useFetch("http://localhost:8000/blogs")
  return (
    <div className="Home">
    {(error.length >0  && <h2>{error}</h2>) }
    {(ispending && <h2> Loading . . . </h2>)}
    {error.length === 0 && !ispending && <Bloglist blogs={data} title="All Blogs!"></Bloglist>}
    </div>
  );
};

export default Home;
