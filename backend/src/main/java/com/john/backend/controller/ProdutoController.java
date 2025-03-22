package com.john.backend.controller;

import com.john.backend.dto.ProdutoDTO;
import com.john.backend.entity.Produto;
import com.john.backend.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "*") // necessário para comunicação com o frontend
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @PostMapping
    public Produto criar(@RequestBody ProdutoDTO dto) {
        return produtoService.salvar(dto);
    }

    @GetMapping
    public List<Produto> listar() {
        return produtoService.listarTodos();
    }

    @PutMapping("/{id}")
    public Produto atualizar(@PathVariable Long id, @RequestBody ProdutoDTO dto) {
        return produtoService.atualizar(id, dto);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        produtoService.deletar(id);
    }
}