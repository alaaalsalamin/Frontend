let url = "https://jsonplaceholder.typicode.com/users";
let btn = document.getElementById('btn');
btn.addEventListener('click',alerts);

function alerts (){
    window.alert('Button Clicked');
}

//////////////////////////////////////////////////////
async function fetchUser (url){
let response = await fetch(url);
let json = await response.json();
return json;
}
let btn2 = document.getElementById("btn2");
btn2.addEventListener("Click",()=>{
    fetchUser().then(result =>{
        console.log(result);
    });
})

///////////////////////////////////////////////////////
 let img = document.getElementById("img");
 img.addEventListener("load", ()=>{
     console.log("hello");
 });

//////////////////////////////////////////////////////
let btn3 = document.getElementById("btn3");
btn3.addEventListener("mousedown", ()=>{
    console.log('mousedown')
}); 
btn3.addEventListener("mouseup", ()=>{
    console.log('mouseup')
});
btn3.addEventListener("click", ()=>{
    console.log('click')
});
