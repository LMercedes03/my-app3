import React from 'react'
import './BlueStripe.scss'
import { userNameAtom } from './atom'
import { useRecoilValue } from 'recoil'

export const BlueStripe = () => {
  const userName = useRecoilValue(userNameAtom)
  return (
    <div className='BlueStripe'>
      <b>Username:</b> {userName}
    </div>
  )
}