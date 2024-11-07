/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro.9602e15c.mjs';
import { $ as $$LayoutStacked } from './404.astro.4f7e7050.mjs';
import { a as $$PricingPlan } from './kitchen-sink.astro.7a93a300.mjs';
import 'html-escaper';
/* empty css                              */import './dashboard.astro.60d8df36.mjs';
/* empty css                               */import './forgot-password.astro.60deac49.mjs';
import './500.astro.fb7adb8d.mjs';

const $$Astro = createAstro("http://localhost:2121");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "PricingPlan", $$PricingPlan, {})}
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/pages/pricing.astro", void 0);

const $$file = "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/pages/pricing.astro";
const $$url = "/pages/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
