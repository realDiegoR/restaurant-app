declare interface IMealItem {
	id: string;
	price: number;
	text: string;
	style: {
		colorSet: 1 | 2 | 3;
		orientation: 'start' | 'end';
	};
	openModal?: (item: ICartItem) => void;
}

declare type ShortenedMeal = Pick<IMealItem, 'id' | 'text' | 'price'>;

declare interface IMealCategory {
	title?: string;
	meals: ShortenedMeal[];
	children: (data: ShortenedMeal) => import('react').ReactNode;
	style: {
		colorSet: 1 | 2 | 3;
		orientation: 'start' | 'end';
	};
}

declare interface ICartItem {
	readonly title: string;
	price: number;
	units: number;
	totalUnitsPrice?: number;
}
