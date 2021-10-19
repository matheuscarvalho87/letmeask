import {ButtonHTMLAttributes} from 'react';
import {CommonButton} from './styles';

type ButtonProps= ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export function Button({isOutlined=false,...props}:ButtonProps){
  return(
    <CommonButton isOutlined {...props}>
      
    </CommonButton>

  )
}