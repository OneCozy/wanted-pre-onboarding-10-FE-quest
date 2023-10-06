import { Route, Routes } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import LoginInfo from '../info/LoginInfo';

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/success" element={<LoginInfo/>}/>
        </Routes>
    )
}

export default AppRoutes;