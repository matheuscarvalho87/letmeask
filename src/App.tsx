import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContexts'
import { AdminRoom } from './pages/AdminRoom';


export function App(){
  

  return(
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/rooms/new" component={NewRoom}></Route>
          <Route path="/rooms/:id" component={Room}></Route>
          
          <Route path="/admin/rooms/:id" component={AdminRoom}></Route>
        </Switch>
      </AuthContextProvider>
   </BrowserRouter>

    
  )
}