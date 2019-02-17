import styled from 'styled-components';

export const Total = styled.div`
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`

export const Box = styled.div`
  float: left;
  width: 520px;
  padding: 20px 0;
  box-sizing: border-box;
  &:first-child {
    margin-right: 40px;
  }
  h3 {
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #666;
  }
`

export const Coupon = styled.div`
  select {
    height: 30px;
  }
`

export const Price = styled.div`

`
