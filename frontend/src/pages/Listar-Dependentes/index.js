import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DependentCard } from "../../component/DependentCard";
import { UserCard } from '../../component/UserCard';
import api from '../../services/api';

import './styles.css';

export function ListarDependente() {

  const location = useLocation();

  const [dependList, setDependList] = useState([]);
  const idFuncionario = location.state.idfun;

  useEffect(async () => {
    try {
      const response = await api.get(`/dependentes/${idFuncionario}`);
      setDependList(response.data);
    } catch (e) {
      alert('Erro na listagem de dependentes!');
    }
  }, []);

  return (
    <div className="container-ListDep">
      <h1>Listagem de dependentes</h1>
      <section className="scroll2">

        {dependList === [] ? null : dependList.map(i => (
          <DependentCard 
            key={i.idusuario}
            image={`http://source.unsplash.com/random/200x200?men&${i.idusuario}`}
            nome={i.nome}
            phone={i.phone}
            dtnascimento={i.dtnascimento}
          />
        ))}
       
      </section>
      <Link to="/fun">Voltar</Link>
    </div>
  );
}