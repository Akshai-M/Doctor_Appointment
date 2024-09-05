import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Layout({ children }) {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.user);
    const location = useLocation();

    const handleLogout = () => {
        localStorage.clear()
        navigate('/signin')
    }

    const userMenu = [];

    const adminMenu = [
        {
            name: "Home",
            link: "/home"
        },
        {
            name: "Appointments",
            link: "/appointments"
        },
        {
            name: "Doctors",
            link: "/doctors"
        },
        {
            name: "Profile",
            link: "/profile"
        }
    ];

    const menuToBeRendered = user?.isAdmin ? adminMenu : userMenu;

    return ();
}

export default Layout;

