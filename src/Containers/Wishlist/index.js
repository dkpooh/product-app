import React, { Component } from 'react';
import Controller from '../Controller.js';
import _ from 'lodash';
import { Content, Title, Table, Tag } from '../styled.js';
import { Total, Box, Coupon, Price } from './styled.js';

const WishList = ({
  wishItems, coupons, selectedWishItems, isChecked,
  onChangeCheck,
}) => {
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
          {_.isEmpty(wishItems) ? (
            <tr>
              <td colSpan="5">장바구니가 비었습니다.</td>
            </tr>
          ) : (
            wishItems.map((item, index) => {
              return (
                <tr key={index}>
                  <td><input type="checkbox" value={item.id} checked={item.isChecked} onChange={(e) => {onChangeCheck(e, index)}} /></td>
                  <td>{item.title}</td>
                  <td><img src={item.coverImage} width="100%" /></td>
                  <td><input type="number" min="1" /></td>
                  <td>
                    {item.availableCoupon === false ? ( 
                      <div>
                        <Tag>쿠폰가능</Tag>
                        <span>{item.price}</span>
                      </div> 
                    ) : ( 
                      <span>{item.price}</span>
                    )}
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </Table>
      <Total> 
        <Box>
          <Coupon>
            <h3>쿠폰</h3>
            <div>
              <select>
                {coupons.map((item, index) => {
                  return <option key={index}>{item.title}</option>
                })}
              </select>
            </div>
          </Coupon>
        </Box>
        <Box>
          <Price>
            <h3>결제금액</h3>
            <p>총 {selectedWishItems.length}개 상품</p>
          </Price>
        </Box>
      </Total>
    </Content>
  )
}

export default Controller(WishList);


