import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RicochetComponent } from './ricochet.component';

describe('RicochetComponent', () => {
  let component: RicochetComponent;
  let fixture: ComponentFixture<RicochetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicochetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RicochetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
