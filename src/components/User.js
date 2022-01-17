import { PropTypes } from "prop-types";
function User({ name, surname, isLoggedIn, friends, adress }) {
    return (
        <>
            <h1>
                {
                    isLoggedIn ? `${name} ${surname}` : 'giriş yapmadınız.'
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
    }).isRequired
};

export default User