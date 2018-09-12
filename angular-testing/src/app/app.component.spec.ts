import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import {By} from "@angular/platform-browser";

const userServiceStub = {
  getAllUsers() {
    console.log('came inside the stub');
    const users = {
      "body":[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
      }
    ]};
    return of( users );
  }
};

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ], 
      providers: [{provide: UserService, useValue: userServiceStub}]
    });
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular-testing'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to angular-testing!');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-testing!');
  }));
  it('the size should be equal to 2', async(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    fixture.detectChanges();
    expect(app.users.length).toEqual(2);
  }));
  it('the name of first emaployee to be John', async(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.users[0].username).toEqual('Bret');
  }));

  it('the to check if therer is a button', async(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(fixture.debugElement.queryAll(By.css('button')).length).toEqual(app.users.length);
  }));
});
