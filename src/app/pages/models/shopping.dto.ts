import { ShoppingDetailDto } from "../shopping-detail/models/shopping-detail.dto";

export class ShoppingDto {
    id: number;
    customerId: string;
    date: Date = new Date();
    details?: ShoppingDetailDto;
}