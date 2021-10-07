import {Link} from "react-router-dom";

export default function Navigation(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">All To-Do's</Link>
                </li>
                <li>
                    <Link to="/To-Do">To-Do</Link>
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