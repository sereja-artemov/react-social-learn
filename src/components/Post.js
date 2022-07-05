import React from "react";

const Post = () => {
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
    )
}

export default Post;