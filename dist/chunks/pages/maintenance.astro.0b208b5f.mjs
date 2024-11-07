/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro.9602e15c.mjs';
import { $ as $$LayoutStacked } from './404.astro.4f7e7050.mjs';
import { $ as $$ErrorMaintenance } from './kitchen-sink.astro.7a93a300.mjs';
import 'html-escaper';
/* empty css                              */import './dashboard.astro.60d8df36.mjs';
/* empty css                               */import './forgot-password.astro.60deac49.mjs';
import './500.astro.fb7adb8d.mjs';

const $$Astro = createAstro("http://localhost:2121");
const $$Maintenance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Maintenance;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "ErrorMaintenance", $$ErrorMaintenance, {})}
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/pages/maintenance.astro", void 0);

const $$file = "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/pages/maintenance.astro";
const $$url = "/pages/maintenance";

export { $$Maintenance as default, $$file as file, $$url as url };
