function User({id, name, email, username}) {
    return (
    <div style={{border: `3px solid black`}}>
           <div>{id}</div>
           <div>{name}</div>
           <div>{email}</div>
           <div>{username}</div>
       </div>
    );
}

export default User;