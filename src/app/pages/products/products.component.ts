import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsDto } from './models/products.dto';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: ProductsDto[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
 
  constructor(private products: ProductsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.products.getProducts()
      .subscribe(res => {
        this.productList = res;
      })
  }

  addProduct(product: ProductsDto) {
    this.products.addProduct(product);
    
    this._snackBar.open('Se agrego al carrito', 'aceptar',{
      horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
    });
  }
}
