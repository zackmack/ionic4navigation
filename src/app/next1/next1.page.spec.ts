import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Next1Page } from './next1.page';

describe('Next1Page', () => {
  let component: Next1Page;
  let fixture: ComponentFixture<Next1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Next1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Next1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
