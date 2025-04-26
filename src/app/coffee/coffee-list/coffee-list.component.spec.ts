/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService } from '../coffee.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { faker } from '@faker-js/faker';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeListComponent],
      providers: [CoffeeService, provideHttpClient(), provideHttpClientTesting()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    for (const i of Array.from({ length: 3 })) {
      component.coffeeList.push({
        id: faker.number.int({ min: 1, max: 100 }),
        nombre: faker.commerce.productName(),
        tipo: faker.commerce.productAdjective(),
        region: faker.location.country(),
        sabor: faker.commerce.productDescription(),
        altura: faker.number.int({ min: 100, max: 3000 }),
        imagen: faker.image.url(),
      });
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header of #, Nombre, Tipo, Region', () => {
    const header = debug.query(By.css('thead')).queryAll(By.css('th'));
    expect(header.length).toBe(4);
    expect(header[0].nativeElement.innerText).toBe('#');
    expect(header[1].nativeElement.innerText).toBe('Nombre');
    expect(header[2].nativeElement.innerText).toBe('Tipo');
    expect(header[3].nativeElement.innerText).toBe('Region');
  });

  it('should list 3 coffees in the table', () => {
    const coffeeList = debug.query(By.css('tbody')).queryAll(By.css('tr'));
    expect(coffeeList.length).toBe(3);
  });

  it('should show the coffee name in the table', () => {
    const coffeeList = debug.query(By.css('tbody')).queryAll(By.css('tr'));
    for (let i = 0; i < coffeeList.length; i++) {
      const coffee = coffeeList[i];
      const name = coffee.query(By.css('td')).nativeElement.innerText;
      expect(name).toBeTruthy();
      expect(name).toBe(component.coffeeList[i].nombre);
    }
  });
  it('should show the coffee type in the table', () => {
    const coffeeList = debug.query(By.css('tbody')).queryAll(By.css('tr'));
    for (let i = 0; i < coffeeList.length; i++) {
      const coffee = coffeeList[i];
      const type = coffee.queryAll(By.css('td'))[1].nativeElement.innerText;
      expect(type).toBeTruthy();
      expect(type).toBe(component.coffeeList[i].tipo);
    }
  });
  it('should show the coffee region in the table', () => {
    const coffeeList = debug.query(By.css('tbody')).queryAll(By.css('tr'));
    for (let i = 0; i < coffeeList.length; i++) {
      const coffee = coffeeList[i];
      const region = coffee.queryAll(By.css('td'))[2].nativeElement.innerText;
      expect(region).toBeTruthy();
      expect(region).toBe(component.coffeeList[i].region);
    }
  });
});
