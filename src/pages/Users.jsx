import { useParams } from 'react-router-dom'


function Users() {
    const { username } = useParams()
    console.log(username)
    return <h1>Users</h1>
}

export default Users