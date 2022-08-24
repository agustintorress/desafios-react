import "../apps/styles.css";

const NavBar = () => {
    return (

        <div className="NavBar">
            <nav>
                <img src="https://cdn.discordapp.com/attachments/852685565316825148/1011984326390452264/OmochaArg.gif" alt="logo" />
                <ul>
                    <li style={{ marginRight: 5 }}>Inicio</li>
                    <li>Productos</li>
                    <li style={{ marginLeft: 5 }}>Soporte</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;