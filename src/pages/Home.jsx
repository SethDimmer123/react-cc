import React, { useEffect,useState } from 'react'
import axios from 'axios'

function Home() {
    const [users, setUsers] = useState([])

    async function fetchUsers () {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(data)
    }

useEffect(() => {
    setTimeout(() => {
        fetchUsers();
    },500)
}, []);

return (
    <div style={{border: "1px solid black"}}>
    <div>Id</div>
    <div>Name</div>
    <div>Email</div>
    <div>Username</div>
</div>
)
}


export default Home











    {/* {users.length > 0
    ? <h1>{users[0]?.name}</h1>
    : <h1>Loading...</h1>} */}