/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.9602e15c.mjs';
import { $ as $$LayoutStacked } from './404.astro.4f7e7050.mjs';
import { f as $$FormSignIn } from './kitchen-sink.astro.7a93a300.mjs';
import 'html-escaper';
/* empty css                              */import './dashboard.astro.60d8df36.mjs';
/* empty css                               */import './forgot-password.astro.60deac49.mjs';
import './500.astro.fb7adb8d.mjs';

const $$Astro = createAstro("http://localhost:2121");
const $$SignIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignIn;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]">
		${renderComponent($$result2, "FormSignIn", $$FormSignIn, {})}
	</div>
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/authentication/sign-in.astro", void 0);

const $$file = "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/authentication/sign-in.astro";
const $$url = "/authentication/sign-in";

export { $$SignIn as default, $$file as file, $$url as url };
