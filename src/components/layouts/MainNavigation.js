import { Link } from 'react-router-dom'

function MainNavigation() {
    return (
        <header>
            <div></div>
            <nav>
                <ul>
                    <li>
                        <Link to='/link'></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;