import Link from 'next/link';


const Navbar = () => (


    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="#">BitzPrice</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


//===========================================================================================================================
    // **************************  This is the basic way without bootstrap   *************************************
    // <div>

    //     <ul>
    //         <li><Link href="/"><a>Home</a></Link></li>
    //         <li><Link href="/about"><a>About</a></Link></li>

    //     </ul>



    //     {/* Basic style jsx which only applies style to this components so the style ul, 
    //         li and a tags will only change in this component. "This is a component based css"*/}

    //     <style jsx>{`

    //     ul {
    //         background: #333;
    //         color: #fff;
    //         list-style: none;
    //         display: flex
    //     }
    //     ul li {
    //         font-size: 18px;
    //         margin-right: 20px;
    //     }

    //     ul li a {
    //         color: #fff;
    //         text-decoration: none;
    //     }

    //     `}</style>

    // </div>
);

export default Navbar;