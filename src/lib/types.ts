export type UserRole = 'user' | 'vendor' | 'admin';

export type FetchedUser = {
	_id: string;
	username: string;
	email: string;
	provider?: string;
	providerID?: string;
	picture?: string;
	address?: string;
	balance?: number;
	role: UserRole;
};

export type User = {
	id: string;
	username: string;
	email: string;
	picture?: string;
	role: string;
};

export type UserCard = {
	username: string;
	picture: string;
	role: string;
};

export type Review = {
	userID: string;
	rating: number;
	comment: string
};

export type FetchedProduct = {
	_id: string;
	userID: string;
	name: string;
	description: string;
	price: number;
	stock: number;
	images: string[];
	category: string;
	reviews: Review[];
	rating?: number;
}

export type Product = {
	id: string;
	name: string;
	price: number;
	rating: number;
	preview: string;
	images: string[];
};

export type ProductCard = {
	id: string;
	name: string;
	price: number;
	rating: number;
	preview: string;
};

export type ProductListItem = {
	id: string;
	name: string;
	price: number;
	rating: number;
	preview: string;
};

export type ProductTableRow = {
	name: string;
	price: string;
	image: string;
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