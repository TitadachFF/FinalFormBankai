import { useAuthContext } from "../context/AuthContext"

const Profile = () => {
    const { user } = useAuthContext();
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 card profile my-2 light" style={{ width: "500px", borderRadius: "20px" }}>
                    <div className="card-header">
                        Profile
                    </div>
                    <div className="card-body">
                        <div className="card-title h5">{user.username}</div>
                        <div className="card-text">
                            <strong>Token:</strong>
                            {user.accessToken.substring(0, 20)}...
                            {user.accessToken.substring(user.accessToken.length -20)}
                        </div>
                        <div className="card-text">
                            <b>Id:</b> {user.id}
                            <br />
                            <b>Email:</b> {user.email}
                            <br />
                            <b>Roles:</b> ({user.roles.length})
                            <br />
                            <ul>
                                {user.roles &&
                                    user.roles.map((role, index) => <li key={index}>{role}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Profile