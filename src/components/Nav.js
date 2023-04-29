import { Link, NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className='active' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='active' to='/products'>Products</NavLink>
                </li>
                <li>
                    <NavLink className='active' to='/products/3'>Product Details</NavLink>
                </li>
                <li>
                    <NavLink className='active' to='/form-submission'>16 - form submission</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;