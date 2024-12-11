import { useState } from 'react'


import './App.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';

import axios from "axios"

function App() {
  const url_auth = "http://preciointeligente.ddns.net:8000/api-token-auth/";
  const [username,setUsername] = useState("")
  const [password, setPassword] = useState("")  
  const [sending,setSending] = useState(false);  
  const valid = ()=>{
    return username != "" && password != "";
  }  

  const login = function(){
      console.log(username);
      setSending(true);
      
      axios.post( url_auth , {
        username: username , 
        password: password
      } ).then(( response )=>{
          console.log( response );
      });

  }

  return (    
    <> 
      <Card variant="outlined" className="w-80 p-2">
        <CardContent>
        <h1 className="text-3xl font-bold text-gray-900">Acceso</h1>
        <Box component="form" noValidate autoComplete="off" className="pt-3 flex flex-col gap-4 justify-center items-center" >
          <TextField type="text" fullWidth disabled={ sending } id="user" label="Usuario" variant="standard" value={username} onChange={e => setUsername(e.target.value)}   />
          <TextField type="password" fullWidth disabled={ sending } id="pass" label="Contraseña" variant="standard" value={password} onChange={e => setPassword(e.target.value) } />          
          { !sending  && <Button fullWidth disabled={ !valid() }  variant="contained" onClick={login} >Acceder</Button>}          
          { sending &&  <CircularProgress size={28} /> }
        </Box>                              
        </CardContent>        
      </Card>      
    </>
  )
}

export default App
