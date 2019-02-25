import React from 'react';
import _ from 'lodash';
import Controller from '../Controller.js';
import { Content, Title, Table, Tag } from '../styled.js';
import { BtnWrap, PageWrap } from './styled.js';
import { addComma } from '../utils.js';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const Products = ({ 
  current, items, currentItems, wishItems, 
  addWishList, removeWishList, onChangePage
}) => {
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
          {currentItems.map((item, index) => {
            const isIncludes = wishItems.filter((i) => (i.id === item.id)).length > 0;
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td><img src={item.coverImage} width="100%" /></td>
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
                  <BtnWrap>
                    {isIncludes ? ( 
                        <button onClick={(e) => removeWishList(e, item)}>빼기</button> 
                      ) : ( 
                        <button onClick={(e) => addWishList(e, item)}>담기</button>
                    )}
                  </BtnWrap>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <PageWrap>
        <Pagination onChange={onChangePage} pageSize={5} current={current} total={13} />
      </PageWrap>
    </Content>
  )
}

export default Controller(Products);