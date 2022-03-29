import axios from 'axios';

const Registration = () => {
    const createUser = (event) => {
        event.preventDefault();
        const userObject = {
            id: event.target.id.value,
            username: event.target.username.value,
            password: event.target.password.value,
        };
        axios
            .post('/usertable', userObject)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container-fluid text-center">
            <h1 className="mt-3">Registration</h1>
            <form className="form-group" onSubmit={createUser}>
                <b className="subHeading">User Id : </b>
                <input
                    className="form-control d-inline-flex w-50"
                    type="number"
                    name="id"
                    placeholder="Enter Id"
                />
                <br />
                <b className="subHeading">User Name : </b>
                <input
                    className="form-control d-inline-flex w-50"
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                />
                <br />
                <b className="subHeading">Password : </b>
                <input
                    className="form-control d-inline-flex w-50"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                />
                <br />
                <button className="btn btn-outline-primary">
                    <b>Register</b>
                </button>
                <br />
            </form>
        </div>
    );
};
export default Registration;
