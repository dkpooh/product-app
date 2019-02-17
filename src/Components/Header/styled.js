import styled from 'styled-components';

export const Wrap = styled.div`
  border-bottom: 1px solid #ddd;
  > div {
    width: 1080px;
    height: 70px;
    position: relative;
    margin: 0 auto;
    line-height: 70px;
  }
`

export const Menu = styled.ul`
  position: absolute;
  right: 0px;
  li {
    display: inline-block;
    padding: 0 20px;
    font-size: 14px;
    font-weight: bold;
    vertical-align: middle;
    a.selected {
      color: gray;
    }
    span {
      font-size: 12px;
    }
  }
`