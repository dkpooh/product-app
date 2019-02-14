import React from 'react';
import Controller from '../Controller.js';
import { Content, Title, Table } from '../styled';

const WishList = ({ wishItems }) => {
  console.log(wishItems);
  return (
    <Content>
      <Title>장바구니</Title>
      <Table>
        <colgroup>
          <col width="5%" />
          <col width="40%" />
          <col width="30%" />
          <col width="10%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th>선택</th>
            <th>상품 제목</th>
            <th>상품 사진</th>
            <th>수량</th>
            <th>상품 가격</th>
          </tr>
        </thead>
        <tbody>
          {wishItems || wishItems.legnth > 0 ? wishItems.map((item, index) => {
            return (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{item.title}</td>
                <td><img src={item.coverImage} width="100%" /></td>
                <td></td>
                <td>{item.price}</td>
              </tr>
            )
          }) : (
            <tr>
              <td colSpan="5">장바구니가 비었습니다.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Content>
  )
}

export default Controller(WishList);