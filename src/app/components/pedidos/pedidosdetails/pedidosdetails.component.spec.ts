import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PedidosdetailsComponent } from './pedidosdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('PedidosdetailsComponent', () => {
  let component: PedidosdetailsComponent;
  let fixture: ComponentFixture<PedidosdetailsComponent>;
  let produtosMock: Produto[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosdetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PedidosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {

    produtosMock = [
      {id: 1, nome: "COCA COLA", valor:3},
    ];
    
    let pedido: Pedido = new Pedido();
    pedido.id = 1;
    pedido.obs = "pedido em demora";
    pedido.produtos = produtosMock;
    component.pedido = pedido;
  });

  it('criacao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).toEqual("pedido em demora");
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de @Output() retorno', fakeAsync(() => {
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));

  it('componente depois do retornoProdutosList', () => {
    const produto: Produto = { id: 2, nome: 'PEPSI', valor: 2 };

    component.retornoProdutosList(produto);

    expect(component.pedido.produtos).toContain(produto);
  });
  
  it('metodo excluir produto', () => {
    component.excluir(produtosMock[0], 0);

    expect(component.pedido.produtos.length).toBe(0);
  });

  beforeEach(() => {

    produtosMock = [
      {id: 1, nome: "COCA COLA", valor:3},
    ];

    let pedido = new Pedido();
    pedido.id = 1;
    pedido.obs = 'pedido em demora';
    pedido.produtos = produtosMock;
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(pedido));
    spyOn(httpSpy, 'put').and.returnValue(of(pedido));

    fixture.detectChanges();
  });

});
