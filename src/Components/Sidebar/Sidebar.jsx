// scss
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <ul>
                    <li>All contacts <span>0</span></li>
                    <li>Work <span>0</span></li>
                    <li>Family <span>0</span></li>
                    <li>Private <span>0</span></li>
                    <li>Friends <span>0</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar