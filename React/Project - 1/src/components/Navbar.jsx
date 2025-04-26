const Navbar = () => {

    return (
    <nav>

        {/* LOGO */}
        <div className='logo'>
            <img src="/Images Project - 1/brand_logo.png" alt="Logo" />
        </div>

        {/* LIST */}
        <div>
            <ul className='navList'>
                <li href="#" >MENU</li>
                <li href="#" >LOCATION</li>
                <li href="#" >ABOUT</li>
                <li href="#" >CONTACT</li>
            </ul>
        </div>

        {/* Button */}
        <div >
            <button className='loginBtn' >Login</button>
        </div>
    </nav>
    );
};

export default Navbar;