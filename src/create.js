import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title ,settitle]=useState("");
    const [body, setbody]=useState("");
    const[isPending,setisPending] = useState(false)
    const [author, setauthor]=useState("");
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog ={title,body,author};
        setisPending(true)
        fetch("http://localhost:8000/blogs",{
            method : "POST",
            headers:{'Content-Type' :" application/json"},
            body:JSON.stringify(blog)
    }).then(()=>
        {setisPending(false);
            history.push("/")
        }
    )
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" value ={title} onChange={(e) => settitle(e.target.value)}required></input>
                <label>Blog body:</label>
                <textarea value = {body}onChange={(e) => setbody(e.target.value)}required ></textarea>
                <label> Blog author:</label>
                <select value={author} onChange={(e) => setauthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>


                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;