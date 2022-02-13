import { useState } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import './shop-page.scss'
import SHOP_DATA from './SHOP_DATA'

export default function ShopPage () {
  const [collections] = useState(SHOP_DATA)

  return (
    <div className='shop-page'>
      {collections.map(({id, ...rest}) => (
        <CollectionPreview key={id} {...rest}></CollectionPreview>
      ))}
    </div>
  )
}
