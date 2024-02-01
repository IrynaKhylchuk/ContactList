import { Link } from "react-router-dom"

//css
import './Header.scss'

//imgs
import logo from '../../assets/imgs/logo.png'

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src={logo} alt="logo" />
                <Link className="navbar-brand active" to='/'>
                    Contact List
                </Link>
            </div>
            <div className="add-search">
                <Link className="navbar-brand" to='/new-contact'>
                    Add New
                </Link>
                <div className="searchBox">
                    <input className="searchInput" type="text" name="search" placeholder="Search" />
                    <button className="searchButton">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header