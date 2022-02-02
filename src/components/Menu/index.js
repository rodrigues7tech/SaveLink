import './menu.css';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href="https://www.linkedin.com/in/rodrigues7/">
                <BsLinkedin color='#fff' size={24} />
            </a>
            <a className='social' href="https://instagram.com/bettynho7">
                <BsInstagram color='#fff' size={24} />
            </a>
            <Link className='menu-item' to="/links">
                Meus Links
            </Link>
        </div>
    )
}