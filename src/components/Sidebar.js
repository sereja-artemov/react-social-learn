import React from "react";
import face1 from "../img/face1.jpg";
import face2 from "../img/face2.jpg";
import face3 from "../img/face3.jpg";

function Sidebar() {
    return (
        <section className='sidebar'>
            <ul className='sidebar__menu'>
                <li className='sidebar__menu-list-item'>
                    <a href='/' className='sidebar__menu-link'>Профиль</a>
                </li>
                <li className='sidebar__menu-list-item'>
                    <a href='/' className='sidebar__menu-link'>Сообщения</a>
                </li>
                <li className='sidebar__menu-list-item'>
                    <a href='/' className='sidebar__menu-link'>Новости</a>
                </li>
                <li className='sidebar__menu-list-item'>
                    <a href='/' className='sidebar__menu-link'>Музыка</a>
                </li>
            </ul>

            <a href='/' className='sidebar__settings'>Настройки</a>

            <div className="friend">
                <div className="friend__item">
                    <a href="/" className="friend__logo">
                        <img src={face1} alt="" className="friend__logo-img" />
                    </a>
                    <a href="/" className="friend__name">Андрей</a>
                </div>
                <div className="friend__item">
                    <a href="/" className="friend__logo">
                        <img src={face2} alt="" className="friend__logo-img" />
                    </a>
                    <a href="/" className="friend__name">Саша</a>
                </div>
                <div className="friend__item">
                    <a href="/" className="friend__logo">
                        <img src={face3} alt="" className="friend__logo-img" />
                    </a>
                    <a href="/" className="friend__name">Света</a>
                </div>
            </div>
        </section>
    )
}

export default Sidebar;