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
  coffeVariants: { type: string; total: number }[] = []

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffeeList()
  }

  getCoffeeList(): void {
    this.coffeeService.getCoffeeList().subscribe(coffees => {
      this.coffeeList = coffees;
      this.calculateCoffeeVariants();
    }
    )
  }


  private calculateCoffeeVariants() {
    this.coffeVariants = this.coffeeList.reduce((acc, coffee) => {
      const existingVariant = acc.find(v => v.type === coffee.tipo);
      if (existingVariant) {
        existingVariant.total++;
      } else {
        acc.push({ type: coffee.tipo, total: 1 });
      }
      return acc;
    }, [] as typeof this.coffeVariants);
  }
}
