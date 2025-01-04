import { useState } from 'react';
import Logo from '../../assets/logo.svg'

import Input from '../../components/Input';
import Button from '../../components/button/Index';
import PrivacyNote from '../../components/privacyNote';

function EmailScreen({setCurrentScreen, setEmail}) {

  const [email, setLocalEmail] = useState("");
  const [error, setError] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();
    
    if (!email){
      setError("Campo obrigatório");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^s\s@]+$/;
    if (!emailRegex.test(email)){
      setError("Insira um e-mail válido");
      return;
    }

    setError("");
    setEmail(email)

    const emailExists = simulateEmailCheck(email);
    setCurrentScreen(emailExists ? "senha" : "cadastro");
  };

  const simulateEmailCheck = (email) => {
    const fakeDatabase = ["teste@teste.com"];
    return fakeDatabase.includes(email);
  }

  return (
      <form>

        <div style={{marginBottom: "16px"}}>
          <img src={Logo} alt="Logo Sonar" />
        </div>
        
        <div style={{marginBottom: "8px"}}>
          <h1>Bora navegar!</h1>
        </div>
        
        <div style={{marginBottom: "24px"}}>
          <p>Um mar de oportunidades para você, Insira seu e-mail para entrar ou se increver</p>
        </div>
        
        <div style={{marginBottom: "24px"}}>
          <Input
            type="email"
            placeholder='Informe seu e-mail'
            value={email}
            onChange={(e) => setLocalEmail(e.target.value)}
            error={error}
          />
        </div>

        <div style={{marginBottom: "12px"}}>
          <Button className="primary" text={"Continuar"} onClick={handleContinue}/>
        </div>
        
        <PrivacyNote/>
      </form>
  );
}

export default EmailScreen