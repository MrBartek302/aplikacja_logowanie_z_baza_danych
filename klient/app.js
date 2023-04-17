async function login(){
    const formLogin = document.getElementById("login").value
    const formPass = document.getElementById("pass").value


    const data = await fetch(`${baseurl}/login/${formLogin}/${formPass}`)
    const json = await data.json()

    console.log(json)

    localStorage.setItem("login", JSON.stringify(json))
 
}

function adminPage(){
    const login = JSON.parse(localStorage.getItem("login"))
    console.log(login)

    if(login.upr!="admin")
    window.location.href="login.html"
}