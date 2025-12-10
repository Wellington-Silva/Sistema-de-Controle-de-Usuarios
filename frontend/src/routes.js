import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Funcionario } from './pages/Funcionario';
import { Cadastrar } from './pages/Cadastrar';
import { CadastrarDependente } from './pages/Cadastrar-dependente';
import { ListarDependente } from './pages/Listar-Dependentes';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/fun" element={<Funcionario /> } />
                <Route path="/cadastrar" element={<Cadastrar /> } />
                <Route path="/cadastrardependente" element={<CadastrarDependente /> } />
                <Route path="/fun/listardependente" element={<ListarDependente /> } />
            </Routes>
        </BrowserRouter>
    );
}