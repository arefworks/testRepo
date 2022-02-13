import './menu-item.scss'
import { useNavigate } from 'react-router-dom'

export default function MenuItem ({ item }: any) {
  const navigate = useNavigate()
  function handleItemClick (event) {
    navigate('/shop')
  }

  return (
    <div className='menu-item'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${item.imgUrl})` }}
      ></div>
      <div className='title'>{item.name}</div>
      <button className='shop-btm' onClick={handleItemClick}>
        shop now
      </button>
    </div>
  )
}
