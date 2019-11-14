import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Next2Page } from './next2.page';

describe('Next2Page', () => {
  let component: Next2Page;
  let fixture: ComponentFixture<Next2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Next2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Next2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
