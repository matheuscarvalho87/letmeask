import styled from 'styled-components';

export const ContainerQuestion = styled.div`
  background: #fefefe;
  border-radius:8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.4);
  padding: 24px;
  margin-top: 24px;
  p{
    color:#29292e;
  }

  footer{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:24px;
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  

  img{
    width:32px;
    height:32px;
    border-radius:50%;

  }
  span{
    margin-left:8px;
    font-size:14px;
    color:#737380;
  }
`