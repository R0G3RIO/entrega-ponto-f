import { useState } from "react";

export default function Admin() {
  const [logado, setLogado] = useState(false);
  const [senha, setSenha] = useState("");

  const autenticar = () => {
    if (senha === "admin123") {
      setLogado(true);
    } else {
      alert("Senha incorreta");
    }
  };

  if (!logado) {
    return (
      <div className="p-4 text-center max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Painel Administrativo</h2>
        <input
          type="password"
          placeholder="Digite a senha"
          className="border p-2 w-full mb-3"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={autenticar} className="bg-blue-600 text-white px-4 py-2 rounded">
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bem-vindo ao painel!</h2>
      <p className="text-gray-600">Aqui você verá os pedidos recebidos em breve...</p>
    </div>
  );
}
