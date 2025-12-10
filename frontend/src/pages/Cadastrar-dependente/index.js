import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import api from '../../services/api';
import "./styles.css";

export function CadastrarDependente() {

  const location = useLocation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dtnasc, setDtnasc] = useState("");

  const navigate = useNavigate();

  async function handleCadastroDep(e) {
    e.preventDefault();

    const data = { nome: name, phone: phone, dtnascimento: dtnasc, idfuncionario: location.state.idfun }

    try {
      await api.post('/dependentes', data);
      alert(`Conta criada com sucesso.`);
      navigate('/fun');
    } catch (e) {
      alert('Erro na criação do usuário!');
    }
  }

  return (
    <div className="container-cadDepend">
      <div className="cadastrarDep">
        <section className="formulario-cadDep">
          <form onSubmit={handleCadastroDep} >
            <h1>Cadastre dependentes</h1>
            <input
              type="text"
              value={"depedente de: ", location.state.funNome}
              onChange={(e) => setName(e.target.value)}
              disabled
            />
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="Date"
              placeholder="Data de nascimento"
              value={dtnasc}
              onChange={(e) => setDtnasc(e.target.value)}
              required
            />
            <div className="newDependente-button">
            <button
              id="button-newD"
              type="submit"
              onClick={() => {}} 
            >
              Cadastrar
            </button>

            <Link to="/fun">Voltar</Link>
          </div>
          </form>
          
        </section>
      </div>
    </div>
  );
}
