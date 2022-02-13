import MenuItem from '../menu-item/menu-item'
import './directory.scss'

export default function Directory () {
  const data = [
    { id: 1, name: 'Hats' },
    { id: 2, name: 'Jackets' },
    { id: 3, name: 'Shoes' }
  ]

  return (
    <div className='directory'>
      {data.map(item => (
        <MenuItem key={item.id} item={item}></MenuItem>
      ))}
    </div>
  )
}
