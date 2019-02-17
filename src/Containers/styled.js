import styled from 'styled-components';

export const Content = styled.div`
  width: 1080px;
  margin: 40px auto;
`   

export const Title = styled.h2`
  padding-bottom: 20px;
`    

export const Table = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  th, td {
    border: 1px solid #ddd;
  }
  th {
    height: 40px;
    background: #f5f5f5;
  }
  td {
    padding: 10px;
    text-align: center;
  }
`

export const Tag = styled.span`
  padding: 2px 6px;
  font-size: 11px;
  color: #fff;
  border-radius: 4px;
  background-color: rgb(255, 85, 0);
`