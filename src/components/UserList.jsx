import React from "react";
import axios from "axios";

const src = "https://jsonplaceholder.typicode.com/users"

export default function UserList() { 

    const [users, setUsers] = React.useState([]);

    React.useEffect(()=>{
        axios
        .get(src)
        .then(data => {
            setUsers(data.data);
        })
    }, []);


    return (
        <>
            <ul className="homework__user-list"> 
                {users.map(user => {

                    return (

                        <li className="homework__user" key={user.id}>{user.name}</li>
                    
                    )
                    
                })}
            </ul>
        </>
    );

}