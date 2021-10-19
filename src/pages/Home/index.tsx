import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'
import {PageAuth, MainContent,CreateRoom} from './styles'
import { Button } from '../../components/Button'

import {useHistory} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../../services/firebase'


export function Home(){
  const history = useHistory();
  const {signInWithGoogle,user} = useAuth()
  const [roomCode, setRoomCode] = useState('');

  
  async function handleCreateRoom() {
    if(!user){
      await signInWithGoogle()
    }
    history.push('/rooms/new');
  }
  async function handleJoinRoom(event:FormEvent){
    event.preventDefault();

    if(roomCode.trim() === ''){
      alert('Room code is required')
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()){
      alert('Room does not exist')
      return
    }

    history.push(`/rooms/${roomCode}`);
   
  }

  return(
   <PageAuth>
     <aside>
      <img src={illustrationImg} alt="Ilustração simbolizando perguntas e resposta"></img>
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo real</p>
     </aside>
     <main>
       <MainContent>
         <img src={logoImg} alt="Letmeask"/>
         <CreateRoom onClick={handleCreateRoom}>
           <img src={googleIconImg} alt="Logo do Google" />
           Crie uma sala com o Google
         </CreateRoom>
         <div className="separator">
           ou entre em uma sala
         </div>
         <form onSubmit={handleJoinRoom}>
           <input
           type="text"
           placeholder="Digite o código da sala"
           onChange={(event) => setRoomCode(event.target.value)}
           value={roomCode}
           />
           <Button type="submit">
             Entrar na sala
           </Button>
         </form>
       </MainContent>
     </main>
   </PageAuth>
  )
}