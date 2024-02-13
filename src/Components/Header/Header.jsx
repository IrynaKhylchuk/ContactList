// scss
import './Header.scss'

// link
import { Link } from "react-router-dom"

// imgs
import logo from '../../assets/imgs/logo.png'

// icons
import SearchIcon from '@mui/icons-material/Search';

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
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header