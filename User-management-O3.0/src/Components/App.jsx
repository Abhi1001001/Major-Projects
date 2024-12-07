import AddUser from './AddUser';
import Home from './Home';
import UpdateUser from './UpdateUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserDetail from './UserDetail';
export default function App (){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/update-user/:id' element={<UpdateUser/>} />
            <Route path='/addUser' element={<AddUser/>} />
            <Route path='/view-user' element={<UserDetail/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}