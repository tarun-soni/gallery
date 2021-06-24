import React from 'react'
import {
  UserInfoFooter,
  UserImg,
  UserNameDiv,
  UserName,
  DownloadIcon
} from './CardFooter.elements'

const CardFooter = ({ likes, user_img, name }) => {
  return (
    <UserInfoFooter>
      <UserImg src={user_img} alt="user-img" />

      <UserNameDiv>
        <UserName>
          <strong>{name}</strong>
        </UserName>
        <UserName> {likes} likes recieved</UserName>
      </UserNameDiv>

      <DownloadIcon src="https://img.icons8.com/pastel-glyph/64/ffffff/download--v1.png" />
    </UserInfoFooter>
  )
}

export default CardFooter
