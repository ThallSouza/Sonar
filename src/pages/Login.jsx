import React, {useState} from 'react'
import Imagem from '../assets/bg_login.jpg'

import EmailScreen from './login/EmailScreen';
import PasswordScreen from './login/PasswordScreen';
import PasswordResetScreen from './login/PasswordResetScreen';
import CadastroScreen from './login/CadastroScreen';
import LogadoScreen from './login/LogadoScreen';

function Login(){
  const [currentScreen, setcurrentScreen] = useState("email");
  const [email, setEmail] = useState("");

    return(
      <div className='container'>
        <div className='left-section'>

          {currentScreen === "email" && (
            <EmailScreen setCurrentScreen={setcurrentScreen} setEmail={setEmail}/>
          )}

          {currentScreen === "senha" && (
            <PasswordScreen setCurrentScreen={setcurrentScreen} email={email}/>
          )}

          {currentScreen === "cadastro" && (
            <CadastroScreen setCurrentScreen={setcurrentScreen} email={email}/>
          )}

          {currentScreen === "recuperacao" && (
            <PasswordResetScreen setCurrentScreen={setcurrentScreen} email={email}/>
          )}
          
          {currentScreen === "logado" && <LogadoScreen/>}
        </div>
        <div className='right-section'>
            <img src={Imagem} alt='Sonar Imagem' className='imagem'/>
        </div>
    </div>
    )
  }

  export default Login