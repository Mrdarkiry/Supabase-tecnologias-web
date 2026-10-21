// ============================================================
// Capa de autenticación con Supabase.
// SUPABASE_URL y SUPABASE_KEY vienen de js/config.js (ignorado por git).
// ============================================================

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Devuelve { ok: true } o { ok: false, error: "mensaje" }
async function registrarUsuario(nombre, email, password) {
  const { error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: { nombre } }
  });
  return error ? { ok: false, error: error.message } : { ok: true };
}

async function iniciarSesion(email, password) {
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  return error ? { ok: false, error: error.message } : { ok: true };
}

// Muestra una alerta de Bootstrap en el div #mensaje
function mostrarMensaje(texto, tipo = "danger") {
  document.getElementById("mensaje").innerHTML =
    `<div class="alert alert-${tipo}" role="alert">${texto}</div>`;
}
