const BASE_URL = "http://localhost:8080";


export async function getAllUsers() {
  try {
    const options = {
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    const response = await fetch(`${BASE_URL}/api/users`, options);
    const result = await response.json();
    console.log(result, "this is the result")
    return result;

  } catch (error) {
    console.error(error)
  }
}


//Register
export async function register(username, password, name, location, email) {
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
        email
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
  console.log(name, price, img_url, "THIS IS CREATEPRODUCT")
  try {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        price,
        img_url
      }),
    };
    console.log(options, 'this is options')

    const response = await fetch(`${BASE_URL}/api/products`, options);
    console.log(response, "this is the response")
    const result = await response.json();
    console.log(result, "this is the result")


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


//Deleting a product
export async function deleteProduct(productId) {
 try {
    const options = {
        method: "DELETE",
        header: {
            'Content-type':"application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    const response = await fetch(`${BASE_URL}/api/products/productId`, options)
    const data = await response.json();
    console.log(data, "this is the data from delete")
    return data
    
 } catch (error) {
    console.error(error) 
    return (
        alert("There was an error deleting your product")
    )
 }
}


//Updating a Product
export async function updateProduct(name, price, img_url, id) {
    try {
        const options = {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              name,
              price,
              img_url,
            }),
          };

          const response = await fetch(`${BASE_URL}/api/products/${id}`, options)
    } catch (error) {
        console.error(error) 
        return (
            alert("there was an error trying to edit yor product")
        )
    }
}


//Getting User information
export async function userInfo() {
  try {
    const options = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    };
    const response = await fetch(`${BASE_URL}/api/users/me`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error)
  }
}


// update Profile
export async function userUpdate(name, password, email, id, isadmin){
    const options={
      method:"PATCH",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        name, 
        password,
        email,
        isadmin
      }),
    };
    const response = await fetch(`${BASE_URL}/api/users/${id}`, options);
    const result = await response.json();
    return result;
}

//get Cart
export async function getCartItems(){
  const response = await fetch(`${BASE_URL}/api/cart`);
  const result = await response.json();
  return result;
}

//create cart item
export async function createCartItem(price, quantity){
  try {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        price,
        quantity
      }),
    };

    const response = await fetch(`${BASE_URL}/api/cart_items`, options);
    const result = await response.json();
    return result;
    console.log(result, 'line203 api')
  } catch (error) {
    console.log(error)
  }
}