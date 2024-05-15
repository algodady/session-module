import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from "react-router-dom";

export const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.API_URL}users`)
            .then((response) => {
                setUsers(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/users/edit/${user._id}`}>
                                        <AiOutlineEdit className='text-2xl text-yellow-600' />
                                    </Link>
                                    <Link to={`/users/delete/${user._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-600' />
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
