import { config } from "../../config/index.js";
import { productSchema } from "../../schema/products.schema.js";

let productsDao;

if (`${config.persistence}` === "firebase") {
	const { default: ProductsDaoFirebase } = await import(
		"../../containers/FirebaseContainer.js"
	);

	productsDao = new ProductsDaoFirebase("products");
} else {
	const { default: ProductsDaoMongo } = await import(
		"../../containers/MongoContainer.js"
	);

	productsDao = new ProductsDaoMongo("products", productSchema);
}

export default productsDao;
