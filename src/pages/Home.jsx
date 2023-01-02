import React, { useEffect,useState } from 'react'
import axios from 'axios'

function Home() {
    const [users, setUsers] = useState([])

    async function fetchUsers () {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(data)
    console.log(data)
    }

useEffect(() => {
    setTimeout(() => {
        fetchUsers();
    },500)
}, []);

const pixels = "3px"

return (
    <div>
    {users.map((user) => {
            return (  
         <div style={{border: `${pixels} solid black`}}>
            <div>{user?.id}</div>
            <div>{user?.name}</div>
            <div>{user?.email}</div>
            <div>{user?.username}</div>
        </div>
            );
        })}
        </div>

)
}


export default Home











    // {/* {users.length > 0
    // ? <h1>{users[0]?.name}</h1>
    // : <h1>Loading...</h1>} */}