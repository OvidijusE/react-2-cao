import { cardData, card2Data } from '../../Data';

function Card() {
  return (
    <div className='portfolio-cards'>
      {cardData.map((cObj) => (
        <div className='card'>
          <img key={cObj.id} className='portfolio-image' src={cObj.image} alt='portfolio-pic' />
          <div className='image-text'>{cObj.text}</div>
        </div>
      ))}
    </div>
  );
}

function Card2() {
  return (
    <div className='portfolio-cards'>
      {card2Data.map((cObj) => (
        <div className='card'>
          <img key={cObj.id} className='portfolio-image' src={cObj.image2} alt='portfolio-pic' />
          <div className='image-text'>{cObj.text}</div>
        </div>
      ))}
    </div>
  );
}

export { Card, Card2 };
