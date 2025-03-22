package com.john.backend.service;

import com.john.backend.dto.ProdutoDTO;
import com.john.backend.entity.Produto;

import java.util.List;

public interface ProdutoService {
    Produto salvar(ProdutoDTO dto);
    List<Produto> listarTodos();
    Produto atualizar(Long id, ProdutoDTO dto);
    void deletar(Long id);
    Produto buscarPorId(Long id);
}