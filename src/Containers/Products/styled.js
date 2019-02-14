import styled from 'styled-components';

export const BtnWrap = styled.div`
  button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    font-size: 12px;
    &:hover {
      color: #1890ff;
      border: 1px solid #1890ff;
    }
    & + button {
      margin-left: 10px;
    }
  }
`