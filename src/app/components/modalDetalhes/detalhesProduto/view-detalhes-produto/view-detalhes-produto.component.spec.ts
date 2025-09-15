import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetalhesProdutoComponent } from './view-detalhes-produto.component';

describe('ViewDetalhesProdutoComponent', () => {
  let component: ViewDetalhesProdutoComponent;
  let fixture: ComponentFixture<ViewDetalhesProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDetalhesProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetalhesProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
