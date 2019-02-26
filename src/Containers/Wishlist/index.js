import React from 'react';
import Controller from '../Controller.js';
import { Content, Title, Table, Tag } from '../styled.js';
import { Total, Coupon, Price, SalePrice } from './styled.js';
import { addComma } from '../utils.js';

const WishList = ({
  wishItems, coupons, selectedWishItems, isChecked,
  onChangeCheckAll, onChangeCheck, onChagneQuantity, onChangeCoupon,
  calPrice, totalPrice, calSalePrice, totalCalSalePrice
}) => {
  const checkedItem = wishItems.filter((i) => {return i.isChecked === true;}); 
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
          {wishItems && wishItems.length > 0 ? (
              wishItems.map((item, index) => {
                return (
                  <tr key={index}>
                    <td><input type="checkbox" value={item.id} name="isChecked" checked={item.isChecked} onChange={(e) => {onChangeCheck(e, index)}} /></td>
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
                        <select id={item.id} name="type" value={item.type} onChange={(e) => {onChangeCoupon(e, index)}}>
                          <option>쿠폰을 선택해주세요</option>
                          {coupons.map((item, index) => {
                            return <option key={index} id={item.id} value={item.type}>{item.title}</option>
                          })}
                        </select>
                        )}
                    </td>
                    <td>
                      <p>
                        {`${addComma(calPrice(item))}원`}
                      </p>
                      <SalePrice>
                        <span>{addComma(calSalePrice(item))}</span>
                      </SalePrice>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan="7">장바구니가 비었습니다.</td>
              </tr>
          )}
        </tbody>
      </Table>
      <Total> 
        <Price>
          <h3>예상 결제금액 : </h3>
          <span>{`${addComma(totalPrice(checkedItem))}원`}</span>
        </Price>
      </Total>
    </Content>
  )
}

export default Controller(WishList);


