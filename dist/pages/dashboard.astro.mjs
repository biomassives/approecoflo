export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import '../chunks/astro.9602e15c.mjs';
import 'html-escaper';

const page = () => import('../chunks/pages/dashboard.astro.60d8df36.mjs').then(n => n.d);

export { page };
