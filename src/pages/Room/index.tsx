import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import {useParams } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode.tsx';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { Container, HeaderContent,MainContent,RoomTitle,UserInfo,QuestionList } from './styles';
import {Question} from '../../components/Question'
import { useRoom } from '../../hooks/useRoom';



type RoomParams = {
  id:string
}
export function Room(){
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');

  const roomId = params.id;

  const {questions,title} = useRoom(roomId)



  async function handleSendQuestion(e: FormEvent){
    e.preventDefault();
    if(newQuestion.trim() ===''){
      return;
    } 

    if(!user){
      throw new Error('User not authenticated');
    }
    const question = {
      content: newQuestion,
      author:{
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion('');
    
  }

  

  return(
   <Container>
     <header>
       <HeaderContent>
         <img src={logoImg} alt="letmeask" className="logo" />
         <RoomCode code={roomId}></RoomCode>
       </HeaderContent>
     </header>
     <MainContent>
       <RoomTitle>
         <h1>Sala {title}</h1>
         {questions.length > 0 && <span>{questions.length === 1 ? questions.length + ' pergunta' : questions.length + ' perguntas'}</span>}
       </RoomTitle>

       <form onSubmit={handleSendQuestion}>
         <textarea 
          placeholder="Escreva sua pergunta aqui..."
          onChange={(e) => setNewQuestion(e.target.value)}
          value={newQuestion}
         ></textarea>

         <div className="form-footer">
           {user ?(
             <UserInfo>
               <img src={user.avatar} alt={user.name} />
               <span>{user.name}</span>
             </UserInfo>
           ) : (
              <span>Para enviar uma pergunta,<button>faça seu login</button></span>
              )}
           <Button isOutlined={false} type="submit" disabled={!user}>Enviar pergunta</Button>
         </div>
       </form>
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