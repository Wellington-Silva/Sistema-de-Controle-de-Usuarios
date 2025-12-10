package com.br.ifs.controller;

import java.util.List;	

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.ifs.model.Dependentes;
import com.br.ifs.service.DependenteService;

@RestController
@RequestMapping("/dependentes")
@CrossOrigin(origins =  {"http://localhost:3000"})
public class DependenteController {
	
	@Autowired
	DependenteService dependenteService;
	
	@PostMapping
	public Dependentes inserirDependente(@RequestBody Dependentes dependente) {
		return dependenteService.inserirDependente(dependente);
	}
	
	@GetMapping
	public List<Dependentes> consultarDependentes(@RequestBody Dependentes idfuncionario) {
		return dependenteService.consultarDependentes(idfuncionario);
	}
	
}
