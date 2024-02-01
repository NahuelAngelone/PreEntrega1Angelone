import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return (
        <nav>
            <div>
                <div>EurEk4rds</div>
                <div>
                    <button>Cartas</button>
                    <button>Tins</button>
                    <button>Box</button>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar