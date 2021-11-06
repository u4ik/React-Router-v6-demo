
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {

    const navigate = useNavigate();

    const goToRandomRoute = () => {
        const routes = ['/welcome', '/about', '/news']
        navigate(routes[Math.floor(Math.random()* routes.length)])
    }

    return (
        <>
            <div style={{ display: 'flex', gap: '1em' }}>

                <Link to='/welcome'>
                    <button>Welcome</button>
                </Link>
                <Link to='/about'>
                    <button>About</button>
                </Link>
                <Link to='/news'>
                    <button>News</button>
                </Link>

            <button onClick={goToRandomRoute}>Go to a Random Route</button>
            </div>

        </>

    )

}
export default Nav;
