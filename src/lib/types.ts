export type User = {
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

export type CartProduct = {
	id: string;
	itemID: string;
	name: string;
	price: number;
	quantity: number;
	rating: number;
	image: string;
};

export type Order = {
	_id: string;
	items: CartProduct[];
};