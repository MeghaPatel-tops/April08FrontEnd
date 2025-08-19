  function genProduct(data){
            let str="";
            data.map((index)=>{
               str+=`
               <div class="col-md-4 mt-5">
                <div class="card" style="width: 18rem;height:300px;overflow-y:scroll" >
            <img src="${index.image}" class="card-img-top" alt="..." style="height:200px">
            <div class="card-body">
                <h5 class="card-title">${index.title}</h5>
               
                <p>${index.price}</p>
                <button  class="btn btn-primary" onclick="addtocart(${index.id})">Add to Cart</button>
             </div>
        </div></div>`;
         
                
            })
            setTimeout(()=>{
                document.getElementById('productcatalog').innerHTML=str;
            },1000)
            
        }
    
     export   async function getProduct(){
            try {
                let response = await fetch('https://fakestoreapi.com/products');
                let products =await  response.json();
                console.log(products);
                
                genProduct(products);
            } catch (error) {
                console.log(error);
                
            }
        }
