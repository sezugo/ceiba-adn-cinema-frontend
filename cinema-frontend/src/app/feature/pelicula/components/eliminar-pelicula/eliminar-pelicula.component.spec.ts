import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPeliculaComponent } from './eliminar-pelicula.component';

describe('EliminarPeliculaComponent', () => {
  let component: EliminarPeliculaComponent;
  let fixture: ComponentFixture<EliminarPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
