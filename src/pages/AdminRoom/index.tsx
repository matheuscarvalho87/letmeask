import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import {useParams } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode.tsx';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { Container, HeaderContent,MainContent,RoomTitle,ButtonsContainer,QuestionList } from './styles';
import {Question} from '../../components/Question'
import { useRoom } from '../../hooks/useRoom';

type RoomParams = {
  id:string
}
export function AdminRoom(){
  const { user } = useAuth();
  const params = useParams<RoomParams>();

  const roomId = params.id;

  const {questions,title} = useRoom(roomId)

  
  return(
   <Container>
     <header>
       <HeaderContent>
         <img src={logoImg} alt="letmeask" className="logo" />
         
         <ButtonsContainer>
          <RoomCode code={roomId}></RoomCode>
          <Button isOutlined >Encerrar Sala</Button>
         </ButtonsContainer>
       </HeaderContent>
     </header>
     <MainContent>
       <RoomTitle>
         <h1>Sala {title}</h1>
         {questions.length > 0 && <span>{questions.length === 1 ? questions.length + ' pergunta' : questions.length + ' perguntas'}</span>}
       </RoomTitle>
       <QuestionList>
       {questions.map(question =>{
        return(
          <Question 
            key={question.id} 
            content={question.content} 
            author={question.author}></Question>
        )
      })}
       </QuestionList>
      
     </MainContent>
      
   </Container>
  )
}