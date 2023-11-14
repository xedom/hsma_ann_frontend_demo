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
