import './collection-preview.scss'
import CollectionItem from './../collection-item/collection-item'

export default function CollectionPreview (item) {
  return (
    <div className='collection-preview'>
      <div>{item.name}</div>
      <div className='preview'>
        {item.items.map(({ id, ...rest }) => (
          <CollectionItem key={id} {...rest}></CollectionItem>
        ))}
      </div>
    </div>
  )
}
