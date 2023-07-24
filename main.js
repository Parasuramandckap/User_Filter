let all_details = [];
let loader = document.querySelector(".size")
//  console.log(all_details);
let user = document.querySelector(".users")
// console.log(user.children);

let Male = document.querySelector(".male")
let Female = document.querySelector(".female")

let loadmore = document.querySelector(".load")

window.addEventListener("DOMContentLoaded", () => {

    //its for initial count user
    let load_content_count= 20;
    allelements(load_content_count)
    // then click load mmore btn add 20 users
    loadmore.addEventListener("click",()=>{
        load_content_count+=20
        allelements(load_content_count)
    })
    

    //all element load in screen refresh
    function allelements(load_content_count) {
    loader.classList.add("show")
    fetch(`https://randomuser.me/api?results=${load_content_count}`)
        .then(res => res.json())
        .then(json => {
            loader.classList.remove("show")

            // console.log(json)

            let datas = json.results;
            for (let i = 0; i < datas.length; i++) {

                Genarating_user(datas[i])


            }

            

            // male click then only show on result only male user
            Male.addEventListener("click", () => {
                //remove privious all user details  
                remove_all_div()
                Male.classList.toggle("add")
                Female.classList.remove("add")
                if (Male.classList.contains("add")) {
                    let datas = json.results;

                    for (let i = 0; i < datas.length; i++) {
                        let gender = datas[i].gender;
                        if (gender == "male") {
                            Genarating_user(datas[i])
                        }

                    }
                }
                else {
                    let datas = json.results;
                    for (let i = 0; i < datas.length; i++) {
                        Genarating_user(datas[i])

                    }
                }

            })

            // male click then only show on result only male user
            Female.addEventListener("click", () => {
                //remove privious all user details  
                remove_all_div()
                Female.classList.toggle("add")
                Male.classList.remove("add")
                if (Female.classList.contains("add")) {
                    let datas = json.results;
                    // console.log(result)
                    for (let i = 0; i < datas.length; i++) {
                        if (datas[i].gender == "female") {
                            Genarating_user(datas[i])
                        }
                    }
                }
                else {
                    let datas = json.results;
                    for (let i = 0; i < datas.length; i++) {
                        Genarating_user(datas[i])
                    }
                }


            })           


        })
    }


})


// its for remove all user while clicking male adn female btn
function remove_all_div() {
    while (user.hasChildNodes()) {
        user.firstChild.remove()

    }

}




//genarating user

function Genarating_user(user_details) {
    // console.log(element)
    let div = document.createElement("div")
    div.setAttribute("id", "div")
    let img_dev = document.createElement("div")
    let image = document.createElement("img")
    let image_link = document.createElement("a")
    image_link.setAttribute("href", `user_details.html?id=${user_details.id.value}`)
    image.setAttribute("src", user_details.picture.large)
    image.setAttribute("class", user_details.gender)
    image_link.appendChild(image)
    img_dev.appendChild(image_link)
    div.appendChild(img_dev)
    let p = document.createElement("p")
    let a = document.createElement("a")
    a.setAttribute("class", "link")
    a.href = `user_details.html?id=${user_details.id.value}`
    a.innerText = `${user_details.name.first}${user_details.name.last}`
    p.appendChild(a)
    div.appendChild(p)
    user.appendChild(div)




    //mouse hover effect for images

    image.addEventListener("mouseover", () => {
        image.style.filter = "blur(1.5px)";
        p.style.color = "blue";
        p.style.visibility = "visible"
    })
    image.addEventListener("mouseleave", () => {
        image.style.filter = "blur(0px)";
        p.style.color = "blue";
        p.style.visibility = "hidden"
    })


    //mouse hover effect for text
    p.addEventListener("mouseover", () => {
        image.style.filter = "blur(1.5px)";
        p.style.color = "blue";
        p.style.visibility = "visible"
    })
    p.addEventListener("mouseleave", () => {
        image.style.filter = "blur(0px)";
        p.style.color = "blue";
        p.style.visibility = "hidden"
    })
}

//search filter using  on users name

let search = document.querySelector("#search")
console.log(search)
search.addEventListener("keyup", (e) => {
    let search_word = e.target.value.toLowerCase()
    // console.log(search_word)
    let all_a = document.querySelectorAll(".link")
    for (let a = 0; a < all_a.length; a++) {
        if(all_a[a].innerHTML.toLowerCase().indexOf(search_word) != -1){
            all_a[a].parentElement.parentElement.style.display = "block"
        }
        else{
            all_a[a].parentElement.parentElement.style.display = "none"
        }
    }
})

