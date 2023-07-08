import { ICartItem } from '@interfaces/cart';
import { useEffect, useState } from 'react';

class CartItem implements ICartItem {
	readonly title: string;
	readonly price: number;
	units: number;
	totalUnitsPrice: number;

	constructor(title: string, price: number, units: number) {
		this.title = title;
		this.price = price;
		this.units = units;
		this.totalUnitsPrice = this.price * this.units;
	}

	add(units: number): void {
		this.units += units;
		this.updateTotalUnitsPrice();
	}

	delete(): void {
		this.units -= 1;
		this.updateTotalUnitsPrice();
	}

	private updateTotalUnitsPrice() {
		this.totalUnitsPrice = this.price * this.units;
	}
}

export const useCart = () => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [itemPreview, setItemPreview] = useState<ICartItem | null>(null);

	useEffect(() => {
		const cachedItems = localStorage.getItem('cart');
		const newCartItems = cachedItems ? JSON.parse(cachedItems) : [];
		setCartItems(newCartItems);
	}, []);

	const itemCount = cartItems.reduce((acc, current) => acc + current.units, 0);
	const totalPrice = parseFloat(
		cartItems.reduce((acc, current) => acc + current.totalUnitsPrice, 0).toFixed(2)
	);

	const addPreviewItem = (newItem: ICartItem | null) => {
		setItemPreview(newItem);
	};

	const addItem = (newItem: ICartItem, units: number) => {
		const newCart = getCart();
		const isItemInCart = newCart.find((item) => item.title === newItem.title);

		if (isItemInCart) isItemInCart.add(newItem.units);
		else newCart.push(new CartItem(newItem.title, newItem.price, units));

		saveCart(newCart);
	};

	const deleteItem = (item: ICartItem) => {
		const newCart = getCart();

		const itemIndex = newCart.findIndex((cartItem) => cartItem.title === item.title);
		newCart[itemIndex].delete();

		if (newCart[itemIndex].units === 0) newCart.splice(itemIndex, 1);
		saveCart(newCart);
	};

	const saveCart = (newCart: CartItem[]) => {
		const storage = JSON.stringify(newCart);
		localStorage.setItem('cart', storage);
		setCartItems(newCart);
	};

	const getCart = () => {
		const itemsFromStorage = [...cartItems];
		const modifiedCart = assignPrototype(itemsFromStorage);
		return modifiedCart;
	};

	const assignPrototype = (cart: CartItem[]): CartItem[] => {
		return cart.map((item) => Object.setPrototypeOf(item, CartItem.prototype));
	};

	return {
		cartItems,
		itemCount,
		totalPrice,
		itemPreview,
		addItem,
		deleteItem,
		addPreviewItem,
	};
};
