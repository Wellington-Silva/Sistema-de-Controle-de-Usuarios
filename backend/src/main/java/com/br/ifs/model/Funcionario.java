package com.br.ifs.model;

import java.util.Date;

import javax.persistence.Column;				
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "funcionario")
public class Funcionario {
	@Id 
	@GeneratedValue
	private Long idusuario;
	
	@Column(nullable = false)
	private int dtcontratacao;
	
	@Column(nullable = false)
	private Date dtdesligamento;
	
	@Column(nullable = false)
	private String phone;

	public Long getIdusuario() {
		return idusuario;
	}

	public void setIdusuario(Long idusuario) {
		this.idusuario = idusuario;
	}

	public int getDtcontratacao() {
		return dtcontratacao;
	}

	public void setDtcontratacao(int dtcontratacao) {
		this.dtcontratacao = dtcontratacao;
	}

	public Date getDtdesligamento() {
		return dtdesligamento;
	}

	public void setDtdesligamento(Date dtdesligamento) {
		this.dtdesligamento = dtdesligamento;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
}