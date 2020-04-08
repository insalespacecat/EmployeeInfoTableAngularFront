import {Component, Input, OnInit} from '@angular/core';
import {StockInterface} from '../../services/stocks.service';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input() info: StockInterface;
  constructor() { }

  ngOnInit(): void {
  }
  isNegative() {
    return this.info && this.info.change < 0;
  }
  isPositive() {
    return this.info && this.info.change > 0;
  }
}
