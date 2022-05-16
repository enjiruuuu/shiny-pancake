import '../styles/header.css';
import Logo from "./Logo";
import NavigationHelper from '../helpers/Navigator';

const Header = () => {
    const navigator: NavigationHelper = new NavigationHelper();

    function logout() {
        navigator.logout();
    }

    return (
        <header>
            <Logo></Logo>
            <button className="secondary" onClick={logout}>Logout</button>
        </header>
    );
}

export default Header;