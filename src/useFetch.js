import { useEffect,useState } from "react";

const useFetch = ( url ) => {
  //const abortCont = new AbortController();
  const  [data,setdata] = useState(null);
  const  [ispending ,setispending] = useState(true);
  const [error,seterror]=useState("");
  useEffect(() =>{
   fetch(url,{})
   .then(res=>{ 
    if(!res.ok) {throw new Error("Resource not found . . .")}
    return res.json()})
   .then(data => {
    setispending(false);
    seterror("")
    setdata(data);})
   .catch((err)=> {
    setispending(false);
    seterror(err.message);
    console.log(err.message)});
},[url]);
    return {data,ispending,error};
}
 
export default useFetch;