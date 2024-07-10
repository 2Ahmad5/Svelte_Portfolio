

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DykfNzYi.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.2BMn534e.js","_app/immutable/chunks/entry.Zd7kUfNy.js"];
export const stylesheets = [];
export const fonts = [];
