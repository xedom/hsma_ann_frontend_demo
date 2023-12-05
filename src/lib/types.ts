export type User = {
	id: string;
	username: string;
	email: string;
	profilePic: string;
	role: string;
};

export type Product = {
	_id: string;
	name: string;
	price: number;
	rating: number;
	images: string[];
};

export type ProductListItem = {
	_id: string;
	name: string;
	price: number;
	rating: number;
	images: string[];
};

export type CartProduct = {
	productID: string;
	itemID: string;
	name: string;
	price: number;
	quantity: number;
	rating: number;
	image: string;
};

export type Order = {
	_id: string;
	date: string;
	total: number;
	items: CartProduct[];
};