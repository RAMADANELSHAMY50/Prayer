import { useEffect, useState } from "react";


export default function State(){
    const [user, setUser]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error ,setError]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
         setUser(data);
          setLoading(false);
        })
        .catch((err) =>{
            setError(err.message);
            setLoading(false);
            })
        },[]);

        if(loading)
            return <p>"loading"</p>
        if(error)
            return <p>"error"</p>
    return(
        <div>
            <h1>user</h1>
            {user.map((users)=>(
                <div key={users.userId}>
                    <p><b>id  </b>{users.id}</p>
                    <p><b>title  </b>{users.title}</p>
                    <p><b>completed  </b>{users.completed ? "✅" : "❌"}</p>
                </div>
            ))}
            
        </div>
    );
}