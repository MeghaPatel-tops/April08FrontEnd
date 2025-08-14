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