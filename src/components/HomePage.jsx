import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"
import "./style.css"
export const HomePage = () => {
    const isLoging = useSelector(state => state.Person.isLoggedIn);
    return<div> <div className="hero_container" >{isLoging ?<p className='hero_text'>Ви у своєму персональному кабінеті</p> :<p className='hero_text'>Вітаю в онлайн школі </p>}<p className='hero_massage'>Не забувайте про донат на ЗСУ посилання на <a href="https://savelife.in.ua/"> Фонд Повернись живим</a></p>
    
        <Outlet /></div>
        </div>
}