// scss
import './Header.scss'

// link
import { Link } from "react-router-dom"

// imgs
import logo from '../../assets/imgs/logo.png'

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <div className="container-fluid topnav">
            <nav className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <Link className="font-bold" to='/'>
                        Contact List
                    </Link>
                </div>
                <div className="add-search">
                    <Link to='/new-contact'>
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
        </div>
    )
}

export default Header