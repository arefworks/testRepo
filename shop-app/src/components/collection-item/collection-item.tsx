import './collection-item.scss'

export default function CollectionItem (props) {
  return (
    <div className='collection-item'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      ></div>
      <div className='item'>
        <div>{props.title}</div>
        <div>{props.price}</div>
      </div>
    </div>
  )
}
