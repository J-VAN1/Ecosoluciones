const modales = [
  {
    id: "modal1",
    titulo: "Evaluación de Impacto Social",
    descripcion: "Identifica y gestiona efectos sobre comunidades.",
    tituloLista: "Servicios incluidos",
    lista: [
      "Elaboración del estudio",
      "Entrega física y digital",
      "Seguimiento ante SENER"
    ]
  },
  {
    id: "modal2",
    titulo: "Manifestación de Impacto Ambiental",
    descripcion: "Evalúa los posibles efectos sobre el medio ambiente.",
    tituloLista: "Servicios incluidos",
    lista: [
      "Presentación ante ASEA",
      "Atención a requerimientos",
      "Entrega de estudio"
    ]
  }
];

const botones = document.getElementById("botones");
const modalesContainer = document.getElementById("modales");

modales.forEach(({ id, titulo, descripcion, tituloLista, lista }) => {
  // Crear botón
  const boton = document.createElement("button");
  boton.textContent = titulo;
  boton.className = "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700";
  boton.onclick = () => document.getElementById(id).classList.remove("hidden");
  botones.appendChild(boton);

  // Crear modal
  const modal = document.createElement("div");
  modal.id = id;
  modal.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden";

  modal.innerHTML = `
    <div class="bg-white p-6 rounded-lg max-w-md w-full relative">
      <h2 class="text-xl font-bold text-green-800 mb-4">${titulo}</h2>
      <p class="text-gray-700 mb-4">${descripcion}</p>
      <h3 class="text-green-700 font-semibold mb-2">${tituloLista}</h3>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        ${lista.map(item => `<li>${item}</li>`).join("")}
      </ul>
      <button onclick="document.getElementById('${id}').classList.add('hidden')" 
              class="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold text-lg">
        ✕
      </button>
    </div>
  `;

  modalesContainer.appendChild(modal);
});
