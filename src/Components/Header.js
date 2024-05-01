import React from 'react'
import { useUser } from './Login/Usercontext'

export default function Header() {
    const { user } = useUser();
    const userName = user.name || "User";
    const isLoggedIn = !!user.name;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ fontSize: "25px", letterSpacing: "4px", color: "2c4152", fontWeight: 'bold' }}>Ajio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Mencard">MEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Womencard">WOMEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Kidscard">KIDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Beautycard">BEAUTY</a>
                            </li>
                        </ul>

                        <div className='mt-2' style={{ marginRight: "20px" }}>
                            <a href="/Cartpage" className='p-1'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/evyuuwna.json"
                                    trigger="hover"
                                    style={{ height: "30px", width: "30px" }}>
                                </lord-icon>
                            </a>

                            <a href="/Login">
                                <lord-icon
                                    src="https://cdn.lordicon.com/kthelypq.json"
                                    trigger="hover"
                                    style={{ height: "30px", width: "30px" }}>
                                </lord-icon>
                                {isLoggedIn ? (
                                    <span>{userName}</span>
                                ) : (
                                    <span></span>
                                )}
                            </a>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2 rounded-pill" type="search" placeholder="Search AJIO" aria-label="Search" style={{ backgroundColor: '#fffded', border: '1px solid black' }} />
                            <button className="btn  rounded-pill" type="submit"
                                style={{ color: "GrayText", backgroundColor: '#fffded', borderRadius: '20px', border: '1px solid black' }}><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}