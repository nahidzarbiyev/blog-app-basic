let BASE_API = "http://localhost:8000/blogs"
let form = document.querySelector("form")
let titleinput = document.querySelector("#title-val")
let areainput = document.querySelector("#area-val")
let selectinput = document.querySelector("#sel-val")
let selectarr;
// console.log(form);
selectinput.addEventListener("change", function(e){
    selectarr = e.target.value
    
})
form.addEventListener("submit", function(e){
    e.preventDefault()



    userobj= {
        title: "",
        body: "",
        author:"",
    }
    userobj.title= titleinput.value
    userobj.body=areainput.value
    userobj.author= selectarr
    // console.log(selectarr);
    // console.log("hello");
   
        fetch(`${BASE_API}`,
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:
           JSON.stringify(userobj)
        
    })
    }

    

)

fetch(`${BASE_API}`,
{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json"
    },
    body:
       JSON.stringify(userobj)
    
})


