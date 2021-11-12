import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebProjectsPage } from './web-projects.page';

describe('WebProjectsPage', () => {
  let component: WebProjectsPage;
  let fixture: ComponentFixture<WebProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
