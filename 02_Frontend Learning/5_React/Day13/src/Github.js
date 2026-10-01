import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Github(){
     
    // it catch the data from github:user_name;
    // it return the object which has user_name properties
    const {name} = useParams();
    const [Profile, setProfile] = useState(null);
    
    async function fetchuser() {
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setProfile(data);
    }

    useEffect(()=>{
      fetchuser();
    },[])


    return(
        <>
        <h1>My GitHub Profile</h1>
        {/* Display the user data */}
        <div className="card">
            <img src={Profile?.avatar_url}></img>
            <h2>{Profile?.login}</h2>
            <a href={Profile?.html_url} target="_blank" >Visit Profile</a>
        </div>
        </>
    )
}