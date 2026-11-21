// ====== CONFIGURACIÓN SUPABASE (ver README.md) ======
const SUPABASE_URL = "https://knzmbeneoaiosaazaefs.supabase.co";
const SUPABASE_KEY = "sb_publishable_GZ8rqj8O8cZMJ0JiWGDEGQ_eohaE-DA";
const TABLA = "comentarios";
// ====================================================
const $ = s => document.querySelector(s);
const esc = t => String(t).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const stars = n => "★".repeat(n) + "☆".repeat(5 - n);

// Menú móvil
$(".burger").onclick = e => { const o = $("#menu").classList.toggle("open"); e.target.setAttribute("aria-expanded", o); };
$("#menu").onclick = () => $("#menu").classList.remove("open");

// Carrusel
let cur = 0, timer;
$("#slides").innerHTML = DATA.carrusel.map(s => `<article class="slide"><h1>${esc(s.t)}</h1><p>${esc(s.p)}</p></article>`).join("");
$("#dots").innerHTML = DATA.carrusel.map((_, i) => `<button aria-label="Ir a la diapositiva ${i+1}" data-i="${i}"></button>`).join("");
function go(i){
  cur = (i + DATA.carrusel.length) % DATA.carrusel.length;
  $("#slides").style.transform = `translateX(-${cur*100}%)`;
  document.querySelectorAll("#dots button").forEach((b, k) => b.classList.toggle("on", k === cur));
}
function auto(){ clearInterval(timer); timer = setInterval(() => go(cur+1), 5000); }
$(".prev").onclick = () => { go(cur-1); auto(); };
$(".next").onclick = () => { go(cur+1); auto(); };
$("#dots").onclick = e => { if (e.target.dataset.i) { go(+e.target.dataset.i); auto(); } };
go(0); auto();

// Organigrama
$("#org").innerHTML = DATA.organigrama.map(l =>
  `<div class="lvl">${l.map(n => `<div class="box ${n===DATA.resaltado?"hl":""}">${esc(n)}</div>`).join("")}</div>`).join("");

// Secciones de contenido
$("#desc").textContent = DATA.descripcion;
const T0 = 7, T1 = 20, hh = h => (h > 12 ? h - 12 : h) + (h >= 12 ? " pm" : " am");
$("#timeline").innerHTML = `<div class="tl" role="img" aria-label="Línea de horarios de 7 am a 8 pm"><div class="tl-track">${
  DATA.modalidades.map(m => `<div class="seg ${m.id}" style="left:${(m.ini-T0)/(T1-T0)*100}%;width:${(m.fin-m.ini)/(T1-T0)*100}%"><b>${esc(m.c)}</b><span>${esc(m.h)}</span></div>`).join("")
}</div><div class="tl-ticks">${
  Array.from({length: T1-T0+1}, (_, i) => `<i style="left:${i/(T1-T0)*100}%">${hh(T0+i)}</i>`).join("")
}</div></div>`;
$("#mod").innerHTML = DATA.modalidades.map(m => `<div class="card"><span class="tag">${esc(m.c)}</span><h3>${esc(m.n)}</h3><p><b>Horario:</b> ${esc(m.h)}</p><p><b>Duración:</b> ${esc(m.d)}</p></div>`).join("");
$("#perfilesList").innerHTML = DATA.perfiles.map(p => `<li>${esc(p)}</li>`).join("");
$("#areasList").innerHTML = DATA.areas.map(a => `<div class="card"><h3>${esc(a.n)}</h3><p>${esc(a.d)}</p></div>`).join("");
$("#resenasList").innerHTML = DATA.resenas.map(r => `<div class="card"><h3>${esc(r.n)}</h3><p aria-label="${r.r} de 5">${stars(r.r)}</p><p>${esc(r.c)}</p></div>`).join("");

// Plan de estudio por modalidad (pestañas)
const mods = Object.keys(DATA.plan);
$("#tabs").innerHTML = mods.map((m, i) => `<button role="tab" aria-selected="${i===0}" data-m="${esc(m)}">${esc(m)}</button>`).join("");
function showPlan(m){
  document.querySelectorAll("#tabs button").forEach(b => b.setAttribute("aria-selected", b.dataset.m === m));
  $("#planBody").innerHTML = `<div class="scroll"><table><thead><tr><th>Semestre</th><th>Asignaturas</th></tr></thead><tbody>${
    DATA.plan[m].map((s, i) => `<tr><td>${i+1}</td><td>${s.map(esc).join(", ")}</td></tr>`).join("")}</tbody></table></div>`;
}
$("#tabs").onclick = e => { if (e.target.dataset.m) showPlan(e.target.dataset.m); };
showPlan(mods[0]);

// Comentarios (Supabase REST)
const configurado = !SUPABASE_URL.includes("TU-PROYECTO");
const H = { apikey: SUPABASE_KEY, ...(SUPABASE_KEY.startsWith("eyJ") ? { Authorization: `Bearer ${SUPABASE_KEY}` } : {}), "Content-Type": "application/json" };

async function errTxt(r){
  let m = ""; try { const j = await r.json(); m = j.message || j.hint || ""; } catch {}
  return `Error ${r.status}${m ? ": " + m : ""}`;
}
async function cargar(){
  if (!configurado) { $("#lista").innerHTML = "<p>Configura Supabase en js/app.js para ver los comentarios.</p>"; return; }
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/${TABLA}?select=nombre,valoracion,comentario,created_at&order=created_at.desc&limit=20`, { headers: H });
    if (!r.ok) throw new Error(await errTxt(r));
    const rows = await r.json();
    $("#lista").innerHTML = rows.length ? rows.map(c =>
      `<div class="card"><h3>${esc(c.nombre)}</h3><p aria-label="${c.valoracion} de 5">${stars(c.valoracion)}</p><p>${esc(c.comentario)}</p></div>`).join("")
      : "<p>Aún no hay comentarios. Sé la primera persona en escribir uno.</p>";
  } catch (err) { $("#lista").innerHTML = `<p>No se pudieron cargar los comentarios. ${esc(err.message)}</p>`; }
}

$("#form").onsubmit = async e => {
  e.preventDefault();
  const msg = $("#msg"), btn = e.target.querySelector("button");
  if (!configurado) { msg.textContent = "Falta configurar Supabase en js/app.js."; return; }
  const f = new FormData(e.target);
  btn.disabled = true; msg.textContent = "Enviando…";
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/${TABLA}`, {
      method: "POST", headers: { ...H, Prefer: "return=minimal" },
      body: JSON.stringify({ nombre: f.get("nombre").trim(), valoracion: +f.get("valoracion"), comentario: f.get("comentario").trim() })
    });
    if (!r.ok) throw new Error(await errTxt(r));
    e.target.reset(); msg.textContent = "Comentario enviado. ¡Gracias!"; cargar();
  } catch (err) { msg.textContent = "No se pudo enviar. " + err.message; }
  btn.disabled = false;
};
cargar();
