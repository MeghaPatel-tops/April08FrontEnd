let cData;
function getCartdata(){
    cData = localStorage.getItem('cartdata');
    cData = JSON.parse(cData)
    let str =`<td>${cData.productInfo.title}</td>
            <td><img src="${cData.productInfo.image}" alt="" height="50px" width="50px"></td>
            <td>${cData.productInfo.price}</td>
            <td>1</td>`;
            
        document.getElementById('cdata').innerHTML=str;    
}

window.onload=getCartdata();
console.log("cartdata="+cData.productInfo.id);
