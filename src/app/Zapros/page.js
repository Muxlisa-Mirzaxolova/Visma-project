"use client"

import './zapros.css';
import Image from 'next/image';

const Zapros = () => {
    return (
        <div className="zapros-container">
            <h1>Запрос ставки и условий погрузочно-разгрузочных работ</h1>

            <div className="form-container">
                <div className="left-form">
                    <form action="">
                        <label htmlFor="">Наименование груза *</label>
                        <input type="text" />
                        <label htmlFor="">Eд. измерения *</label>
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        <label htmlFor="">Пункт назначения перевозки</label>
                        <input type="text" />
                        <label htmlFor="">Груз поступает в порт</label>
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        <label htmlFor="">Размер судовой партии</label>
                        <input type="text" />
                        <label htmlFor="">Дополнительная информация о грузе:</label>
                        <textarea ></textarea>
                    </form>
                </div>

                <div className="right-form">
                    <form action="">
                        <label htmlFor="">Размер партии *</label>
                        <input type="text" />

                        <label htmlFor="">Направление перевозки *</label>
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>

                        <label htmlFor="">Направление перевозки *</label>
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>

                        <label htmlFor="">Направление перевозки *</label>
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>

                        <label htmlFor="">Опасность груза (класс)</label>
                        <input type="text" />

                        <label style={{
                            display: 'inline-block',
                            width: '150px',
                            height: '35px',
                            backgroundColor: '#5DB7DE',
                            color: 'white',
                            textAlign: 'center',
                            lineHeight: '35px',  // Bu height bilan bir xil bo'lishi kerak
                            cursor: 'pointer',
                            borderRadius: '10px',
                        }}>
                            Файл не выбран
                            <input type="file" style={{ display: 'none' }} />
                        </label>

                    </form>
                </div>
            </div>

            {/* ----------------------------------------- */}


            <div className="prosim">
                <h2 style={{ fontSize: '27px', marginTop: '60px' }}>Просим сообщить:</h2>
                <form>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" />
                        <span style={{ marginLeft: '8px' }}>Ставку ПРР</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" />
                        <span style={{ marginLeft: '8px' }}>Срок технологического накопления груза</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" />
                        <span style={{ marginLeft: '8px' }}>Ставку хранения груза сверх срока технологического накопления</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" />
                        <span style={{ marginLeft: '8px' }}>Возможность приёма и перевалки груза в указанные сроки</span>
                    </label>
                </form>

            </div>

            {/* ----------------------------------------- */}

            <div className="inform-form-container">
                <h1 style={{marginTop: '60px'}}>Информация для обратной связи:</h1>

                <div className="inform-form">
                    <div className="inform-form-left">
                        <form className='form-about' action="" style={{ display: 'flex' }}>
                            <label style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} htmlFor="">Имя, фамилия
                                <input type="text" />
                            </label>

                            <label style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} htmlFor="">Номер телефона/факса
                                <input type="text" />
                            </label>
                        </form>

                    </div>

                    <div className="inform-form-right">
                        <form action="" style={{ display: 'flex' }}>
                            <label style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} htmlFor="">Название компании *
                                <input type="text" />
                            </label>

                            <label style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} htmlFor="">Адрес эл. почты *
                                <input type="text" />
                            </label>
                        </form>

                    </div>
                </div>
            </div>

            {/* ----------------------------------------- */}

                        <div className="send">
                        <h2>O КОМПАНИ </h2>
                            <button><Image src="/section-image/right-icon2.png" width={24} height={24} color='white' /></button>
  
                        </div>




        </div>
    )
}

export default Zapros;