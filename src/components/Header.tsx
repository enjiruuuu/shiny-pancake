import '../styles/header.css';
import Logo from "./Logo";
import Navigator from "../helpers/Navigator";

const Header = () => {
    const navigator: Navigator = new Navigator();

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