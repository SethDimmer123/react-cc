import { useParams } from 'react-router-dom'


function Users() {
    const { id } = useParams()
    // console.log(username)
    return <h1>{id}</h1>
}

export default Users