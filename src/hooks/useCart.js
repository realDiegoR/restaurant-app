import { useEffect, useState } from 'react';

class CartItem {
	constructor(title, price, quantity) {
		this.title = title;
		this.price = price;
		this.count = quantity;
		this.totalPrice = this.price * this.count;
	}

	add(quantity) {
		this.count += quantity;
		this.updateTotalPrice();
	}

	delete() {
		this.count -= 1;
		this.updateTotalPrice();
	}

	updateTotalPrice() {
		this.totalPrice = this.price * this.count;
	}
}

export const useCart = () => {
	const [cartItems, setCartItems] = useState([]);
	console.log(cartItems);
	useEffect(() => {
		const cachedItems = localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart'))
			: [];
		setCartItems(cachedItems);
	}, []);

	const [itemPreview, setItemPreview] = useState(null);

	const itemCount = cartItems.reduce((acc, current) => acc + current.count, 0);
	const totalPrice = cartItems.reduce((acc, current) => acc + current.totalPrice, 0).toFixed(2);

	const addPreviewItem = (newItem) => {
		setItemPreview(newItem);
	};

	const addItem = (newItem, quantity) => {
		const itemsFromStorage = [...cartItems];
		const newCart = assignPrototype(itemsFromStorage);
		const itemAlreadyInCart = newCart.find((item) => item.title === newItem.title);
		console.log(cartItems);
		if (itemAlreadyInCart) itemAlreadyInCart.add(quantity);
		else newCart.push(new CartItem(newItem.title, newItem.price, quantity));

		saveCart(newCart);
	};

	const deleteItem = (itemToDelete) => {
		const itemsFromStorage = [...cartItems];
		const newCart = assignPrototype(itemsFromStorage);
		const itemIndex = newCart.findIndex((item) => item.title === itemToDelete);
		newCart[itemIndex].delete();

		if (newCart[itemIndex].count === 0) newCart.splice(itemIndex, 1);
		saveCart(newCart);
	};

	const saveCart = (newCart) => {
		const storage = JSON.stringify(newCart);
		localStorage.setItem('cart', storage);
		setCartItems(newCart);
	};

	const assignPrototype = (cart) => {
		return cart.map((item) => Object.setPrototypeOf(item, CartItem.prototype));
	};

	return {
		cartItems,
		itemCount,
		totalPrice,
		addItem,
		deleteItem,
		itemPreview,
		addPreviewItem,
	};
};
