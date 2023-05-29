import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"

export const HomePage = () => {
    const isLoging = useSelector(state => state.Person.isLoggedIn);
    return <div className='container-fluid bg-warning bg-opacity-25 pb-5 pt-5' >{isLoging ?<h1>personal office </h1> :<h1>welcome to this site</h1>}<h1>Не забувайте про донат на ЗСУ посилання можна знайти всюди</h1>
        <Outlet /></div>
}