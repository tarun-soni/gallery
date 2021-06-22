import React from 'react'
import {
  UserInfoFooter,
  UserImg,
  UserNames,
  DownloadIcon
} from './CardFooter.elements'

const CardFooter = ({ likes, user_img, name }) => {
  return (
    <UserInfoFooter>
      <UserImg src={user_img} alt="user-img" />

      <UserNames>
        <span>
          <strong>{name}</strong>
        </span>
        <span> {likes} likes recieved</span>
      </UserNames>

      <DownloadIcon src="https://img.icons8.com/pastel-glyph/64/ffffff/download--v1.png" />
    </UserInfoFooter>
  )
}

export default CardFooter
