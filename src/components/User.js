import { PropTypes } from "prop-types";
function User({ name, surname, isLoggedIn, friends }) {
    return (
        <>
            <h1>
                {
                    isLoggedIn ? `${name} ${surname}` : 'giriş yapmadınız.'
                }
            </h1>
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
    friends: PropTypes.array.isRequired
};

export default User