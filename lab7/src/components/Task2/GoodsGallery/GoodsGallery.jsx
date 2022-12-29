import GoodsCard from '../GoodsCard/GoodsCard';
import './style.css';

const GoodsGallery = ({ goodsItems }) => {
  return (
    <div className="goods-gallery">
      <h2>Tours</h2>
      {goodsItems.map((item, index) => <GoodsCard {...item} key={index}/>)}
    </div>
  );
}

export default GoodsGallery;
