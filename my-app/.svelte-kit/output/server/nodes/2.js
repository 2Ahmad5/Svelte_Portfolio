

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BeBVxxwJ.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.2BMn534e.js"];
export const stylesheets = ["_app/immutable/assets/2.Csqg-YCg.css"];
export const fonts = ["_app/immutable/assets/batmfa__.DUWQignB.ttf"];