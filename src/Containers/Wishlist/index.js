import React, { Component } from 'react';
import Controller from '../Controller.js';
import _ from 'lodash';
import { Content, Title, Table, Tag } from '../styled.js';
import { Total, Coupon, Price, SalePrice } from './styled.js';
import { addComma } from '../utils.js';

const WishList = ({
  wishItems, coupons, selectedWishItems, isChecked,
  onChangeCheckAll, onChangeCheck, onChagneQuantity, onChangeCoupon,
}) => {
  // const checkedItem = _.filter(wishItems, (i) => { return (i.isChecked === true);});
  const checkedItem = wishItems.filter((i) => {return i.isChecked === true;});
  console.log(checkedItem);
  const count = checkedItem.length;
  const total = Math.floor(_.sum(checkedItem.map((item) => {
    switch(item.type) {
      case 'rate':
        return Number(item.quantity) * Number(item.price) * 0.9;
      case 'amount':
        return Number(item.quantity) * Number(item.price) - 10000;
      default:
        return Number(item.quantity) * Number(item.price);
    }
  })));
  return (
    <Content>
      <Title>장바구니</Title>
      <Table>
        <colgroup>
          <col width="5%" />
          <col width="30%" />
          <col width="30%" />
          <col width="5%" />
          <col width="10%" />
          <col width="5%" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th><input type="checkbox" value="all" onChange={onChangeCheckAll} /></th>
            <th>상품 제목</th>
            <th>상품 사진</th>
            <th>수량</th>
            <th>상품 가격</th>
            <th>쿠폰</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {_.isEmpty(wishItems) ? (
            <tr>
              <td colSpan="7">장바구니가 비었습니다.</td>
            </tr>
          ) : (
            wishItems.map((item, index) => {
              return (
                <tr key={index}>
                  <td><input type="checkbox" value={item.id} checked={item.isChecked} onChange={(e) => {onChangeCheck(e, index)}} /></td>
                  <td>{item.title}</td>
                  <td><img src={item.coverImage} width="100%" /></td>
                  <td><input type="number" id={item.id} name="quantity" min="1" max="10" value={item.quantity || 1} onChange={(e) => {onChagneQuantity(e, index)}} /></td>
                  <td>
                    {item.availableCoupon === false ? ( 
                      <span>{`${addComma(item.price)}원`}</span>
                    ) : ( 
                      <div>
                        <Tag>쿠폰가능</Tag>
                        <span>{`${addComma(item.price)}원`}</span>
                      </div> 
                    )}
                  </td>
                  <td>
                    {item.availableCoupon === false ? (
                      <div>X</div>
                    ) : (
                      <select id={item.id} value={item.type} onChange={(e) => {onChangeCoupon(e, index)}}>
                        <option>쿠폰을 선택해주세요</option>
                        {coupons.map((item, index) => {
                          return <option key={index} id={item.id} value={item.type}>{item.title}</option>
                        })}
                      </select>
                      )}
                  </td>
                  <td>
                    <p>
                      {item.type === 'rate' ? addComma((Number(item.quantity) * Number(item.price) * 0.9)) : item.type === 'amount' ? addComma((Number(item.quantity) * Number(item.price) - 10000)) : addComma(Number(item.quantity) * Number(item.price))}원
                    </p>
                    <SalePrice>
                      {item.type === 'rate' ?<span>{`(-${addComma((Number(item.quantity) * Number(item.price) * 0.1))})`}</span> : item.type === 'amount' ? <span>{`(-${addComma(10000)})`}</span> : ''}
                    </SalePrice>
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </Table>
      <Total> 
        <Price>
          <h3>예상 결제금액 : </h3>
          <span>{`${addComma(total)}원`}</span>
        </Price>
      </Total>
    </Content>
  )
}

export default Controller(WishList);


