import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { Router } from '@angular/router';

import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.css'
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  editar(id: number): void {
    this.router.navigate(['/editar', id]);
  }

  excluir(id: number): void {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.deletar(id).subscribe(() => {
        this.carregarProdutos();
        this.toast.show('Produto excluido!', 'error');
      });
    }
  }

  novo(): void {
    this.router.navigate(['/novo']);
  }
}