package com.br.ifs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.ifs.model.Dependentes;
import com.br.ifs.repository.DependenteRepository;


@Service
public class DependenteService {
	
	@Autowired
	DependenteRepository dependenteRepository;
	
	public Dependentes inserirDependente(Dependentes dependente) {
		return dependenteRepository.save(dependente);
	}
	
	// Consultar os dependentes de um funcionário;
	public List<Dependentes> consultarDependentes(Dependentes idfuncionario) {
		return dependenteRepository.findAllByIdfuncionario(idfuncionario);
	}
	
}