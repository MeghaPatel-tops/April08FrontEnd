async function registration(){
    alert("herter");
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let userAdd={
            "username":username,
            "email": email,
            "password": pwd
            };
    let result= await axios.post('https://fakestoreapi.com/users',userAdd);
    alert(result.data)
    console.log(result.data

    );

}

   async function addtocart(productInfo){
    let userName = prompt("Enter tour UserId");
    let username=localStorage.getItem('userName');
    let token = localStorage.getItem('userToken');
    
        if(username==userName && token){

            let res = await fetch("https://fakestoreapi.com/products/"+productInfo);
            product= await res.json();
            console.log(product);
            //Add Firsttime
            let cartDataUser = localStorage.getItem('cartdata');
            let cartObj = JSON.parse(cartDataUser);

             let cartData = {
              "username":username,
              "pid":productInfo,
              "qty":1,
             
              "productInfo":product
          }
           localStorage.setItem('cartdata',JSON.stringify(cartData));
           alert("product added successfully");
        }
         
    }

async function login(){
     let username = document.getElementById('username').value;
    let pwd = document.getElementById('pwd').value;
    let userAdd={
            "username":username,
            "password": pwd
            };
    let result = await axios.post("https://fakestoreapi.com/auth/login",userAdd);
    console.log(result)
    let token = result.data.token;
    if(token){
        alert("Login successfully");
        alert(token);
        localStorage.setItem("userToken",token);
        localStorage.setItem("userName",username)
        console.log(token);
        window.location.href='index.html';
        
    }
    else{
        alert("Please Enter correct username and password");
    }
}

function logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    window.location.href='index.html';
}