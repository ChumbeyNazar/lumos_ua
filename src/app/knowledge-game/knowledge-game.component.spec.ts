import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeGameComponent } from './knowledge-game.component';

describe('KnowledgeGameComponent', () => {
  let component: KnowledgeGameComponent;
  let fixture: ComponentFixture<KnowledgeGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
