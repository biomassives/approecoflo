/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro.9602e15c.mjs';
import { $ as $$LayoutSidebar } from './dashboard.astro.60d8df36.mjs';
import { b as $$CrudProducts } from './kitchen-sink.astro.7a93a300.mjs';
import 'html-escaper';
import './404.astro.4f7e7050.mjs';
/* empty css                              *//* empty css                               */import './forgot-password.astro.60deac49.mjs';
import './500.astro.fb7adb8d.mjs';

const $$Astro = createAstro("http://localhost:2121");
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Products;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "CrudProducts", $$CrudProducts, {})}
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/crud/products.astro", void 0);

const $$file = "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/crud/products.astro";
const $$url = "/crud/products";

export { $$Products as default, $$file as file, $$url as url };
