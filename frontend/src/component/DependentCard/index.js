import React from 'react';

export const DependentCard = ({ image, nome, dtnascimento, phone }) => {

    return(
        <div className="dependentes">
            <div className="image-func">
                <img src={image} width="100%" height="100%" alt=''/>
            </div>
            <div className="elements">
                <label>Nome: {nome} </label>
                <label>Telefone: {phone}</label>
                <label>Data Nascimento: {dtnascimento} </label>
            </div>
        </div>
    );
};