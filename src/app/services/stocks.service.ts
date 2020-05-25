import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockInterface} from '../interfaces/stock-interface';

const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const stocksServerUrl = 'https://angular2-in-action-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  get() {
    return stocks.slice();
  }
  add(value) {
    stocks.push(value);
    return this.get();
  }
  remove(value) {
    return stocks.splice(stocks.indexOf(value), 1);
  }
  load() {
    return this.http.get<Array<StockInterface>>(stocksServerUrl + '/stocks/snapshot?symbols=' + stocks.join());
  }

}
