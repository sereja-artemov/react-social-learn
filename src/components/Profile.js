import React from "react";
import userAvatarImg from "../img/user-face.jpg";

<<<<<<< HEAD
const Profile = () => {
=======
function Profile() {
>>>>>>> 137a7c777bbeeea48c808f967a4074d68dce769e
    return (
        <section className="profile">
            <div className="profile__top-banner" />
            <div className="user">
                <a href="/" className="user__avatar">
                    <img src={userAvatarImg} alt="" className="user__avatar-img" />
                </a>
                <div className="user__info">
                    <p className="user__name">Иван Петров</p>
                    <ul className="user__info-list">
                        <li className="user__info-list-item"><span className='user__info-item-title'>Дата рождения:</span> 12 октября</li>
                        <li className="user__info-list-item"><span className='user__info-item-title'>Город:</span> Курск</li>
                        <li className="user__info-list-item"><span className='user__info-item-title'>Образование:</span> шарага</li>
                        <li className="user__info-list-item"><span className='user__info-item-title'>Сайт:</span> нету его</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Profile;