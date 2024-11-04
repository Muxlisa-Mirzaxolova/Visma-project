"use client"


import './novosti.css';
import Image from "next/image";

export default function Novosti() {
  const newsItems = [
    {
      date: '20/05/22',
      title: 'Semper eu pulvinar eget integer',
      description:
        'Pretium dui phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',
      image: './novosti-image/news1.png',
    },
    {
      date: '20/02/22',
      title: 'Vitae id nec nulla sit nunc cursus curabitur tempus vel enim.',
      description:
        'Cras arcu ac commodo suspendisse commodo ipsum turpis dui. Quis pharetra malesuada eget sit egestas et integer. Suspendisse a.',
      image: './novosti-image/news2.png',
    },
    {
      date: '30/11/21',
      title: 'Integer nisi sagittis in aliquet. Enim eget varius lacinia est a.',
      description:
        'Lectus tempus felis pretium vitae. Tempor massa vestibulum condimentum cursus diam quam. Mattis facilisi dignissim donec eget vel.',
      image: './novosti-image/news3.png',
    },
    {
      date: '29/06/21',
      title: 'Facilisis vitae proin quis',
      description:
        'Iaculis diam quam velit sit nunc turpis ultricies elementum. Vitae lacinia tristique rutrum faucibus nulla quis ultricies. Risus.',
      image: './novosti-image/news4.png',
    },
  ];

  return (
    <div className="newsSection">
      <div className='newsTitle'>
      <h2 className="title">Новости</h2>
      <div className="allNews">
        <a href="#">ВСЕ НОВОСТИ</a>
        <button>
          <Image src="/section-image/left-icon.png" width={20} height={20} color='white' />
          </button>
      </div>
      </div>
      
      <div className="newsGrid">
        {newsItems.map((item, index) => (
          <div key={index} className="newsCard">
            <img src={item.image} alt={item.title} className="newsImage" />
            <p className="date">{item.date}</p>
            <h3 className="newsTitle2">{item.title}</h3>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
      </div>
  );
}