import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingDetailDto } from './models/shopping-detail.dto';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss']
})
export class ShoppingDetailComponent implements OnInit {
  checked = false;
  // total: number = 0;
  cartList: ShoppingDetailDto[] = [];
  @Input() outline: boolean = false;
  constructor(private carritoService: ProductsService) { }

  ngOnInit(): void {
    this.carritoService.cartSubject.subscribe(detalle => {
      this.cartList = detalle;
    })
    // this.carritoService.total$.subscribe(total => {
    //   this.total = total;
    // });
  }
  public get cartLength(): number {
    return this.cartList.reduce((acc, { quantity }) => acc + quantity, 0);
  }

  get total() {
    return this.cartList.reduce((acc, { quantity, price }) => acc + quantity * price, 0);
  }
  private updateLocalStorage() {
    localStorage.setItem("detalle", JSON.stringify(this.cartList));
  }

  increaseQuantity(item: ShoppingDetailDto) {
    item.quantity++;
    this.updateLocalStorage();
    this.carritoService.cartSubject.next(this.cartList);
  }

  decreaseQuantity(item: ShoppingDetailDto) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateLocalStorage();
      this.carritoService.cartSubject.next(this.cartList);
    }
  }
}
