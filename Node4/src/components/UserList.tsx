import React from 'react';

import { Link } from 'react-router-dom';

interface User {

    id: number;

    CAMERA_ID: number;

    CAM_DESC: string;

    TYPE: string;

    LATITUDE: number;

    LONGITUDE: number;

}

interface UserListProps {

    users: User[];

    name: string;

}

const UserList: React.FC<UserListProps> = ({ users }) => {

    return (

        <>

            <section>

                    <section>

                        <h1>Miles Griffith</h1>

                        <h1>Camera List</h1>

                    </section>

                    <section>

                        <table>

                            <thead>

                                <tr>

                                    <th>Camera ID</th>

                                    <th>Camera Type</th>

                                    <th>Latitude</th>

                                    <th>Longitude</th>

                                    <th></th>

                                </tr>

                            </thead>

                            <tbody>

                                {users.map((user) => (

                                    <tr key={user.id}>

                                        <td>

                                          <p>{user.CAMERA_ID}</p>

                                        </td>

                                        <td>

                                          <p>{user.TYPE}</p>

                                        </td>

                                        <td>

                                            <p>{user.LATITUDE}</p>

                                        </td>

                                        <td>

                                            <p>{user.LONGITUDE}</p>

                                        </td>

                                        <td>

                                            <Link to={`/users/${user.id}`}>

                                                <button>

                                                    View full details

                                                </button>

                                            </Link>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </section>

            </section>

        </>

    );

};

export default UserList;