import { PropTypes } from "prop-types";
function User({ name, surname, isLoggedIn, friends }) {
    return (
        <>
            <h1>
                {
                    isLoggedIn ? `${name} ${surname}` : 'giriş yapmadınız.'
                }
            </h1>
            {friends.map((f) => (
                <div key={f.id}>
                    {f.id}- {f.name}
                </div>
            ))}
        </>
    )
}

User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array
};

export default User