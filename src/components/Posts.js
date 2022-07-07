import React from "react";
import Post from "./Post";
import palataAvatar from '../img/palata_avatar.jpeg'
import catAvatar from '../img/cat-avatar.png'

const Posts = () => {
    return (
        <section className="posts">
            <form action="" className="post-form">
                <textarea className='post-form__textarea' name="news" id="" cols="30" rows="10">Ваши новости...</textarea>
                <button type='submit' className='post-form__btn'>Отправить</button>
            </form>
            <Post avatar={palataAvatar} likes={1} message='Курлык курлык курлык' />
            <Post avatar={catAvatar} likes={0} message='Олег, проект пока не начинал. Не могу войти в состояние потока, сейчас не в ресурсе, и всё тут. Вы поймите, много незакрытых гештальтов, и я, конечно, Вселенной посылаю запросы, жду инсайта, но пока глухо. Скоро буду проходить марафон продуктивности, получу от тренера персональную карту желаний, потом на психологические расстановки схожу, а там, глядишь, и из зоны комфорта смогу выйти. Вы не подумайте, что я без дела сижу: визуализировать свои цели тоже труд, это какая концентрация нужна... Такие дела, Олег. Я временно буду игнорить вас, чтобы не выгореть из-за токсичных вайбов. Я стараюсь полюбить себя и взять ответственность за свою жизнь, а вы нарушаете мои личные границы, Олег. Впредь готов отвечать лишь на экологично поданные запросы от вас.' />
        </section>
    )
}

export default Posts;