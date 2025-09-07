import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewProdutosComponent } from './dataview-produtos.component';

describe('DataviewProdutosComponent', () => {
  let component: DataviewProdutosComponent;
  let fixture: ComponentFixture<DataviewProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataviewProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataviewProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
