function User(props) {
    console.log('props :>> ', props);
    return (
        <>
            <h1>
                {
                    props.isLoggedIn ? `${props.name} ${props.surname}` : 'giriş yapmadınız.'
                }
            </h1>
            {props.friends.map((f) => (
                <div key={f.id}>
                    {f.div}- {f.name}
                </div>
            ))}
        </>
    )
}
export default User