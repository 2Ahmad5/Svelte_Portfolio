

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.krqrD6nI.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.2BMn534e.js"];
export const stylesheets = ["_app/immutable/assets/0.vqxcaV3P.css"];
export const fonts = ["_app/immutable/assets/batmfa__.DUWQignB.ttf"];
