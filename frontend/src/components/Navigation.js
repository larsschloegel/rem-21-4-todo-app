import {Link} from "react-router-dom";

export default function Navigation(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Do">Do</Link>
                </li>
                <li>
                    <Link to="/Doing">Doing</Link>
                </li>
                <li>
                    <Link to="/Done">Done</Link>
                </li>
            </ul>
        </nav>
    )
}