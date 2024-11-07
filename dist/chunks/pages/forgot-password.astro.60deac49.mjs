/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderComponent } from '../astro.9602e15c.mjs';
import { a as asset, $ as $$LayoutStacked } from './404.astro.4f7e7050.mjs';

const $$Astro$1 = createAstro("http://localhost:2121");
const $$FormForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormForgotPassword;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-gray-900">
	<a href="#" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
		<img${addAttribute(asset("images/logo.svg"), "src")} alt="FlowBite Logo" class="mr-4 h-11">
		<span>Flowbite</span>
	</a>
	<!-- Card -->
	<div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
		<div class="w-full p-6 sm:p-8">
			<h2 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
				Forgot your password?
			</h2>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400">
				Don't fret! Just type in your email and we will send you a code to reset
				your password!
			</p>
			<form class="mt-8 space-y-6" action="#">
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
					<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required>
				</div>
				<div class="flex items-start">
					<div class="flex items-center h-5">
						<input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required>
					</div>
					<div class="ml-3 text-sm">
						<label for="remember" class="font-medium text-gray-900 dark:text-white">I accept the <a href="#" class="text-primary-700 hover:underline dark:text-primary-500">Terms and Conditions</a></label>
					</div>
				</div>
				<button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset password</button>
			</form>
		</div>
	</div>
</div>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/modules/FormForgotPassword.astro", void 0);

const $$Astro = createAstro("http://localhost:2121");
const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ForgotPassword;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]">
		${renderComponent($$result2, "FormForgotPassword", $$FormForgotPassword, {})}
	</div>
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/authentication/forgot-password.astro", void 0);

const $$file = "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/authentication/forgot-password.astro";
const $$url = "/authentication/forgot-password";

const forgotPassword = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ForgotPassword,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormForgotPassword as $, forgotPassword as f };
