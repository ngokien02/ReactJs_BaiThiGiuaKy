import { NavLink } from "react-router-dom"

export default function TodoHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
                ReactJs
            </a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/' >
                            Quản lý công việc
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='themcv' >
                            Thêm công việc
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}