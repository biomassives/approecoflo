export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.9602e15c.mjs';
import 'html-escaper';

const page = () => import('../../chunks/pages/kitchen-sink.astro.7a93a300.mjs').then(n => n.k);

export { page };
