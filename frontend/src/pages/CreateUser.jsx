import { useSnackbar } from "notistack";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";


export const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveUser = () => {
        const data = {
            name,
            email,
          };
          setLoading(true);
          axios
            .post(`${process.env.API_URL}register`, data)
            .then(() => {
              setLoading(false);
              enqueueSnackbar('User Created successfully', { variant: 'success' });
              navigate('/');
            })
            .catch((error) => {
              setLoading(false);
              enqueueSnackbar('Error', { variant: 'error' });
              console.log(error);
            });
    }
    return (
        <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create User</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveUser}>
          Save
        </button>
      </div>
    </div>
    )
}