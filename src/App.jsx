import "./App.css";

function Navbar() {
    return (
        <nav className="navbar ps-2 pe-2 shadow">
            <div className="navbar-brand d-flex align-items-center border-white">
                <p className="letter-title fs-3">T</p>
                <p className="letter-subtitle">iago</p>
                <p className="letter-title fs-3">L</p>
                <p className="letter-subtitle">ima</p>
            </div>
            <ul className="navbar-nav flex-row gap-2">
                <li className="nav-item">
                    <a className="nav-link active text-white fs-5 pe-2" href="#">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fs-5 pe-2" href="#">
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
    );
}

function App() {
    return (
        <>
            <Navbar />
            <main>
                <section className="d-flex">
                    <div className="left"></div>
                    <div className="right"></div>
                </section>
            </main>
        </>
    );
}

export default App;
