let id = window.location.search
// console.log(id)
let user_details = document.querySelector(".user_details")
//its loading icon
let loader =document.querySelector(".size")
window.addEventListener("DOMContentLoaded",()=>{
    loader.classList.add("show")
    fetch(`https://randomuser.me/api?id=${id}`)
    .then(res => res.json())
    .then(json => {
        //its for loading animation
        loader.classList.remove("show")
        let reuslts = json.results;
        reuslts.forEach(results => {
            //console.log(results)
                let img_dev = document.createElement("div")
                let img = document.createElement("img")
                img.src = results.picture.large;
                img_dev.appendChild(img)
                user_details.appendChild(img_dev)
    

                let div_contact =  document.createElement("div")
                div_contact.setAttribute("class","content")
                let name = document.createElement("h2")
                name.innerText = `FullName:${results.name.first}${results.name.last}`
                div_contact.appendChild(name)
                

                let gender = document.createElement("h3")
                gender.innerText = `Gender:${results.gender}`
                div_contact.appendChild(gender)
                user_details.appendChild(div_contact)

                let dob = document.createElement("h3")
                dob.innerText = `Dob:${results.dob.date.slice(0,10)}Age${results.dob.age}`;
                div_contact.appendChild(dob)
                user_details.appendChild(div_contact)

                let email = document.createElement("h3")
                email.innerText =`Email:${results.email}`;
                div_contact.appendChild(email)
                user_details.appendChild(div_contact)
    
    
                let address = document.createElement("h3")
                address.innerText = `Address:${results.location.street.number} ${results.location.street.name}${results.location.city}${results.location.state}${results.location.country}
                Pin:${results.location.postcode}`;
                div_contact.appendChild(address)
                user_details.appendChild(div_contact)

                let phoneno = document.createElement("h3")
                phoneno.innerText = `PhoneNo:${results.phone}`
                div_contact.appendChild(phoneno)
                user_details.appendChild(div_contact)
                
    
        });
    
    
    })
})