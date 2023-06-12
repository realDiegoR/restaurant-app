declare interface IMealItem {
	id: string;
	price: number;
	text: string;
	title?: string;
	color?: string;
	orientation?: 'left' | 'right';
	openModal?: (item: ICartItem) => void;
}

declare interface IMealCategory {
	title?: string;
	meals: IMealItem[];
	children: (key: string, mealData: IMealItem) => import('react').ReactNode;
	type: 'normal' | 'expanded';
	color?: string;
	orientation?: 'left' | 'right';
}

declare interface ICartItem {
	readonly title: string;
	price: number;
	units: number;
	totalUnitsPrice?: number;
}
