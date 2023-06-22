export interface ICartItem {
	readonly title: string;
	readonly price: number;
	units: number;
	totalUnitsPrice?: number;
}
