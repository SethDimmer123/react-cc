import React, { useEffect } from 'react'
import axios from 'axios'

function Home() {
    async function main () {
    console.log(await axios.get("https://jsonplaceholder.typicode.com/users"))
    }

useEffect(() => {
main();
}, []);
return <h1>Home</h1>
}

export default Home