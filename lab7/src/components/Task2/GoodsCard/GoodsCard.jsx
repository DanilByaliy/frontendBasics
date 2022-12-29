import './style.css';

const GoodsCard = ({ src, name, price }) => {
  return (
    <li className="goods-card">
      <img src={src} alt={name} />
      <p>{name}</p>
      <p>Price: {price}$</p>
    </li>
  );
};

export default GoodsCard;
