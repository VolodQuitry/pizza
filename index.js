const sotreredProductType = "pizza";
const products = 
[
  {
    "name": "Pizza 1",
    "code": 1,
    "price": 100,
    "type": "pizza"
  },
  {
    "name": "Pizza 2",
    "code": 2,
    "price": 200,
    "type": "pizza"
  },
  {
    "name": "Pizza 3",
    "code": 3,
    "price": 300,
    "type": "pizza"
  },
  {
    "name": "Pizza 4",
    "code": 4,
    "price": 400,
    "type": "pizza"
  },
  {
    "name": "Drink 1",
    "code": 5,
    "price": 500,
    "type": "drink"
  },
  {
    "name": "Drink 2",
    "code": 6,
    "price": 600,
    "type": "drink"
  },
  {
    "name": "Drink 3",
    "code": 7,
    "price": 700,
    "type": "drink"
  }
];

showProducts();

const resultDisplay = document.getElementById("resultDisplay");
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", calculateProcuct);

function calculateProcuct() {
	const productCode = +document.getElementById("productCode").value;
	const productCount = +document.getElementById("productCount").value;

	if (isExistCode(productCode)) {
		const product = getProduct(productCode);
		const price = product.price * productCount;

		showResult("Имя продукта: " + product.name + ", количество: " + productCount + ", цена: " + price);
	}
	else {
		showResult("Такого продукта не существует");
	}
}

function showResult(result) {
	resultDisplay.innerText = result;
}

function getProduct(code) {
	return products.find(product => product.code === code);
}

function isExistCode(code) {
	return getProduct(code) != null;
}

function showProducts() {
	const display = document.getElementById("productDisplay");
	const sotreredProducts = getSorteredProducts(sotreredProductType);
	
	sotreredProducts.forEach(product => display.innerHTML += getFormatProduct(product));
}

function getFormatProduct(product) {
	return "Код продукта: " + product.code + ", имя продукта: " + product.name + "<br>";
}

function getSorteredProducts(type) {
	const sorteredProducts = products.filter(product => product.type == type);
	const otherProducts = products.filter(product => product.type != type);

	otherProducts.forEach(product => sorteredProducts.push(product));

	return sorteredProducts;
}