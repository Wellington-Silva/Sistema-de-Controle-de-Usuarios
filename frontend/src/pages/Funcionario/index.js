import React, { useEffect, useState } from "react";
import './styles.css';

import sair from '../../assets/logout.png';
import { UserCard } from '../../component/UserCard';

import api from '../../services/api';
import { Link, useNavigate } from "react-router-dom";

export function Funcionario() {
    const name = sessionStorage.getItem('nome');
    const [mes, setMes] = useState("");
    const [funList, setFunList] = useState([]);

    useEffect(async () => {
        try {
            const response = await api.get('/funcionarios');
            setFunList(response.data);
          } catch (e) {
            console.log(e);
          }
    }, []);

    return(
        <div className="container-fun">      
            <div className="container-left">
                <h2>{name}</h2>
                <div className="usuario-div">
                    <p>Data de desligamento:</p>
                    <input type="date" id="dtDesl"></input>  
                    <button id="sendOff">Submeter</button>
                </div> 
                <footer>
                    <div className="seta"></div>
                    <Link to="/" id="sair" type="submit"
                    onClick={() => {}}><img src={sair} alt=""/> Sair</Link>
                </footer>
            </div>

            <div className="container-right">
                <h1>Painel do Funcionário</h1>
                <div className="barra-pesq">
                    <input id="barra-pesquisar" placeholder="Nome"></input>
                </div>

                <div id="func-deslig">
                    <button id="list-func-off" type="submit">Funcionários desligados</button>
                    <input type="month" id="mes" placeholder="Mês" onChange={(e)=>{setMes(e.target.value)}}></input>
                    <button id="listar" onClick={()=>{alert(mes)}}>Listar</button>
                </div>

                <section className="scroll"> 

                    {funList === [] ? null : funList.map(i => (
                        <UserCard 
                            key={i.idusuario}
                            idfun={i.idusuario}
                            image={`http://source.unsplash.com/random/200x200?men&${i.idusuario}`}
                            nome={i.nome}
                            phone={i.phone}
                            dtcontratacao={i.dtcontratacao}
                            dtdesligamento={i.dtdesligamento}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
}