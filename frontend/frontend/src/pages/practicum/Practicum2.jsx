import React,{ useEffect,useState} from "react";
import { Link} from "react-router-dom";

const Practicum2 = () =>{

    const [getcomments,setComments] = useState([]);
    const [getposts,setGetposts] = useState([]);
    
    // comments fetcing function
    const getdatas = async () =>{
        try {
            const res = await fetch ("https://jsonplaceholder.typicode.com/comments");
            const json = await res.json();
            setComments(json);
        }catch (err) {
            console.error("error", err);
        }

    }

    const getpostdatas = async () =>{
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await res.json();
            setGetposts(json)
        }catch(err){
            console.error("error", err);
        }
    }


    useEffect(()=>{
        getdatas(); 
        getpostdatas();
        
    },[getdatas,getpostdatas]);

    return (
        <>
        <h1>Practicum 2 Page</h1>
        <Link to="/">Home</Link>
        {/*comments json placeholder fetching */}
        <h2>Comments fetching</h2>
        <ol>
            {getcomments.map((comments)=>(
                <li key={comments.id}>{comments.name}</li>

            ))}
        </ol>
            {/*posts fetching*/}
        <h2>Posts fetching</h2>
        <ol>
            {getposts.map((posts)=>(
                <li key={posts.id}>{posts.title}</li>
            ))}
        </ol>
        
        
        </>

    );
    };
    export default Practicum2;  