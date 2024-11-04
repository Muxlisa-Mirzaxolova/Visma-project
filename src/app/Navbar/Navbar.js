import './navbar.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="nav-container">
            <Link href="/" passHref>
                <h1 style={{ color: 'gray', cursor: 'pointer' }}>VISMA</h1>
            </Link>

            <Link href="./Company">О компании</Link>
            <Link href="./Uslugi">Услуги</Link>
            <Link href="./Novosti">Новости</Link>
            <Link href="./dogovor">Договор</Link>
            <Link href="./zapros">Запрос</Link>

            <div className='search-box'>
                <Image src="/navbar-image/search.png" alt="Search Icon" width={24} height={24} />
                <input className='search-input' type="text" placeholder='' />
            </div>

            <select style={{ fontSize: '15px' }} className='lang'>
                <option value="en">Eng</option>
                <option value="uz">Uz</option>
                <option value="ru">Rus</option>
            </select>
        </div>
    );
};

export default Navbar;
