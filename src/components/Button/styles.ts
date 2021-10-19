import styled from 'styled-components';
interface ButtonProps{
    isOutlined?: boolean;
}
export const CommonButton = styled.button<ButtonProps>`
   height: 50px;
        border-radius: 8px;
        font-weight: 500;
        /* background: #835afd; */
        /* color: #fff; */
        padding: 0 32px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        /* border: 0; */

        transition: 0.2s;

        img{
           margin-right: 8px; 
        }
       
        background:${({isOutlined})=> isOutlined ? '#fff' : '#835afd'};   

        border:${({isOutlined})=> isOutlined ? '1px solid #835afd': 0};

        color:${({isOutlined})=> isOutlined  ? '#835afd' : '#fff'};

        /* &.outlined {
            background: #fff;
            border: 1px solid #835afd;
            color: #835afd;
        } */

        &:not(:disabled):hover {
            filter:brightness(0.9)
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
`