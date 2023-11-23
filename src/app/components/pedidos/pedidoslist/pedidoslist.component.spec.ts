import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PedidoslistComponent } from './pedidoslist.component';

describe('PedidoslistComponent', () => {
  let component: PedidoslistComponent;
  let fixture: ComponentFixture<PedidoslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoslistComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PedidoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('criacao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('funcao adicionar', () => {
    spyOn(component, "adicionar");
    const adicionarButton = fixture.debugElement.nativeElement.querySelector('.btn-primary');
    adicionarButton.click();
    expect(component.adicionar).toHaveBeenCalled();
  });
  
  
});
