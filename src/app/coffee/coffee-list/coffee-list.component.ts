import { Component, OnInit } from '@angular/core';
import { Coffee } from '../Coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  standalone: false,
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffeeList: Coffee[] = [];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffeeList()
  }

  getCoffeeList(): void {
    this.coffeeService.getCoffeeList().subscribe(coffees => {
      this.coffeeList = coffees;
    }
    )
  }

}
