let usuario = JSON.parse(localStorage.getItem("usuario")) || []
let crearCuenta =() =>{
    let nombre = document.getElementById("nombre").value 
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirm_password = document.getElementById("confirm_password").value
    let terminos = document.getElementById("terminos").checked
    let nuevoUsuario = {
        nombre:nombre,
        email:email,
        password:password,
        confirm_password:confirm_password,
        terminos:terminos
    }
    if(nombre===""|| 
        email===""|| 
        password===""||
        confirm_password===""||
        !terminos)
        { alert("Debes completar todos los campos y aceptar los términos")
            return
        }
    if (password !== confirm_password) {
        alert("Las contraseñas no coinciden");
            return;
}
    usuario.push(nuevoUsuario)
    localStorage.setItem("usuario",JSON.stringify(usuario))
    document.getElementById("nombre").value = ""
    document.getElementById("email").value = "";
    document.getElementById("password").value = ""
    document.getElementById("confirm_password").value = ""
    document.getElementById("terminos").value = "" 
    document.getElementById("terminos").checked = false
    alert("Cuenta Creada Correctamente")   
}