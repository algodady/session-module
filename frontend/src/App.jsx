import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CreateUser } from './pages/CreateUser';
import { ShowUser } from './pages/ShowUser';
import { EditUser } from './pages/EditUSer';
import { DeleteUser } from './pages/DeleteUser';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user/create' element={<CreateUser />} />
      <Route path='/user/details/:id' element={<ShowUser />} />
      <Route path='/user/edit/:id' element={<EditUser />} />
      <Route path='/user/delete/:id' element={<DeleteUser />} />
    </Routes>
  );
};

export default App;
