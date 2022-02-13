import React from 'react'
import { Menu } from '../../components/menu/menu'
import './hats-page.scss'

export function HatsPage (props: any) {
  const items = [
    { id: 1, name: 'hat 1', link: '' },
    { id: 2, name: 'hat 2', link: '' },
    { id: 3, name: 'hat 3', link: '' },
    { id: 4, name: 'hat 4', link: '' },
    { id: 5, name: 'hat 5', link: '' },
    { id: 6, name: 'hat 6', link: '' }
  ]

  return <Menu items={items}></Menu>
}
