import { Link } from "react-router-dom"
import './Header.scss'

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand active" to='/'>
                                    Contact List
                                </Link>
                                <Link className="navbar-brand" to='/new-contact'>
                                    Add New
                                </Link>
                            </div>
                            <div className="navbar-form navbar-right">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header