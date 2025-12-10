package com.br.ifs.service;

import java.util.List;		

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.ifs.model.Funcionario;
import com.br.ifs.repository.DependenteRepository;
import com.br.ifs.repository.FuncionarioRepository;

@Service
public class FuncionarioService {
	
	@Autowired
	DependenteRepository dependenteRepository;
	
	// Hello funcionário
	public String hello() {
		return "Hello funcionário";
	}
	
	@Autowired
	FuncionarioRepository funcionarioRepository;
	
	// Consulta todos funcionarios cadastrados
	public List<Funcionario> consultarFuncionarios() {
		return funcionarioRepository.findAll();
	}
	
	public Funcionario inserirFuncionario(Funcionario funcionario) {
		return funcionarioRepository.save(funcionario);
	}
		
}