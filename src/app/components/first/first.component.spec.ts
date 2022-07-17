import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FirstComponent} from './first.component';
import {By} from "@angular/platform-browser";

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    component.user = {
      firstName: "John",
      secondName: "Weak"
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return name and surname from input', () => {
    component.user = {
      firstName: "John",
      secondName: "Doe"
    };

    expect(component.userFirstName).toBe('John');
    expect(component.userSecondName).toBe('Doe');
  })

  it('sum method should return a sum', () => {
    const result = component.sum(1, 3);
    expect(result).toBe(4);
  })

  it("component should return the click event with name of user", () => {
    const event = spyOn(component.buttonClicked, "emit");
    component.onButtonClick();
    expect(event).toHaveBeenCalledWith("John");
  });

  it("component should return the click event", () => {
    const event = spyOn(component.buttonClicked, "emit");
    const button = fixture.debugElement.query(By.css("button"));
    event.calls.reset();
    button.nativeElement.click();

    expect(event).toHaveBeenCalledWith("John");
  });

  it('component should add fill class if name and surname are defined', () => {
    const newUser = {
      firstName: 'Johny',
      secondName: 'Bravo',
    };
    component.user = newUser;
    fixture.detectChanges();

    const firstParagraph = fixture.debugElement.query(By.css("p.fill"));
    expect(firstParagraph).not.toBeNull();
  });
});
