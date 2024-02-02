import { ShoppingDetailDTO } from "./shopping-detail.dto";

export class ShoppingDto {
    id: number;
    customerId: string;
    date: Date;
    details: ShoppingDetailDTO[];
}