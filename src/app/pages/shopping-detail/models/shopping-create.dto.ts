import { ShoppingDetailCreateDto } from "./shopping-detail-create.dto";

export class ShoppingCreateDto {
    customerId: string;
    date: Date = new Date();
    details: ShoppingDetailCreateDto[];
}