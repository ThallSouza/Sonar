import { useState } from 'react';
import Logo from '../../assets/logo.svg'

import Input from '../../components/Input';
import Button from '../../components/button/Index';

function PasswordScreen ({setCurrentScreen, email}) {

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = () => {
    setCurrentScreen("recuperacao");
  };

  const handleEmail = () => {
    setCurrentScreen("email")
  };

  const simulaPasswordCheck = (password) => {
    const fakeDatabase = ["123"];
    return fakeDatabase.includes(password);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!password){
      setError("Campo obrigatório");
      return;
    }

    setError("");

    const passwordExists = simulaPasswordCheck (password);
    if(!passwordExists){
      setError("Credenciais inválidas");
    }else{
      setCurrentScreen("logado")
    }
  };

  return(
    <form>
      <div style={{marginBottom: "16px"}}>
        <img src={Logo} alt="Logo Sonar" />
      </div>

      <div style={{marginBottom: "8px"}}>
        <h1>Qual a sua senha?</h1>
      </div>

      <div style={{marginBottom: "24px"}}>
        <p>{email} <Button text="Editar" className="tertiary" onClick={handleEmail}/></p>
      </div>

      <div style={{marginBottom: "8px"}}>
        <Input
          type="password"
          placeholder="Informe seu senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />
      </div>

      <div style={{marginBottom: "24px"}}>
        <Button text="Esqueceu sua senha" className="tertiary" onClick={handleForgotPassword}/>
      </div>
      <Button text="Entrar"className="primary" onClick={handleLogin}/>
    </form>
  );
}

export default PasswordScreen