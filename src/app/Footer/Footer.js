'use client';
import Image from 'next/image';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='f-top'>
                <address className='f-left'>
                    <Image 
                        src="/footer-image/location.png" 
                        alt="Kompaniya manzili" 
                        width={22} 
                        height={25}
                       
                    />
                    <p>123456, г. Тавима, ул. Морская, д. 21</p>
                </address>

                <div className='f-center'>
                    <h1>VISMA</h1>
                </div>

                <div className='f-right'>
                    <div className='call'>
                    <Image 
                        src="/footer-image/call.png" 
                        alt="" 
                        width={25} 
                        height={25}/>
                         <p>+7 (123) 456-67-89</p>
                    </div>
                </div>

                <div className='sms'>
                <Image 
                        src="/footer-image/sms.png" 
                        alt="" 
                        width={25} 
                        height={25}/>
                    <a href="mailto:order@visma.ru">order@visma.ru</a>
                </div>
            </div>

            <div className='f-bottom'>
                <nav className='f-info'>
                    <h3>ИНФОРМАЦИЯ О ЮР. ЛИЦЕ</h3>
                    <ul>
                        <li><a href="#">ОГРН 11111111111111111</a></li>
                        <li><a href="#">ИНН 2222222222222</a></li>
                        <li><a href="#">КПП 3333333333333</a></li>
                        <li><a href="#">ОКПО 44444444444 ОКВЭД 52.24</a></li>
                        <li><a href="#">ОКТМО 5555555555555</a></li>
                    </ul>
                </nav>

                <nav className='zakupki'>
                    <h3>ЗАКУПКИ</h3>
                    <ul>
                        <li><a href="#">Нормативные документы</a></li>
                        <li><a href="#">Закупки на VISMA Order</a></li>
                        <li><a href="#">Закупки на VISMA Tender</a></li>
                    </ul>
                </nav>

                <nav className='auctioner'>
                    <h3>АКЦИОНЕРАМ</h3>
                    <ul>
                        <li><a href="#">Устав VISMA</a></li>
                        <li><a href="#">Свидетельства госрегистрации</a></li>
                        <li><a href="#">Список аффилированных лиц</a></li>
                        <li><a href="#">Информация</a></li>
                        <li><a href="#">Отчеты</a></li>
                    </ul>
                </nav>

                <nav className='kompany'>
                    <h3>О КОМПАНИИ</h3>
                    <ul>
                        <li><a href="#">Порт сегодня</a></li>
                        <li><a href="#">Характеристики порта</a></li>
                        <li><a href="#">История</a></li>
                        <li><a href="#">Дипломы и награды</a></li>
                        <li><a href="#">Транспортная безопасность</a></li>
                        <li><a href="#">Экология</a></li>
                        <li><a href="#">Правовая информация</a></li>
                    </ul>
                </nav>
            </div>

            <div className='text'>
                <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ АО VISMA</p>
            </div>
        </footer>
    );
};

export default Footer;