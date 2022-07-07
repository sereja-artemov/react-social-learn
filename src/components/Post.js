import React from "react";

<<<<<<< HEAD
const Post = ({avatar, message, likes}) => {
    return (
        <article className="post">
            <a href='/' className="post__avatar">
                <img src={avatar} alt="" className="post__image" />
            </a>
            <p className="post__text">{message}</p>
            <span className="post__likes">{likes}</span>
        </article>
=======
function Post() {
    return (
        <section className="posts">
            <form action="" className="post-form">
                <textarea className='post-form__textarea' name="news" id="" cols="30" rows="10">Ваши новости...</textarea>
                <button type='submit' className='post-form__btn'>Отправить</button>
            </form>
            <article className="post">
                <a href="/" className="post__avatar">
                    <img src="" alt="" className="post__img" />
                </a>
                <p className="post__text">Тестовое сообщение</p>
            </article>
        </section>
>>>>>>> 137a7c777bbeeea48c808f967a4074d68dce769e
    )
}

export default Post;