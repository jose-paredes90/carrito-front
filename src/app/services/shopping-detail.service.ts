import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment/environment";
import { ShoppingCreateDto } from "../pages/shopping-detail/models/shopping-create.dto";
import { ShoppingDto } from "../pages/shopping-detail/models/shopping.dto";
@Injectable()
export class ShoppingService {
    
    private path = `${environment.api_shopping}/shopping`;

    constructor(private http: HttpClient) { }

    saveShopping(shopping: ShoppingCreateDto) {
        return this.http.post<ShoppingDto>(this.path, shopping);
    }
    
}