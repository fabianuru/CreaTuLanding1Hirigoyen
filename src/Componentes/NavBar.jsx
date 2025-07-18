import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget.jsx"

export function NavBar() {

    return (
        <nav className="navbar">
            <h1>E-commerce</h1>
            <ul>
                <li>
                    <Link to="Home">Home </Link>
                </li>
                <li>
                    <Link to="Productos">Productos </Link>
                </li>
                <li>
                    <Link to="Categorias">Productos por categoría </Link>
                </li>
            </ul>

            <CartWidget />
        </nav>
    )

}