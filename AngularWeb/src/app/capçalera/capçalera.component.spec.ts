import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapçaleraComponent } from './capçalera.component';

describe('CapçaleraComponent', () => {
  let component: CapçaleraComponent;
  let fixture: ComponentFixture<CapçaleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapçaleraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CapçaleraComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
