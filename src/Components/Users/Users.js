import React, { useState } from 'react'

function Users() {

    const initialUser = [{
        "username": "Tassu",
        "email": "tassu@gmail.com",
        "about": "Tassu is naughty boy"
    }];

    // Update User List
    const [list, setList] = useState(initialUser);
    // console.log(list);

    const [user, setUser] = useState({ username: "", email: "", about: "" });

    const handleOnchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleUserClick = () => {
        if (user.username.length > 0 && user.email.length > 0) {
            const newList = list.concat({ username: user.username, email: user.email, about: user.about });
            setList(newList);
            setUser({ username: "", email: "", about: "" });
        }
        else {
            alert("Enter Something");
        }
    }
    return (
        <>
            <div className="columns">
                <div className='column is-half is-offset-one-quarter'>
                    <section className="section">
                        <div className="container">
                            <h1 className="title">Add New User</h1>
                            <div className="field">
                                <label className="label">User Name</label>
                                <div className="control">
                                    <input name='username' value={user.username} className="input" type="text" placeholder="Enter Your Name!" onChange={handleOnchange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input name='email' value={user.email} className="input" type="text" placeholder="Enter Your Email!" onChange={handleOnchange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">About</label>
                                <div className="control">
                                    <textarea className="textarea" name='about' value={user.about} placeholder="Write something about you" onChange={handleOnchange}></textarea>
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button type='button' className="button is-link" onClick={handleUserClick}>Add User</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section className='section'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-half is-offset-one-quarter'>
                            <h1 className='title'>Users List</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th><abbr title="No">No.</abbr></th>
                                        <th><abbr title="User Name">User Name</abbr></th>
                                        <th><abbr title="User Email">Email</abbr></th>
                                        <th><abbr title="About">About</abbr></th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th><abbr title="No">No.</abbr></th>
                                        <th><abbr title="User Name">User Name</abbr></th>
                                        <th><abbr title="User Email">Email</abbr></th>
                                        <th><abbr title="About">About</abbr></th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        {list.length === 0 && <td>No Users to display</td>}
                                    </tr>
                                    {list.map((user, i) => {
                                        return <tr key={i + 1}>
                                            <td>{i + 1}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.about}</td>
                                        </tr>
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Users