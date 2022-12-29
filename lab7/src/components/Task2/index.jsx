import React, { useState } from "react";
import GoodsGallery from "./GoodsGallery/GoodsGallery";
import parisImg from "../../images/paris.jpg";
import londonImg from "../../images/london.jpg";
import IstanbulImg from "../../images/istanbul.jpg";
import romeImg from "../../images/rome.jpg";
import newYorkImg from "../../images/new-york.jpg";
import vinImg from "../../images/vin.jpg";


const Task2 = () => {
  const [goodsItems] = useState([
    {name: 'Paris', price: '340', src: parisImg},
    {name: 'London', price: '280', src: londonImg},
    {name: 'Istanbul', price: '190', src: IstanbulImg},
    {name: 'Rome', price: '300', src: romeImg},
    {name: 'New-York', price: '400', src: newYorkImg},
    {name: 'Vinnytsia', price: '500', src: vinImg},
  ])

  return (
    <div>
      <GoodsGallery goodsItems={goodsItems}/>
    </div>
  );
}

export default Task2;
