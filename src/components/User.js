import { PropTypes } from "prop-types";
function User({ name, surname, isLoggedIn, friends, adress }) {

    if (!isLoggedIn) {
        return <div>Giriş Yapmadınız.</div>
    }

    return (
        <>
            <h1>
                {
                    `${name} ${surname}`
                }
            </h1>
            <h2>
                {adress.title}
                <br />
                {adress.zip}
            </h2>
            {friends && friends.map((f) => (
                <div key={f.id}>
                    {f.id}- {f.name}
                </div>
            ))}
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array.isRequired,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    }).isRequired,

};

User.defaultProps = {
    isLoggedIn: false,
    name: 'yt',
    surname: 'task'

}

export default User