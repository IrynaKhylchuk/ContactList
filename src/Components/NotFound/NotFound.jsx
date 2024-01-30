import { Link } from "react-router-dom"
import './NotFound.scss'
import loadImg from '../../assets/imgs/giphy.gif'

const NotFound = () => {
    return (
        <div className="container notFound">
            <div className="row">
                <div className="col-5">
                    <img src={loadImg} alt="load" />
                </div>
                <div className="col-7">
                    <h1>404</h1>
                    <h2>not found</h2>
                    <span>Ніколи такого не було і ось знову</span>
                    <Link className="back" to='/'>
                Back
            </Link>
                </div>
            </div>
            
        </div>
    )
}

export default NotFound