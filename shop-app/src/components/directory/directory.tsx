import MenuItem from '../menu-item/menu-item'
import './directory.scss'

export default function Directory () {
  const data = [
    { id: 1, name: 'Hats', imgUrl: 'https://i.ibb.co/cvpntL1/hats.png' },
    { id: 2, name: 'Jackets', imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png' },
    { id: 3, name: 'Shoes', imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png' }
  ]

  return (
    <div className='directory'>
      {data.map(item => (
        <MenuItem key={item.id} item={item}></MenuItem>
      ))}
    </div>
  )
}
