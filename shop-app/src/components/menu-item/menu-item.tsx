import './menu-item.scss'

export default function MenuItem ({ item }) {
  return (
    <div className='menu-item'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${item.imgUrl})` }}
      ></div>
      <div className='title'>{item.name}</div>
      <button className='shop-btm'>shop now</button>
    </div>
  )
}
