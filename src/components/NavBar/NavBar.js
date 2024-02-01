
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Navbar-container">
                <div className="Navbar-logo">EurEk4rds</div>
                <div className="Navbar-buttons">
                    <button>Cartas</button>
                    <button>Tins</button>
                    <button>Box</button>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar