export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.9602e15c.mjs';
import 'html-escaper';

const page = () => import('../../chunks/pages/sidebar.astro.108db022.mjs').then(n => n.s);

export { page };
