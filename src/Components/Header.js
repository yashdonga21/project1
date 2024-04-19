import React from 'react'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  d-flex justify-content-between" id="navbarSupportedContent">
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt=""
                                    style={{ width: '100px' }} className='img-fluid py-2 mx-3' />
                                <li className="nav-item" style={{ fontFamily: "monospace" }}>
                                    <a className="nav-link" aria-current="page" href="/Mencard">MEN</a>
                                </li>
                                <li className="nav-item" style={{ fontFamily: "monospace" }}>
                                    <a className="nav-link" href="/Womencard">WOMEN</a>
                                </li>
                                <li className="nav-item" style={{ fontFamily: "monospace" }}>
                                    <a className="nav-link" href="/Kidscard">KIDS</a>
                                </li>
                                <li className="nav-item" style={{ fontFamily: "monospace" }}>
                                    <a className="nav-link" href="/Beautycard">BEAUTY</a>
                                </li>
                            </ul>
                        </div>

                        <div className='d-flex'>
                            <form className="d-flex search-bar">
                                <input className="form-control me-2 rounded-pill sb" style={{ backgroundColor: '#fffded', border: '1px solid black' }} type="search" placeholder="Search AJIO" aria-label="Search" />
                                <button className="btn btn-outline searchlogo"
                                    type="submit" style={{ color: "GrayText", backgroundColor: '#fffded', borderRadius: '20px', border: '1px solid black' }} ><i class="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                            <div className="logo">
                                <a href="/"><lord-icon src="https://cdn.lordicon.com/kthelypq.json" trigger="boomerang">
                                </lord-icon></a>
                                <a href="/Cartpage"><lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="hover">
                                </lord-icon></a>                                
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}