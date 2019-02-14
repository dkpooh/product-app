import React from 'react';
import Controller from '../Controller.js';
import { Content, Title, Table } from '../styled.js';
import { BtnWrap } from './styled.js';

const Products = ({ items, addWishList, removeWishList }) => {
  return (
    <Content>
      <Title>상품 리스트</Title>
      <Table>
        <colgroup>
          <col width="40%" />
          <col width="30%" />
          <col width="10%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>상품 제목</th>
            <th>상품 사진</th>
            <th>상품 가격</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td><img src={item.coverImage} width="100%" /></td>
                <td>{item.price}</td>
                <td>
                  <BtnWrap>
                    <button onClick={(e) => addWishList(e, item)}>담기</button>
                    <button onClick={(e) => removeWishList(e, item)}>빼기</button>
                  </BtnWrap>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Content>
  )
}

export default Controller(Products);