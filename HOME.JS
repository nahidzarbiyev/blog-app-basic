let BASE_API = "http://localhost:8000/blogs"
let blogchar = []
let bloglist = document.querySelector(".bloglist")

fetch(`${BASE_API}`)
.then((res)=>
    res.json()
)
.then((data)=>{
    console.log(data);
    data.forEach(element => {

        

        let li = document.createElement("li")
        li.setAttribute("id", `${element.id}`)
        let h2 = document.createElement("h2")
        let h4 = document.createElement("h4")
        
        let p = document.createElement("p")


        let delbtn = document.createElement("button")

    
        h2.innerText = element.title
        h4.innerText = element.body
        p.innerText = element.author
        delbtn.innerHTML = "delete"
        delbtn.setAttribute("id", `${element.id}`)


        bloglist.append(li)
        li.append(h2)
        li.append(h4)
        li.append(p)
        li.append(delbtn)

        delbtn.addEventListener("click",function(){
            console.log(this.id);
            this.parentElement.remove()
            fetch(`${BASE_API}/${element.id}`,
            {
               method:"DELETE",
            }
               )
        })
       
    });


})


