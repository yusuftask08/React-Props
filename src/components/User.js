function User(props) {
    console.log('props :>> ', props);
    return (
        <div>
            <h1>
                {
                    props.isLoggedIn ? `${props.name} ${props.surname}` : 'giriş yapmadınız.'
                }
            </h1>

        </div>
    )
}
export default User