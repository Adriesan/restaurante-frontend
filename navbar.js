// navbar.js
function cargarNavbar(paginaActiva) {
  const html = `
    <nav class="bg-slate-800 text-white shadow-md mb-6">
      <div class="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🍽️</span>
          <span class="font-bold text-lg tracking-wide">Sistema Restaurante</span>
        </div>
        <div class="flex gap-2">
          <a href="productos.html" class="px-3 py-2 rounded-lg text-sm font-medium transition ${paginaActiva === 'productos' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700 text-slate-300'}">
            📦 Productos
          </a>
          <a href="clientes.html" class="px-3 py-2 rounded-lg text-sm font-medium transition ${paginaActiva === 'clientes' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700 text-slate-300'}">
            👥 Clientes
          </a>
          <a href="ordenes.html" class="px-3 py-2 rounded-lg text-sm font-medium transition ${paginaActiva === 'ordenes' ? 'bg-blue-600 text-white' : 'hover:bg-slate-700 text-slate-300'}">
            📝 Órdenes
          </a>
        </div>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', html);
}