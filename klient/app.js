async function login(){
    const formLogin = document.getElementById("login").value
    const formPass = document.getElementById("pass").value


    const data = await fetch(`http://localhost:3000/login/${formLogin}/${formPass}`)
    const json = await data.json()

    console.log(json)

    localStorage.setItem("login", JSON.stringify(json))
 
}

function adminPage(){
    const login = JSON.parse(localStorage.getItem("login"))
    console.log(login)

    if(login.status==false)
    window.location.href="login.html"
}