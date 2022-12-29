import React from "react";
import './style.css';
import vinImg from "../../../images/vin.jpg";
import { useState } from 'react';

const Image = () => {

  let [images, setImages] = useState([
    { width: '500px' }
  ]);

  const increase = () => {
    const lastImg = images.pop();
    if (!lastImg) return;
    const width = lastImg.width.slice(0, -2);
    const newWidth =  Number(width) + 50 + 'px';
    setImages([...images, { width: newWidth }]);
  }

  const reduce = () => {
    const lastImg = images.pop();
    if (!lastImg) return;
    const width = lastImg.width.slice(0, -2);
    const newWidth =  Number(width) - 50 + 'px';
    setImages([...images, { width: newWidth }]);
  }

  const add = () => {
    setImages([...images, { width: '500px' }]);
  }

  const remove = () => {
    images.pop();
    setImages([...images]);
  }

  return (
    <div>
      {images.map((image) =>
        <a href="https://www.vinnitsa.info/" target="_blank">
          <img
            src={vinImg}
            className="image"
            style={{
              width: image.width,
            }}
          />
        </a>
      )}
      
      <div class="buttons">
        <button onClick={ increase } className="increase">Збільшити!</button>
        <button onClick={ reduce } className="reduce">Зменшити!</button>
        <button onClick={ add } className="add">Додати!</button>
        <button onClick={ remove } className="remove">Видалити!</button>
      </div>
    </div>
  );
}

export default Image;
