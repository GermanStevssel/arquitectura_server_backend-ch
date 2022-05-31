export default class ProductDTO {
	constructor(product) {
		this.name = product.name;
		this.id = product.id;
		this.price = product.price;
		this.photo = product.photo;
	}

	getId = () => this.id;

	getName = () => this.name;

	getPrice = () => this.price;

	getPhoto = () => this.photo;

	product = async () => this;
}
