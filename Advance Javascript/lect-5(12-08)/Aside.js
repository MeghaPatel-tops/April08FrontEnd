function Aside(){
  let userName = localStorage.getItem('userName') ?? "";
    let navArray =["Home","About","Contact","Services"];
    let str=`<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Ecom</a>
    </div>
    <ul class="nav navbar-nav">`
     navArray.map((index)=>{
        str+=`<li><a href="#">${index}</a></li>
        ` })
    str+=`</ul>`;
    if(userName && userName!= ""){
      str+=` <ul class="nav navbar-nav navbar-right">
      <li class='mb-0 me-5'>
        <a href ="cart.html">Cart</a>
      </li>
          <li>
      <li class='mb-0'>Welcome:${userName}</li>
          <li>
          <button type="button" class="btn btn-primary" onclick="logout()" >
      Logout
    </button></li>
    </ul>`
    }
    else{
        str+=`</ul>
    <ul class="nav navbar-nav navbar-right">
    <li>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Login
    </button>
    </li
    </ul>`;
    }  
      
  str+=`</div>
</nav>`;
  document.getElementById('navbar1').innerHTML=str;
}
export {Aside}