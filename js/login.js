document.getElementById("formLogin").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const res = await iniciarSesion(email, password);

  if (res.ok) {
    mostrarMensaje("¡Sesión iniciada!", "success");
    // TODO: redirigir a la página principal, ej: window.location.href = "dashboard.html";
  } else {
    mostrarMensaje(res.error);
  }
});
