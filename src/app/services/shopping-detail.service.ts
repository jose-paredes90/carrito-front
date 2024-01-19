import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment/environment";
import { ShoppingDto } from "../pages/models/shopping.dto";

@Injectable()
export class ShoppingService {
    constructor(private http: HttpClient) { }

    getShopping() {
        let path = environment.api_products;
        return this.http.get<ShoppingDto>(path);
    }
}