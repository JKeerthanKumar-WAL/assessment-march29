import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [status, setStatus] = useState(0);
    const [show, setShow] = useState([]);
    const checkLogin = (event) => {
        event.preventDefault();
        axios
            .get(
                `/usertable/checklogin/${event.target.username.value}/${event.target.password.value}`
            )
            .then((res) => {
                setStatus(res.data.status);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const showCurrentUserDetails = () => {
        axios
            .get('/usertable/loggeduser')
            .then((res) => {
                setShow(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(show);
    };
    return (
        <div className="container-fluid text-center">
            <h1>Log In</h1>
            <form className="form-group" onSubmit={checkLogin}>
                <b className="subHeading">User Name : </b>
                <input
                    className="form-control d-inline-flex w-50"
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                />
                <br />
                <b className="subHeading">Password: </b>
                <input
                    className="form-control d-inline-flex w-50"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                />
                <br />
                <button className="btn btn-outline-primary">
                    <b>Login</b>
                </button>
            </form>
            <button
                className="btn btn-outline-secondary"
                onClick={showCurrentUserDetails}
            >
                <b>View Details</b>
            </button>
            {!status ? (
                ''
            ) : (
                <div>
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Date_of_creation</th>
                        </tr>
                        <tr>
                            <td>{show.id}</td>
                        </tr>
                        {/* {show.map((val) => {
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.username}</td>
                                <td>{val.password}</td>
                                <td>{val.date_of_creation}</td>
                            </tr>;
                        })} */}
                    </table>
                </div>
            )}
        </div>
    );
};
export default Login;
