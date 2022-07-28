import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {

    const {id} = useParams();
    const history = useHistory();
    const { data:blog,error,ispending} = useFetch("http://localhost:8000/blogs/"+id);
    const handleClick =() =>{
        fetch("http://localhost:8000/blogs/"+id ,{method: "DELETE"})
        .then(()=>
       { history.push("/");}
        )
    }
    return ( 
        <div className="blog-details">
            {ispending && <div>Loading . . .</div>}
            {error && <div>{error}</div>}
            {blog && (
                <><article>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author}</p>
                    <div>{blog.body} </div>
                    <button onClick={handleClick}>delete</button>
                </article></>
            )}
            </div>
     );
}
 
export default Blogdetails;
