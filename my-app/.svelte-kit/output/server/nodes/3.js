

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.-F15wKrL.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.2BMn534e.js"];
export const stylesheets = ["_app/immutable/assets/3.Dfk6G7ez.css"];
export const fonts = ["_app/immutable/assets/batmfa__.DUWQignB.ttf"];
