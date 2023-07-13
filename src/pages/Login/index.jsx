import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaGoogle } from 'react-icons/fa'
import "./style.css"

export function Login() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/terminal");
  }, [user]);

  return (
    <main className="w-full h-screen containerHome">
      <div className="h-screen w-80 m-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-5 titleLogin">Login</h1>
        <div className="w-full">
          <form className="flex-col flex">
            <input disabled className="rounded-lg p-3 m-1" type="text" name="email" placeholder="E-mail" />
            <input disabled className="rounded-lg p-3 m-1" type="password" name="password" placeholder="Senha" />

            <button disabled className="bg-[#849499] my-[12px] rounded-lg font-JetbrainsMono p-[15px] text-white" type="submit">Fazer login</button>
          </form>
          <p className="text-sm text-[#c00808]">Método de login temporariamente indisponível!</p>
        </div>
        <hr className="border-1 w-full mt-3 mb-3 border-[#7c939c]" />
        <button className="buttonLogin w-full justify-center flex items-center rounded-lg" onClick={signInWithGoogle}>
					<FaGoogle style={{ color: '#fff', marginRight: '12px' }} /> 
          Faça login com o Google
        </button>
      </div>
    </main>
  );
}