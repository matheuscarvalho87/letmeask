import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background:#f8f8f8;
    --red: #E52E4D;
    --blue:#5429CC;
    --green:#33cc95;

    --blue-light:#6933FF;

    --text-title:#363f5f;
    --text-body:#969cb3;
    --shape:#ffff;
    --gradient:linear-gradient(90DEG, #00CDFF 0%, #6A5CFF 100%)
  }
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html{
    @media (max-width:1080px){
      font-size:93.75%;
    }
    @media (max-width:720px){
      font-size:87.5%;
    }
  }
  body,input,textarea,button{
    font-family:'Poppins',sans-serif;
    font-weight:400;
    font-size: 16px;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight:600;
  }

  body {
    background: var(--background);
    color:#29292e;
    -webkit-font-smoothing:antialiased;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity:0.6;
    cursor:not-allowed;
  }
  
  .react-modal-overlay{
    background:rgba(0,0,0,0.5);

    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;

    display:flex;
    align-items:center;
    justify-content:center;

  }
  .react-modal-content{
    width:100%;
    max-width:576px;
    background:var(--background);
    position:relative;
    padding:3rem;
    border-radius:0.25rem;
  }
  .react-modal-close{
    position:absolute;
    right:1.5rem;
    top:1.5rem;
    border:0;
    background:transparent;
    
    transition: filter 0.2s;

    &:hover{
      filter:brightness(0.8)
    }
  }
`;
