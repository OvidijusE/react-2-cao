export default function Card(props) {
  return (
    <div className='card'>
      <img className='portfolio-image' src={props.image} alt='' />
      <div className='image-text'>{props.text}</div>
    </div>
  );
}
