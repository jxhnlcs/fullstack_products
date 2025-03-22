import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

import { Produto } from '../../models/produto.model';

import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html'
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto = { nome: '', descricao: '', preco: 0 };
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.produtoService.buscarPorId(+id).subscribe(prod => {
        this.produto = prod;
      });
    }
  }

  salvar(): void {
    if (this.isEditMode && this.produto.id) {
      this.produtoService.atualizar(this.produto.id, this.produto).subscribe(() => {
        this.router.navigate(['/']);
        this.toast.show('Produto atualizado com sucesso!', 'success');
      });
    } else {
      this.produtoService.criar(this.produto).subscribe(() => {
        this.router.navigate(['/']);
        this.toast.show('Produto criado com sucesso!', 'success');
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/']);
    this.toast.show('Criação de produto cancelada!', 'error');
  }
}