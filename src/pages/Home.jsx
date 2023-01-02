import React, { useEffect } from 'react'
import axios from 'axios'

function Home() {
useEffect(() => {
    console.log(axios.get("https://jsonplaceholder.typicode.com/users"))
})
return <h1>Home</h1>
}

export default Home