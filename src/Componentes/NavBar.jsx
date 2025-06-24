import { CartWidget } from "./CartWidget.jsx"

export function NavBar () {

    return (
        <nav className="navbar"> 
            <h1>E-commerce</h1>
            <ul>
                <li>Inicio</li>
                <li>Sobre Nosotros</li>
                <li>Contáctenos</li>
            </ul>

            <CartWidget />
        </nav>
    )

}