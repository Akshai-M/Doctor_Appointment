import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Layout({ children }) {
    

    const userMenu = [];

    const adminMenu = [];

    const menuToBeRendered = user?.isAdmin ? adminMenu : userMenu;

    return ();
}

export default Layout;

