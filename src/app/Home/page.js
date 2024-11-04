"use client"


import './Home.css';
import Image from "next/image";


const CustomImage = () => {
    return (
<div
        className="section-image"
        style={{
          backgroundImage: 'url("https://tobolinfo.kz/wp-content/uploads/2018/09/shutterstock_301382870.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "800px",
        }}>
           <div className="image-left">
        <h1>Тавимиский морской <br/>порт VISMA</h1>
        <p>
          Vel posuere nibh odio placerat massa vel tellus<br/>
          tortor. Varius eget nunc scelerisque etiam felis<br/>
          facilisi ante viverra sem. Nunc eros elementum.
        </p>
        <div className='button'>
          <button>
            <h2>O КОМПАНИ</h2>
          </button>
          <button>
          <Image src="/section-image/left-icon.png" width={24} height={24} color='white' />
          </button>
        </div>
      </div>
      <div className='image-right'>

       <div className='cards'>
          <h5>УСЛУГИ</h5>
          <h3>Погрузочно-разгрузочная<br/> деятелность</h3>
       </div>

        <div className='cards'>
          <h5>УСЛУГИ</h5>
          <h3>Хранение <br /> грузов</h3>
        </div>

        <div className='cards'>
          <h5>УСЛУГИ</h5>
          <h3>Складские <br /> оператции</h3>
         </div>

        <div className='cards'>
           <h5>УСЛУГИ</h5>
           <h3>Швартовые <br /> операции</h3>
        </div>
      </div>
     </div>
    )
}
export default CustomImage;