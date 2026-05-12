// ===== SORT STATE =====
let sortCol = 'overall';
let sortDir = 'desc';

// ===== SCORE CHIP =====
function scoreChip(val, cls = '') {
  const level = val >= 4.5 ? 'high' : val >= 3.5 ? 'mid' : 'low';
  return `<span class="score-chip ${level} ${cls}">${val.toFixed(1)}</span>`;
}

// ===== RENDER TABLE =====
function renderTable() {
  const sorted = [...TACOS].sort((a, b) => {
    let av = a[sortCol], bv = b[sortCol];
    if (sortCol === 'name') {
      av = av.toLowerCase(); bv = bv.toLowerCase();
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
    }
    return sortDir === 'asc' ? av - bv : bv - av;
  });

  const tbody = document.getElementById('rankings-body');
  tbody.innerHTML = sorted.map((t, i) => `
    <tr>
      <td class="rank-cell">${i + 1}</td>
      <td class="name-cell">
        ${t.mapsUrl ? `<a href="${t.mapsUrl}" target="_blank" rel="noopener" class="${t.notes ? 'has-note' : ''}">${t.name}</a>` : `<span class="${t.notes ? 'has-note' : ''}">${t.name}</span>`}
        ${t.notes ? `<div class="note-tooltip">${t.notes}</div>` : ''}
      </td>
      <td class="score-cell">${scoreChip(t.taco)}</td>
      <td class="score-cell">${scoreChip(t.toppings)}</td>
      <td class="score-cell">${scoreChip(t.store)}</td>
      <td class="score-cell">${scoreChip(t.overall, 'overall')}</td>
    </tr>
  `).join('');
}

// ===== TABLE SORT HEADERS =====
function initTableSort() {
  document.querySelectorAll('th.sortable').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.col;
      if (sortCol === col) {
        sortDir = sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        sortCol = col;
        sortDir = col === 'name' ? 'asc' : 'desc';
      }
      document.querySelectorAll('th.sortable').forEach(h => {
        h.classList.remove('active', 'asc', 'desc');
      });
      th.classList.add('active', sortDir);
      renderTable();
    });
  });

  const initialTh = document.querySelector(`th[data-col="overall"]`);
  if (initialTh) initialTh.classList.add('active', 'desc');
  renderTable();
}

// ===== MAP =====
function coordsFromMapsUrl(url) {
  if (!url) return null;
  const m = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  return m ? { lat: parseFloat(m[1]), lng: parseFloat(m[2]) } : null;
}

function initMap() {
  const spots = TACOS
    .map(t => ({ ...t, ...(coordsFromMapsUrl(t.mapsUrl) || {}) }))
    .filter(t => t.lat && t.lng);
  if (!spots.length) return;

  const center = spots.length === 1
    ? [spots[0].lat, spots[0].lng]
    : [
        spots.reduce((s, t) => s + t.lat, 0) / spots.length,
        spots.reduce((s, t) => s + t.lng, 0) / spots.length
      ];

  const map = L.map('map-container').setView(center, spots.length === 1 ? 15 : 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(map);

  const icon = L.divIcon({
    className: '',
    html: `<div style="
      background:#1e4fa8;
      width:28px;height:28px;
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      border:3px solid #0f2d6b;
      box-shadow:2px 2px 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -30]
  });

  spots.forEach(t => {
    const popup = `
      <div class="map-popup">
        <div class="map-popup-name">${t.name}</div>
        <div class="map-popup-address">${t.address}</div>
        <div class="map-popup-scores">
          <div class="map-popup-score-row">
            <span class="map-popup-score-label">Taco</span>
            <span class="map-popup-score-val">${t.taco.toFixed(1)}</span>
          </div>
          <div class="map-popup-score-row">
            <span class="map-popup-score-label">Toppings</span>
            <span class="map-popup-score-val">${t.toppings.toFixed(1)}</span>
          </div>
          <div class="map-popup-score-row">
            <span class="map-popup-score-label">Store</span>
            <span class="map-popup-score-val">${t.store.toFixed(1)}</span>
          </div>
          <div class="map-popup-score-row">
            <span class="map-popup-score-label">Overall</span>
            <span class="map-popup-score-val">${t.overall.toFixed(1)}</span>
          </div>
        </div>
        ${t.mapsUrl ? `<a class="map-popup-link" href="${t.mapsUrl}" target="_blank" rel="noopener">Open in Google Maps</a>` : ''}
      </div>`;
    L.marker([t.lat, t.lng], { icon }).addTo(map).bindPopup(popup);
  });
}

// ===== HAMBURGER MENU =====
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initTableSort();
  initMap();
  initHamburger();
});
