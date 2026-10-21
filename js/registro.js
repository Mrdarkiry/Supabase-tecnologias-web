document.getElementById("formRegistro").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;

  if (password !== password2) {
    mostrarMensaje("Las contraseñas no coinciden.");
    return;
  }

  const res = await registrarUsuario(nombre, email, password);

  if (res.ok) {
    mostrarMensaje("Cuenta creada. Redirigiendo al login...", "success");
    setTimeout(() => (window.location.href = "index.html"), 1500);
  } else {
    mostrarMensaje(res.error);
  }
});
