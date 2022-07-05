import './App.css';

import face1 from './img/face1.jpg';
import face2 from './img/face2.jpg';
import face3 from './img/face3.jpg';
import userAvatarImg from './img/user-face.jpg';
import logo from './img/logo_logo.svg';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <a href='/' className='logo'>
          <img src={logo} className='logo__img' alt='logo'></img>
        </a>
      </header>
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
                <img src={face3}alt="" className="friend__logo-img" />
              </a>
              <a href="/" className="friend__name">Света</a>
            </div>
          </div>
        </section>
      <main className="main-content">

        <section className="profile">
          <div className="profile__top-banner" />
          <div className="user">
            <a href="/" className="user__avatar">
              <img src={userAvatarImg} alt="" className="user__avatar-img" />
            </a>
            <div className="user__info">
              <p className="user__name">Иван Петров</p>
              <ul className="user__info-list">
                <p className="user__born">Дата рождения: 12 октября</p>
                <p className="user__city">Город: Курск</p>
                <p className="user__education">Образование: шарага</p>
                <p className="user__website">Сайт: нету его</p>
              </ul>
            </div>
          </div>
        </section>
        <section className="posts">
          <form action="" className="post-form">
            <textarea name="news" id="" cols="30" rows="10">Ваши новости...</textarea>
            <button className='post-form__btn'>Отправить</button>
          </form>
          <article className="post">
            <a href="/" className="post__avatar">
              <img src="" alt="" className="post__img" />
            </a>
            <p className="post__text">Тестовое сообщение</p>
            <p className="post__text">Hello world!</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
