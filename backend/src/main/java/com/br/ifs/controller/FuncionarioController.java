package com.br.ifs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.br.ifs.model.Funcionario;
import com.br.ifs.service.FuncionarioService;

@RestController
@RequestMapping("/funcionarios")
@CrossOrigin(origins =  {"http://localhost:3000"})
public class FuncionarioController {
	
	@Autowired
	FuncionarioService funcionarioService;
	
	@GetMapping(value = "/hello")
	// GET: http://localhost:8080/funcionarios/hello
	public String hello() {
		return funcionarioService.hello();
	}
	
	@GetMapping
	public List<Funcionario> consultarFuncionarios() {
		return funcionarioService.consultarFuncionarios();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Funcionario inserirFuncionario(@RequestBody Funcionario funcionario) {
		return funcionarioService.inserirFuncionario(funcionario);
	}
	
	@GetMapping
	// Consultar funcionários contratados em um determinado mês;
	public List<Funcionario> funcionariosContratados() { //Funcionario funcionario
		return funcionarioService.consultarFuncionarios(); //funcionario
	}
}