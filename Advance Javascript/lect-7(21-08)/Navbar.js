export function navbarGen(){
    console.log("in nav bar");
    
let Navlink=["Home","about"];

let str=`<nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">
    <ul class="navbar-nav">`;

    Navlink.map((index)=>{
        str+=` <li class="nav-item">
        <a class="nav-link" href="#">${index}</a>
      </li>`;
    })
     
  str+=  `
    </ul>
  </div>
</nav>`;
document.getElementById('navnew').innerHTML=str;
}