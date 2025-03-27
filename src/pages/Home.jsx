// src/pages/Home.jsx
import React, { useState } from "react";

const opcoes = [
  {
    id: 1,
    titulo: "Opção 1",
    descricao: "Arroz, feijão, bife acebolado, refogado de chuchu com cenoura e farofa",
  },
  {
    id: 2,
    titulo: "Opção 2",
    descricao: "Arroz, feijão, peito de frango grelhado, refogado de chuchu com cenoura e farofa",
  },
  {
    id: 3,
    titulo: "Opção 3",
    descricao: "Arroz, feijão, peixe empanado, refogado de chuchu com cenoura e farofa",
  },
];

const tamanhos = [
  { id: "P", label: "Pequena", preco: 21 },
  { id: "M", label: "Média", preco: 23 },
  { id: "G", label: "Grande", preco: 25 },
];

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);
  const [modoEntrega, setModoEntrega] = useState("Retirada no local");

  const adicionarAoCarrinho = (opcao, tamanho) => {
    const item = {
      nome: opcao.titulo,
      tamanho: tamanho.label,
      preco: tamanho.preco,
    };
    setCarrinho([...carrinho, item]);
  };

  const linkWhatsapp = () => {
    const texto = carrinho.map((item, i) => `Pedido ${i + 1}: ${item.nome} - ${item.tamanho} (R$${item.preco})`).join("\n");
    const total = carrinho.reduce((acc, cur) => acc + cur.preco, 0);
    const msg = `*Novo pedido - Delivery Ponto F*\n\n${texto}\n\nTotal: R$${total}\nModo: ${modoEntrega}`;
    return `https://wa.me/5511956477885?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-orange-600 text-center mb-4">Delivery Ponto F</h1>

      {opcoes.map((opcao) => (
        <div key={opcao.id} className="border rounded-lg p-4 mb-4 shadow">
          <h2 className="text-lg font-semibold mb-1">{opcao.titulo}</h2>
          <p className="text-sm text-gray-700 mb-2">{opcao.descricao}</p>
          <div className="flex gap-2 flex-wrap">
            {tamanhos.map((tamanho) => (
              <button
                key={tamanho.id}
                className="bg-green-600 text-white px-3 py-1 rounded"
                onClick={() => adicionarAoCarrinho(opcao, tamanho)}
              >
                {tamanho.label} - R${tamanho.preco}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="my-4">
        <label className="font-semibold block mb-1">Modo de entrega:</label>
        <select
          className="border p-2 rounded w-full"
          value={modoEntrega}
          onChange={(e) => setModoEntrega(e.target.value)}
        >
          <option>Retirada no local</option>
          <option>Entrega</option>
        </select>
      </div>

      {carrinho.length > 0 && (
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold mb-2">Resumo do Pedido</h3>
          <ul className="text-sm mb-2">
            {carrinho.map((item, i) => (
              <li key={i}>• {item.nome} - {item.tamanho} (R${item.preco})</li>
            ))}
          </ul>
          <p className="font-semibold mb-3">Total: R${carrinho.reduce((acc, cur) => acc + cur.preco, 0)}</p>
          <a
            href={linkWhatsapp()}
            target="_blank"
            className="block bg-green-500 text-white text-center py-2 rounded"
          >
            Enviar Pedido pelo WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

  