import React from 'react';

import './styles.css';

import { useNavigate } from "react-router-dom";

export const UserCard = ({ image, nome, idfun, dtcontratacao, dtdesligamento, phone }) => {
    const navigate = useNavigate();

    return(
        <div className="dependentes">
            <div className="image-func">
                <img src={image} width="100%" height="100%" alt=''/>
            </div>
            <div className="elements">
                <label>Nome: {nome} </label>
                <label>Telefone: {phone}</label>
                <label>Data contratação: {dtcontratacao} </label>
                <label>Data desligamento: {dtdesligamento}</label>
            </div>
            <div className="buttons">
                <button 
                    id="ListDep"
                    onClick={() => navigate('listardependente', {state :{idfun: idfun, funNome: nome}})}
                >
                    Listar dependentes
                </button>
                <button 
                    id="AddDep" 
                    onClick={() => navigate('/cadastrardependente', {state :{idfun: idfun, funNome: nome}})} >
                        Cadastrar dependentes
                </button>
            </div>
        </div>
    );
};