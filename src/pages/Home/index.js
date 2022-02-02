import {FiLink} from 'react-icons/fi'
import './home.css'
import { useState } from 'react';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';


export default function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    async function meuLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: link
            })
            
            setData(response.data);
            setShowModal(true);

            setLink('');

        }catch{
            alert("deu algo errado!")
            setLink('');
        }

    }

    return (
        <div className="container-home">
            <div className='border'/>
            
            <div className="logo">
                <img src="/logo.png" alt="Sujeito Link Logo" />
                <h1>SaveLink</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color='#fff' />
                    <input 
                        placeholder='Cole seu link aqui...' 
                        value={link}
                        onChange={ (e) => setLink(e.target.value)}
                    />
                </div>

                <button onClick={meuLink}>Gerar Link</button>
            </div>
            
            <Menu/>

            {showModal && (
                <LinkItem 
                    closeModal={ ()=> setShowModal(false)}
                    content={data}
                />
            )}

        </div>
    )
}