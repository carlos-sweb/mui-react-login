import { useState } from 'react'


import './App.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  
  const [username,setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [server,setServer] = useState("");
  const [sending,setSending] = useState(false);  
  const valid = ()=>{
    return username != "" && password != "" && server != "";
  }  

  const login = function(){
      console.log(username);
      setSending(true);
      setTimeout(()=>{
          setSending(false);
      },3000);
  }

  return (    
    <> 
      <Card variant="outlined" className="w-80 p-2">
        <CardContent>
        <h1 className="text-3xl font-bold text-gray-900">Acceso</h1>
        <Box component="form" noValidate autoComplete="off" className="pt-3 flex flex-col gap-4 justify-center items-center" >
          <TextField fullWidth disabled={ sending } id="user" label="Usuario" variant="standard" value={username} onChange={e => setUsername(e.target.value)}   />
          <TextField fullWidth disabled={ sending } id="pass" label="Contraseña" variant="standard" value={password} onChange={e => setPassword(e.target.value) } />
          <TextField fullWidth disabled={ sending } id="server" label="Servidor" variant="standard" value={server} onChange={e => setServer(e.target.value) } />
          { !sending  && <Button fullWidth disabled={ !valid() }  variant="contained" onClick={login} >Acceder</Button>}          
          { sending &&  <CircularProgress size={28} /> }
        </Box>                              
        </CardContent>        
      </Card>      
    </>
  )
}

export default App
