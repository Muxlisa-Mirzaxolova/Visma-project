"use client"


import './uslugi.css';


const Uslugi = () => {
    return (
        <div className="uslugi-container">
    
        <div className="uslugi-left">
          <h1>Услуги</h1>
          <ul>
            <li>
              Тарифы на услуги по обеспечению <br/>контроля доступа на территорию<br/> VISMA на 2022 год.
              <span className="pdf-button">PDF</span>
            </li>
            <li>
              Условия определения цены <br/>договора и тарифы на работы.
              <span className="pdf-button">PDF</span>
            </li>
            <li>
              Договор перевалки <br/>(типовая форма).
              <span className="pdf-button">PDF</span>
            </li>
          </ul>
        </div>
  
        <div className="uslugi-right">
          <div className="cards2">
            <h5>Услуги</h5>
            <h4>Хранение грузов</h4>
          </div>
          <div className="cards2">
            <h5>Услуги</h5>
            <h4>Швартовые операции</h4>
          </div>
          <div className="cards2">
            <h5>Услуги</h5>
            <h4>Складские операции</h4>
          </div>
          <div className="cards2">
            <h5>Услуги</h5>
            <h4>Агентское обслуживание судов</h4>
          </div>
          <div className="cards2">
            <h5>Услуги</h5>
            <h4>Буксировка / сопровождение судов</h4>
          </div>
          <div className="cards2">
            <h5>Услуги</h5>
            <h4>Погрузочно-разгрузочная деятельность</h4>
          </div>
        </div>
      </div>
    )
}
export default Uslugi;