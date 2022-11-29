const BASE_URL = "http://localhost:8080";

//Register
export async function register(username, password, name, location) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        name,
        location,
      }),
    };
    const response = await fetch(`${BASE_URL}/api/users/register`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//Login
export async function login(username, password) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };
    const response = await fetch(`${BASE_URL}/api/users/login`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//Create a product
export async function createProduct(name, price, img_url) {
  try {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        price,
        img_url,
      }),
    };

    const response = await fetch(`${BASE_URL}/api/products/`, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
    return alert("You are not able to make a product");
  }
}


//Fetching all the products 
export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}/api/products/`);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
    return alert("Error loading all the products");
  }
}
