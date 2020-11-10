import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTableComponent } from './new-table.component';

describe('NewTableComponent', () => {
  let component: NewTableComponent;
  let fixture: ComponentFixture<NewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
