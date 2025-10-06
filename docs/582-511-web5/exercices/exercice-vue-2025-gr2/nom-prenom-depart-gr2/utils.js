export function toMinutes(t) { const [h, m] = t.split(':').map(Number); return h * 60 + m; }
export function putFeaturedFirst(list) { const c = list.slice(); c.sort((a, b) => Number(b.featured) - Number(a.featured)); return c; }
export function filterByStage(list, stage) { if (!stage) return list; const out = []; for (const a of list) { if (a.stage === stage) out.push(a); } return out; }
export function searchByName(list, q) { if (!q) return list; const n = q.toLowerCase(); const out = []; for (const a of list) { if (a.name.toLowerCase().indexOf(n) !== -1) out.push(a); } return out; }
export function sortByMode(list, mode) { const c = list.slice(); if (mode === 'time') c.sort((a, b) => toMinutes(a.start) - toMinutes(b.start)); else if (mode === 'pop') c.sort((a, b) => b.popularity - a.popularity); else c.sort((a, b) => a.name.localeCompare(b.name, 'fr')); return c; }
