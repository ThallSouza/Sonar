import { useState, useEffect } from 'react';
import Logo from '../../assets/logo.svg'

import Button from '../../components/button/Index';
import Input from '../../components/Input';
import PrivacyNote from '../../components/privacyNote';


function CadastroScreen ({setCurrentScreen, email}) {
  const[codigo, setCodigo] = useState("");
  const[newPassword, setNewPassword] = useState("");
  const[timer, setTimer] = useState(50);
  const[canResend, setCanResend] = useState(false);
  const[validPassword, setValidPassword] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber:false,
  });

  const [errors, setErrors] = useState({codigo: "", newPassword: ""});

  useEffect(() => {
    if (timer > 0){
      const interval = setInterval(() => {
        setTimer((prev) => prev -1);
      }, 1000);
      return () => clearInterval(interval);
    }else{
      setCanResend(true)
    }
  }, [timer]);

  useEffect(() => {
    setValidPassword({
      minLength: newPassword.length >= 8,
      hasUpperCase: /[A-Z]/.test(newPassword),
      hasLowerCase: /[a-z]/.test(newPassword),
      hasNumber: /\d/.test(newPassword),
    });
  }, [newPassword]);

  const handleResendCode = () => {
    if (canResend) {
      setTimer(50);
      setCanResend(false);

      alert("Código reenviado!");
    }
  };

  const handleSave = () => {
    const passwordIsValid = Object.values(validPassword).every((val) => val);
    const newErrors = {
      codigo: codigo ? "" : "Por favor, preencha o código",

      newPassword: passwordIsValid ? "" : "A senha não atende os critérios mínimos",
    };

    setErrors(newErrors);

    if(!codigo || !passwordIsValid){
      return;
    }

    console.log("Conta criada com sucesso!")
    setCurrentScreen("logado")
  };

  const handleEmail = () => {
    setCurrentScreen("email")
  };

  return(
    <form>
      <div style={{marginBottom: "16px"}}>
        <img src={Logo} alt="Logo Sonar" />
      </div>
      
      <div style={{marginBottom: "8px"}}>
        <h1>Bora criar uma conta!</h1>
      </div>
      
      <div style={{marginBottom: "24px"}}>
        <p>Enviamos o código de ativação para o e-mail:</p>
        <p>{email} <Button text="Editar" className="tertiary" onClick={handleEmail}/></p>
      </div>  

      <div style={{marginBottom: "8px"}}>  
        <Input
          type="text" 
          placeholder="Código de validação" 
          value={codigo}  
          onChange={(e) => setCodigo(e.target.value)}
          error={!!errors.codigo}
        />
      </div>

      <div style={{marginBottom: "24px"}}>
        <Button
          text={canResend ? "Reenviar código" : `Reenvie o codigo em ${timer} seg`}
          className='tertiary'
          disabled={!canResend}
          onClick={handleResendCode}
        />
      </div>

      <div style={{display:'flex', gap: "24px"}}>
        <div style={{marginBottom: "24px"}}>
          <Input
            type="text"
            placeholder="Nome"
          />
        </div>

        <div style={{marginBottom: "24px"}}>
          <Input
            type="text"
            placeholder="Sobrenome"
          />
        </div>
      </div>

      <div style={{marginBottom: "8px"}}>
        <Input
          type="password"
          placeholder="Informe nova senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          error={!!errors.newPassword}
        />
      </div>

      <div style={{marginBottom: "24px"}}>
        <div style={{ fontSize: "12px", color: validPassword.minLength ? "green" : "#98A2B3" }}>
          {validPassword.minLength ? "✔" : "✘"} Mínimo de 8 caracteres
        </div>
        <div style={{ fontSize: "12px", color: validPassword.hasUpperCase ? "green" : "#98A2B3" }}>
          {validPassword.hasUpperCase ? "✔" : "✘"} Letra maiúscula
        </div>
        <div style={{ fontSize: "12px", color: validPassword.hasLowerCase ? "green" : "#98A2B3" }}>
          {validPassword.hasLowerCase ? "✔" : "✘"} Letra minúscula
        </div>
        <div style={{ fontSize: "12px", color: validPassword.hasNumber ? "green" : "#98A2B3" }}>
          {validPassword.hasNumber ? "✔" : "✘"} Um número
        </div>
      </div>

      <div style={{display:'flex', gap: "8px", marginBottom: "24px", alignItems: "center", justifyContent:"center"}}>
        <input type="checkbox" id="topping" name="topping" value="Paneer" style={{color: "#366bb3", width:"16px", height: "16px"}}/>
        <PrivacyNote/>
      </div>

      <div style={{display:'flex', gap: "24px"}}>
        <Button text="Voltar" className='secundary' onClick={() => setCurrentScreen("email")}/>
        <Button text="Cria conta" className='primary' onClick={handleSave}/>
      </div>
    </form>
  );
}

export default CadastroScreen