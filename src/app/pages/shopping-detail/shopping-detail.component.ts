import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartDetailDto } from './models/cart-detail.dto';
import { ShoppingCreateDto } from './models/shopping-create.dto';
import { ShoppingService } from 'src/app/services/shopping-detail.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ShoppingDetailCreateDto } from './models/shopping-detail-create.dto';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss']
})
export class ShoppingDetailComponent implements OnInit {
  checked = false;
  // cartLength: number = 0;
  cartList: CartDetailDto[] = [];
  shopping: ShoppingCreateDto[] = [];
  @Input() outline: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private carritoService: ProductsService,
    private shoppingService: ShoppingService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.carritoService.cartSubject.subscribe(detalle => {
      this.cartList = detalle;
    });
    // this.carritoService.total$.subscribe(total => {
    //   this.total = total;
    // });
  }


  saveShopping() {
    const customerId = '659f24ad4518a25754f6dbc4';
    const shopping: ShoppingCreateDto = {
      customerId: customerId,
      date: new Date(),
      details: this.cartList.map(detalle => {
        return {
          productId: detalle.id,
          price: detalle.price,
          quantity: detalle.quantity
        } as ShoppingDetailCreateDto;
      }) 
    };

    this.shoppingService.saveShopping(shopping).subscribe({
      next: () => {
        this._snackBar.open('Su compra fue exitosa', 'aceptar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });

        this.carritoService.cartSubject.next([]);
        this.carritoService.cart = [];
        localStorage.removeItem('detalle');
      },
      error: () => {
        this._snackBar.open('Error al guardar la compra', 'Aceptar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });
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

  increaseQuantity(item: CartDetailDto) {
    item.quantity++;
    this.updateLocalStorage();
    this.carritoService.cartSubject.next(this.cartList);
  }

  decreaseQuantity(item: CartDetailDto) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateLocalStorage();
      this.carritoService.cartSubject.next(this.cartList);
    }
  }
}
