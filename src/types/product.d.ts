declare interface IMealItem {
	id: string;
	price: number;
	text: string;
	style: {
		colorSet: 1 | 2 | 3;
		orientation: 'start' | 'end';
	};
	openModal: (item: ICartItem) => void;
}

declare interface ICartItem {
	readonly title: string;
	readonly price: number;
	units: number;
	totalUnitsPrice?: number;
}
