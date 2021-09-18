import React from 'react'
import "./CardsContainer.css"
import Card from "../../../components/Card/Card";

const Companies = [
    {
        company: 'One Plus',
        img: 'https://files.geektime.co.il/wp-content/uploads/2021/03/1564988-4b8f61f129ae2bff3e07c8360994437a-1616572259-scaled.jpg'
    },

    {
        company: 'Apple',
        img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/5847052/large/08f498a1827078a29af968de2ad7d96e.jpg'
    },

    {
        company: 'Samsung',
        img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/6240772/large/fce16caebea15f165529dbf1dd9f8b7b.jpg'
    },
    {
        company: 'Xiaomi',
        img: 'https://geektech.me/wp-content/uploads/2021/04/1224718a324f6958c3c7093d88165253.png'
    },
    {
        company: 'Vivo',
        img: 'https://images.hindustantimes.com/tech/img/2020/12/27/960x540/dims_1597038196354_1597038207961_1609040125352.jfif'
    },
    {company: 'Oppo', img: 'https://www.gadgety.co.il/wp-content/themes/main/thumbs/2021/04/Oppo-Find-X3-Pro-4.jpg'}];

const CardsContainer: React.FC = () => {
    return (
        <div className='cards-container'>
            {Companies.map((company) => {
                return (
                    <Card company={company.company} url={company.img}/>
                )
            })}
        </div>
    )
}

export default CardsContainer;