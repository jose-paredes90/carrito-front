import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductsDto } from "../pages/products/models/products.dto";
import { environment } from "src/environment/environment";
import { CartDetailDto } from "../pages/shopping-detail/models/cart-detail.dto";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ProductsService {
  public cart: CartDetailDto[] = [];
  // private totalSubject = new BehaviorSubject<number>(0);
  // total$ = this.totalSubject.asObservable();
  public cartSubject = new BehaviorSubject<CartDetailDto[]>([]);

  constructor(private http: HttpClient) {
    const detalle = JSON.parse(localStorage.getItem("detalle") || null);
    this.cart = detalle || [];
    this.cartSubject.next(this.cart);
  }

  getProducts() {
    let path = `${environment.api_products}/products`;

    return this.http.get<ProductsDto[]>(path)
  }

  addProduct(product: ProductsDto) {
    const existingProduct = this.cart.find(item => item.id === product._id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const newProduct: CartDetailDto = {
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: 1
      };
      this.cart.push(newProduct);
    }
    localStorage.setItem('detalle', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
    //this.updateTotal();
  }

  // private updateTotal() {
  //   const total = this.cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0);
  //   this.totalSubject.next(total);
  // }
}