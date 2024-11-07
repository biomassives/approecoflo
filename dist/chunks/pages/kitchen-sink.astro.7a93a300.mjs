/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderComponent, s as spreadAttributes } from '../astro.9602e15c.mjs';
import { $ as $$LayoutSidebar } from './dashboard.astro.60d8df36.mjs';
import { a as asset, f as fetchData, u as url, d as $$ErrorNotFound } from './404.astro.4f7e7050.mjs';
import { $ as $$FormForgotPassword } from './forgot-password.astro.60deac49.mjs';
import { $ as $$ErrorServer } from './500.astro.fb7adb8d.mjs';

const $$Astro$9 = createAstro("http://localhost:2121");
const $$FormResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FormResetPassword;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-gray-900">
	<a href="#" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
		<img${addAttribute(asset("images/logo.svg"), "src")} alt="FlowBite Logo" class="mr-4 h-11">
		<span>Flowbite</span>
	</a>

	<!-- Card -->
	<div class="w-full max-w-xl p-6 space-y-8 bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-white">
			Reset your password
		</h2>
		<form class="mt-8 space-y-6" action="#">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
				<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required>
			</div>
			<div>
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
				<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
			</div>
			<div>
				<label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm New Password</label>
				<input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
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
</div>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/modules/FormResetPassword.astro", void 0);

const $$Astro$8 = createAstro("http://localhost:2121");
const $$FormProfileLock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$FormProfileLock;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-gray-900">
	<a href="#" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
		<img${addAttribute(asset("images/logo.svg"), "src")} alt="FlowBite Logo" class="mr-4 h-11">
		<span>Flowbite</span>
	</a>
	<!-- Card -->
	<div class="w-full max-w-md bg-white rounded-lg shadow md:mt-0 xl:p-0 dark:bg-gray-800">
		<div class="w-full p-6 sm:p-8">
			<div class="flex space-x-4">
				<img class="w-8 h-8 rounded-full"${addAttribute(asset("images/users/bonnie-green.png"), "src")} alt="Bonnie image">
				<h2 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
					Bonnie Green
				</h2>
			</div>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400">
				Better to be safe than sorry.
			</p>
			<form class="mt-8 space-y-6" action="#">
				<div>
					<label for="profile-lock" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
					<input type="password" name="profile-lock" id="profile-lock" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required>
				</div>
				<div class="flex items-start">
					<div class="flex items-center h-5">
						<input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required>
					</div>
					<div class="ml-3 text-sm">
						<label for="remember" class="font-medium text-gray-900 dark:text-white">I accept the <a href="#" class="text-primary-700 hover:underline dark:text-primary-500">Terms and Conditions</a></label>
					</div>
				</div>
				<button type="submit" class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
					<svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path></svg>
					Unlock
				</button>
			</form>
		</div>
	</div>
</div>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/modules/FormProfileLock.astro", void 0);

const $$Astro$7 = createAstro("http://localhost:2121");
const $$FormSignIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FormSignIn;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-gray-900">
	<a href="#" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
		<img${addAttribute(asset("images/logo.svg"), "src")} alt="FlowBite Logo" class="mr-4 h-11">
		<span>Flowbite</span>
	</a>
	<!-- Card -->
	<div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-white">
			Sign in to platform
		</h2>
		<form class="mt-8 space-y-6" action="#">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
				<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required>
			</div>
			<div>
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
				<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
			</div>
			<div class="flex items-start flex-wrap">
				<div class="flex items-center h-5">
					<input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required>
				</div>
				<div class="ml-3 text-sm">
					<label for="remember" class="font-medium text-gray-900 dark:text-white">Remember me</label>
				</div>
				<a href="#" class="ml-auto mt-4 text-left text-sm text-primary-700 hover:underline dark:text-primary-500 w-full">Lost Password?</a>
			</div>
			<button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login to your account</button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
				Not registered? <a class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
			</div>
		</form>
	</div>
</div>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/modules/FormSignIn.astro", void 0);

const $$Astro$6 = createAstro("http://localhost:2121");
const $$FormSignUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FormSignUp;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-gray-900">
	<a href="#" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
		<img${addAttribute(asset("images/logo.svg"), "src")} alt="FlowBite Logo" class="mr-4 h-11">
		<span>Flowbite</span>
	</a>
	<!-- Card -->
	<div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-white">
			Create a Free Account
		</h2>
		<form class="mt-8 space-y-6" action="#">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
				<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required>
			</div>
			<div>
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
				<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
			</div>
			<div>
				<label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
				<input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
			</div>
			<div class="flex items-start">
				<div class="flex items-center h-5">
					<input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required>
				</div>
				<div class="ml-3 text-sm">
					<label for="remember" class="font-medium text-gray-900 dark:text-white">I accept the <a href="#" class="text-primary-700 hover:underline dark:text-primary-500">Terms and Conditions</a></label>
				</div>
			</div>
			<button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create account</button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
				Already have an account? <a href="#" class="text-primary-700 hover:underline dark:text-primary-500">Login here</a>
			</div>
		</form>
	</div>
</div>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/modules/FormSignUp.astro", void 0);

const $$Astro$5 = createAstro("http://localhost:2121");
const $$NavPagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NavPagination;
  return renderTemplate`${renderComponent($$result, "nav-pagination", "nav-pagination", { "class": "block sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700" }, { "default": () => renderTemplate`
	${maybeRenderHead()}<div class="flex items-center mb-4 sm:mb-0">
		<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
			<svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
		</a>
		<a href="#" class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
			<svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
		</a>
		<span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">1-20</span> of <span class="font-semibold text-gray-900 dark:text-white">2290</span></span>
	</div>
	<div class="flex items-center space-x-3">
		<a href="#" class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
			<svg class="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
			Previous
		</a>
		<a href="#" class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
			Next
			<svg class="w-5 h-5 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
		</a>
	</div>
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/components/NavPagination.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:2121");
const $$CrudProducts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CrudProducts;
  const products = await fetchData("products");
  return renderTemplate`${renderComponent($$result, "entities-crud", "entities-crud", { "type": "products" }, { "default": () => renderTemplate`
	${maybeRenderHead()}<div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
		<div class="w-full mb-1">
			<div class="mb-4">
				<nav class="flex mb-5" aria-label="Breadcrumb">
					<ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
						<li class="inline-flex items-center">
							<a href="#" class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
								<svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
								Home
							</a>
						</li>
						<li>
							<div class="flex items-center">
								<svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
								<a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">E-commerce</a>
							</div>
						</li>
						<li>
							<div class="flex items-center">
								<svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
								<span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">Products</span>
							</div>
						</li>
					</ol>
				</nav>
				<h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
					All products
				</h1>
			</div>
			<div class="items-center justify-between block sm:flex">
				<div class="flex items-center mb-4 sm:mb-0">
					<form class="sm:pr-3" action="#" method="GET">
						<label for="products-search" class="sr-only">Search</label>
						<div class="relative w-48 mt-1 sm:w-64 xl:w-96">
							<input type="text" name="email" id="products-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search for products">
						</div>
					</form>
					<div class="flex items-center w-full sm:justify-end">
						<div class="flex pl-2 space-x-1">
							<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
							</a>
							<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
							</a>
							<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
							</a>
							<a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
							</a>
						</div>
					</div>
				</div>

				<div class="flex items-center ml-auto space-x-2 sm:space-x-3">
					<button type="button" data-refresh class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
						<svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
						</svg>
						Refresh
					</button>
					<button id="createProductButton" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button" data-drawer-target="drawer-create-product-default" data-drawer-show="drawer-create-product-default" aria-controls="drawer-create-product-default" data-drawer-placement="right">
						<svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
						Add product
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-col">
		<div class="overflow-x-auto">
			<div class="inline-block min-w-full align-middle">
				<div class="overflow-hidden shadow">
					<table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
						<thead class="bg-gray-100 dark:bg-gray-700">
							<tr>
								<th scope="col" class="p-4">
									<div class="flex items-center">
										<input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
										<label for="checkbox-all" class="sr-only">checkbox</label>
									</div>
								</th>

								${[
    "Product Name",
    "Technology",
    "Description",
    "ID",
    "Price",
    "Discount",
    "Actions"
  ].map((th) => renderTemplate`<th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
											${th}
										</th>`)}
							</tr>
						</thead>

						<tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
							${products.map((product) => renderTemplate`<tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
										<td class="w-4 p-4">
											<div class="flex items-center">
												<input${addAttribute(`checkbox-${product.id}`, "id")} aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
												<label${addAttribute(`checkbox-${product.id}`, "for")} class="sr-only">
													checkbox
												</label>
											</div>
										</td>
										<td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
											<div class="text-base font-semibold text-gray-900 dark:text-white">
												<data value="name">${product.name}</data>
											</div>
											<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
												<data value="category">${product.category}</data>
											</div>
										</td>
										<td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
											<data value="technology">${product.technology}</data>
										</td>
										<td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
											<data value="description">${product.description}</data>
										</td>
										<td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
											#<data value="id">${product.id}</data>
										</td>
										<td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
											<data value="price">${product.price}</data>
										</td>
										<td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
											<data value="discount">${product.discount}</data>
										</td>

										<td class="p-4 space-x-2 whitespace-nowrap">
											<button type="button" id="updateProductButton" data-drawer-target="drawer-update-product-default" data-drawer-show="drawer-update-product-default" aria-controls="drawer-update-product-default" data-drawer-placement="right" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
												<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<svg>
														<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
														<path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
													</svg>
												</svg>
												Update
											</button>
											<button type="button" id="deleteProductButton" data-drawer-target="drawer-delete-product-default" data-drawer-show="drawer-delete-product-default" aria-controls="drawer-delete-product-default" data-drawer-placement="right" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
												<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
												</svg>
												Delete item
											</button>
										</td>
									</tr>`)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<!-- Edit Product Drawer -->
	<div id="drawer-update-product-default" class="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label" aria-hidden="true">
		<h5 id="drawer-label" class="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
			Update Product
		</h5>
		<button type="button" data-drawer-dismiss="drawer-update-product-default" aria-controls="drawer-update-product-default" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
			<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
			<span class="sr-only">Close menu</span>
		</button>

		<form action="#"></form>
			<div class="space-y-4">
				<div>
					<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
					<input type="text" name="title" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Education Dashboard" placeholder="Type product name" required="">
				</div>
				<div>
					<label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technology</label>
					<select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
						<option selected="">Flowbite</option>
						<option value="RE">React</option>
						<option value="AN">Angular</option>
						<option value="VU">Vue JS</option>
					</select>
				</div>
				<div>
					<label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
					<input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="2999" placeholder="$149" required="">
				</div>
				<div>
					<label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
					<textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter event description here">Start developing with an open-source library of over 450+ UI
						components, sections, and pages built with the utility classes from
						Tailwind CSS and designed in Figma.</textarea>
				</div>
				<div>
					<label for="discount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount</label>
					<select id="discount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
						<option selected="">No</option>
						<option value="5">5%</option>
						<option value="10">10%</option>
						<option value="20">20%</option>
						<option value="30">30%</option>
						<option value="40">40%</option>
						<option value="50">50%</option>
					</select>
				</div>
			</div>
			<div class="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute sm:px-4 sm:mt-0">
				<button type="submit" class="w-full justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
					Update
				</button>
				<button type="button" class="w-full justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
					<svg aria-hidden="true" class="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
					Delete
				</button>
			</div>
		
	</div>

	<!-- Delete Product Drawer -->
	<div id="drawer-delete-product-default" class="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label" aria-hidden="true">
		<h5 id="drawer-label" class="inline-flex items-center text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
			Delete item
		</h5>
		<button type="button" data-drawer-dismiss="drawer-delete-product-default" aria-controls="drawer-delete-product-default" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
			<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
			<span class="sr-only">Close menu</span>
		</button>
		<svg class="w-10 h-10 mt-8 mb-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
		<h3 class="mb-6 text-lg text-gray-500 dark:text-gray-400">
			Are you sure you want to delete this product?
		</h3>
		<a href="#" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-900">
			Yes, I'm sure
		</a>
		<a href="#" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" data-modal-target="delete-product-modal" data-modal-toggle="delete-product-modal">
			No, cancel
		</a>
	</div>

	<!-- Add Product Drawer -->
	<div id="drawer-create-product-default" class="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label" aria-hidden="true">
		<h5 id="drawer-label" class="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
			New Product
		</h5>
		<button type="button" data-drawer-dismiss="drawer-create-product-default" aria-controls="drawer-create-product-default" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
			<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
			<span class="sr-only">Close menu</span>
		</button>
		<form action="#">
			<div class="space-y-4">
				<div>
					<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
					<input type="text" name="title" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
				</div>

				<div>
					<label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
					<input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="">
				</div>
				<div>
					<label for="category-create" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technology</label>
					<select id="category-create" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
						<option selected="">Select category</option>
						<option value="FL">Flowbite</option>
						<option value="RE">React</option>
						<option value="AN">Angular</option>
						<option value="VU">Vue</option>
					</select>
				</div>
				<div>
					<label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
					<textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter event description here"></textarea>
				</div>
				<div>
					<label for="discount-create" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount</label>
					<select id="discount-create" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
						<option selected="">No</option>
						<option value="5">5%</option>
						<option value="10">10%</option>
						<option value="20">20%</option>
						<option value="30">30%</option>
						<option value="40">40%</option>
						<option value="50">50%</option>
					</select>
				</div>
				<div class="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
					<button type="submit" class="text-white w-full justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
						Add product
					</button>
					<button type="button" data-drawer-dismiss="drawer-create-product-default" aria-controls="drawer-create-product-default" class="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
						<svg aria-hidden="true" class="w-5 h-5 -ml-1 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
						Cancel
					</button>
				</div>
			</div>
		</form>
	</div>

	${renderComponent($$result, "NavPagination", $$NavPagination, {})}
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/modules/CrudProducts.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:2121");
const $$ErrorMaintenance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ErrorMaintenance;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
	<div class="block mb-5 md:max-w-md">
		<img${addAttribute(asset("images/illustrations/maintenance.svg"), "src")} alt="maintenance image">
	</div>
	<div class="text-center xl:max-w-4xl">
		<h1 class="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
			Under Maintenance
		</h1>
		<p class="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">
			Sorry for the inconvenience but we’re performing some maintenance at the
			moment. If you need to you can always <a${addAttribute("#", "href")} class="text-primary-700 hover:underline dark:text-primary-500">contact us</a>, otherwise we’ll be back online shortly!.
		</p>
		<a${addAttribute(url(), "href")} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
			<svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
			Go back home
		</a>
	</div>
</div>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/modules/ErrorMaintenance.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:2121");
const $$ToggleSwitch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ToggleSwitch;
  const { id, checked = false, class: clazz, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(id, "for")}${addAttribute(["relative flex items-center cursor-pointer", clazz], "class:list")}${spreadAttributes(attrs)}>
	<input type="checkbox"${addAttribute(id, "id")} class="sr-only"${addAttribute(checked, "checked")}>
	<span${addAttribute([
    "bg-gray-200 dark:bg-gray-700 ",
    "border-gray-200 dark:border-gray-600",
    "h-6 rounded-full w-11 toggle-bg border"
  ], "class:list")}></span>
</label>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/components/ToggleSwitch.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:2121");
const $$PricingPlan = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PricingPlan;
  return renderTemplate`${maybeRenderHead()}<div class="container px-4 pt-24 mx-auto md:pt-32 lg:px-0 dark:bg-gray-900">
	<h1 class="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none sm:tracking-tight dark:text-white">
		Our pricing plan made simple
	</h1>
	<p class="mb-6 text-lg font-normal text-gray-500 sm:text-xl dark:text-gray-400">
		All types of businesses need access to development resources, so we give you
		the option to decide how much you need to use.
	</p>
	<div class="flex items-center">
		<span class="text-base font-medium text-gray-900 dark:text-white">
			Monthly
		</span>

		${renderComponent($$result, "ToggleSwitch", $$ToggleSwitch, { "id": "toggle-example", "class": "mx-4" })}

		<span class="text-base font-medium text-gray-500 dark:text-gray-400">
			Yearly
		</span>
	</div>
	<!-- Pricing Cards -->
	<section class="grid grid-cols-1 space-y-12 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-6 pt-9">
		<!-- Pricing Card -->
		<div class="flex flex-col max-w-lg p-6 mx-auto text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 xl:p-8 dark:bg-gray-800 dark:text-white">
			<h3 class="mb-4 text-2xl font-semibold">Starter</h3>
			<p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
				Best option for personal use & for your next project.
			</p>
			<div class="flex items-baseline my-8">
				<span class="mr-2 text-5xl font-extrabold">$29</span>
				<span class="text-gray-500 dark:text-gray-400">/month</span>
			</div>
			<!-- List -->
			<ul role="list" class="mb-8 space-y-4 text-left">
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Individual configuration</span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>No setup, or hidden fees</span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Team size: <span class="font-semibold">1 developer</span></span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Premium support: <span class="font-semibold">6 months</span></span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Free updates: <span class="font-semibold">6 months</span></span>
				</li>
			</ul>
			<a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a>
		</div>
		<!-- Pricing Card -->
		<div class="flex flex-col max-w-lg p-6 mx-auto text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 xl:p-8 dark:bg-gray-800 dark:text-white">
			<h3 class="mb-4 text-2xl font-semibold">Company</h3>
			<p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
				Relevant for multiple users, extended & premium support.
			</p>
			<div class="flex items-baseline my-8">
				<span class="mr-2 text-5xl font-extrabold">$99</span>
				<span class="text-gray-500 dark:text-gray-400" dark:text-gray-400>/month</span>
			</div>
			<!-- List -->
			<ul role="list" class="mb-8 space-y-4 text-left">
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Individual configuration</span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>No setup, or hidden fees</span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Team size: <span class="font-semibold">10 developers</span></span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Premium support: <span class="font-semibold">24 months</span></span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Free updates: <span class="font-semibold">24 months</span></span>
				</li>
			</ul>
			<a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a>
		</div>
		<!-- Pricing Card -->
		<div class="flex flex-col max-w-lg p-6 mx-auto text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 xl:p-8 dark:bg-gray-800 dark:text-white">
			<h3 class="mb-4 text-2xl font-semibold">Enterprise</h3>
			<p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
				Best for large scale uses and extended redistribution rights.
			</p>
			<div class="flex items-baseline my-8">
				<span class="mr-2 text-5xl font-extrabold">$499</span>
				<span class="text-gray-500 dark:text-gray-400">/month</span>
			</div>
			<!-- List -->
			<ul role="list" class="mb-8 space-y-4 text-left">
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Individual configuration</span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>No setup, or hidden fees</span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Team size: <span class="font-semibold">100+ developers</span></span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Premium support: <span class="font-semibold">36 months</span></span>
				</li>
				<li class="flex items-center space-x-3">
					<!-- Icon -->
					<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
					<span>Free updates: <span class="font-semibold">36 months</span></span>
				</li>
			</ul>
			<a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a>
		</div>
	</section>
	<!-- Comparison Table -->
	<section class="flex flex-col pt-10 md:pt-20">
		<div class="overflow-x-auto rounded-lg">
			<div class="inline-block min-w-full align-middle">
				<div class="overflow-hidden shadow sm:rounded-lg">
					<table class="min-w-full">
						<thead class="bg-gray-50 dark:bg-gray-900">
							<tr>
								<th scope="col" class="p-4 text-left"> </th>
								<th scope="col" class="p-4 text-base font-semibold tracking-wider text-right text-gray-900 dark:text-white">
									Freelancer
								</th>
								<th scope="col" class="p-4 text-base font-semibold tracking-wider text-right text-gray-900 dark:text-white">
									Company
								</th>
								<th scope="col" class="p-4 text-base font-semibold tracking-wider text-right text-gray-900 dark:text-white">
									Enterprise
								</th>
							</tr>
						</thead>
						<tbody class="bg-white dark:bg-gray-800">
							<tr>
								<td class="p-4 text-base font-normal text-gray-500 rounded-l-lg whitespace-nowrap dark:text-gray-400">
									Seperate business/personal
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4 rounded-r-lg">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
							</tr>
							<tr class="bg-gray-50 dark:bg-gray-900">
								<td class="p-4 text-base font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
									Estimate tax payments
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4 rounded-r-lg">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
							</tr>
							<tr>
								<td class="p-4 text-base font-normal text-gray-500 rounded-l-lg whitespace-nowrap dark:text-gray-400">
									Stock control
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4 rounded-r-lg">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
							</tr>
							<tr class="bg-gray-50 dark:bg-gray-900">
								<td class="p-4 text-base font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
									Create invoices & estimates
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4 rounded-r-lg">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
							</tr>
							<tr>
								<td class="p-4 text-base font-normal text-gray-500 rounded-l-lg whitespace-nowrap dark:text-gray-400">
									Manage bills & payments
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4 rounded-r-lg">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
							</tr>
							<tr class="bg-gray-50 dark:bg-gray-900">
								<td class="p-4 text-base font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
									Run payroll
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4 rounded-r-lg">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
							</tr>
							<tr>
								<td class="p-4 text-base font-normal text-gray-500 rounded-l-lg whitespace-nowrap dark:text-gray-400">
									Handle multiple currencies
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4 rounded-r-lg">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
							</tr>
							<tr class="bg-gray-50 dark:bg-gray-900">
								<td class="p-4 text-base font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
									Number of Users
								</td>
								<td class="p-4">
									<div class="flex items-center justify-end space-x-1">
										<svg class="flex-shrink-0 w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
										<span class="flex-shrink-0 text-xs font-medium text-gray-900 sm:text-sm md:text-base dark:text-white">1 User</span>
									</div>
								</td>
								<td class="p-4">
									<div class="flex items-center justify-end space-x-1">
										<svg class="flex-shrink-0 w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
										<span class="flex-shrink-0 text-xs font-medium text-gray-900 sm:text-sm md:text-base dark:text-white">5-10 Users</span>
									</div>
								</td>
								<td class="p-4 rounded-r-lg">
									<div class="flex items-center justify-end space-x-1">
										<svg class="flex-shrink-0 w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
										<span class="flex-shrink-0 text-xs font-medium text-gray-900 sm:text-sm md:text-base dark:text-white">20+ Users</span>
									</div>
								</td>
							</tr>
							<tr>
								<td class="p-4 text-base font-normal text-gray-500 rounded-l-lg whitespace-nowrap dark:text-gray-400">
									Track deductible mileage
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4 rounded-r-lg">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
							</tr>
							<tr class="bg-gray-50 dark:bg-gray-900">
								<td class="p-4 text-base font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
									Track employee time
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4 rounded-r-lg">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
							</tr>
							<tr>
								<td class="p-4 text-base font-normal text-gray-500 rounded-l-lg whitespace-nowrap dark:text-gray-400">
									Multi-device
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4">
									<svg class="w-5 h-5 ml-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</td>
								<td class="p-4 rounded-r-lg">
									<svg class="w-5 h-5 ml-auto text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
	<section class="pt-20">
		<h2 class="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none sm:tracking-tight dark:text-white">
			Frequently asked questions
		</h2>
		<p class="mb-6 text-lg font-normal text-gray-500 sm:text-xl dark:text-gray-400">
			All types of businesses need access to development resources, so we give
			you the option to decide how much you need to use.
		</p>
		<hr class="my-6 border-gray-200 md:my-12 dark:border-gray-800">
		<div class="grid gap-8 lg:grid-cols-3">
			<div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						What do you mean by "Figma assets"?
					</h3>
					<p class="text-gray-600 dark:text-gray-400">
						You will have access to download the full Figma project including
						all of the pages, the components, responsive pages, and also the
						icons, illustrations, and images included in the screens.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						What does "lifetime access" exactly mean?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Once you have purchased either the design, code, or both packages,
						you will have access to all of the future updates based on the
						roadmap, free of charge.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						How does support work?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						We're aware of the importance of well qualified support, that is why
						we decided that support will only be provided by the authors that
						actually worked on this project.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Feel free to <a href="#" class="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500" target="_blank" rel="noreferrer">contact us</a> and we'll help you out as soon as we can.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						I want to build more than one project with FlowBite. Is that
						allowed?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						You can use FlowBite for an unlimited amount of projects, whether
						it's a personal website, a SaaS app, or a website for a client. As
						long as you don't build a product that will directly compete with
						FlowBite either as a UI kit, theme, or template, it's fine.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Find out more information by <a href="/license" class="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500">
							reading the license
						</a>.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						What does "free updates" include?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						The free updates that will be provided is based on the <a href="#" class="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500">roadmap</a> that we have laid out for this project. It is also possible that we
						will provide extra updates outside of the roadmap as well.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						What does the free version include?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						The <a href="#" class="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500">free version</a> of FlowBite includes a minimal style guidelines, component variants,
						and a dashboard page with the mobile version alongside it.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						You can use this version for any purposes, because it is open-source
						under the MIT license.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						What is the difference between FlowBite and Tailwind UI?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Although both FlowBite and Tailwind UI are built for integration
						with Tailwind CSS, the main difference is in the design, the pages,
						the extra components and UI elements that FlowBite includes.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Additionally, FlowBite is a project that is still in development,
						and later it will include both the application, marketing, and
						e-commerce UI interfaces.
					</p>
				</div>
			</div>
			<div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						How do I purchase a license for my entire team?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						You can purchase a license that you can share with your entire team
						here:
					</p>
					<ul class="pl-4 mb-4 list-disc">
						<li class="mb-2 text-gray-600">
							<span class="font-medium cursor-pointer text-primary-600 hover:underline dark:text-primary-500">Figma Files - Buy a team license for $299 USD</span>
						</li>
						<li class="mb-2 text-gray-600">
							<span class="font-medium cursor-pointer text-primary-600 hover:underline dark:text-primary-500">Figma Files + Tailwind CSS code pre-order - Buy a team license
								for <del>$699</del> $559 USD</span>
						</li>
						<li class="mb-4 text-gray-600 dark:text-gray-400">
							<span class="font-medium cursor-pointer text-primary-600 hover:underline dark:text-primary-500">Tailwind CSS code pre-order - Buy a team license for <del>$399</del> $319 USD</span>
						</li>
					</ul>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Please use a single account to share with your team to access the
						download files.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						Can I build/sell templates or themes using FlowBite?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						It is not allowed to use FlowBite or parts of the project to build
						themes, templates, UI kits, or page builders.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Find out more information by <a href="/license" class="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500">
							reading the license
						</a>.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						Can I use FlowBite in open-source projects?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Generally, it is accepted to use FlowBite in open-source projects,
						as long as it is not a UI library, a theme, a template, a
						page-builder that would be considered as an alternative to FlowBite
						itself.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						With that being said, feel free to use this design kit for your
						open-source projects.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Find out more information by <a href="/license" class="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500">
							reading the license
						</a>.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						Can I use FlowBite for commercial purposes?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Absolutely! You can use this design kit to build any type of
						commercial business, whether it's a SaaS, an e-commerce app, an
						application UI.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						As long as it is not a design resource that you will re-sell, it is
						alright to use it for commercial purposes.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Find out more information by <a href="/license" class="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500">
							reading the license
						</a>.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						Can I get an invoice?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						After opening the checkout process, you will be able to add all of
						your personal or company information that you want to be available
						on the invoice. After the purchase, you will get an email with the
						invoice.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						If you forgot to complete the information, or you didn't get the
						invoice by email, feel free to <a href="#" class="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500" target="_blank" rel="noreferrer">contact us</a> and help you out with the invoice.
					</p>
				</div>
			</div>
			<div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						When will I get access to the Tailwind CSS code if I pre-ordered it?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						The official date that we have set out to release the code version
						of FlowBite is the <span class="font-medium text-gray-900">25th of September, 2021</span>. We are already working on the integration and if you have a
						pre-order, you will also get frequent updates about the progress.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						You'll be one of the first to know when it will be available.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						What is your refund policy?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						If you are unhappy with your purchase, just <a href="#" class="font-medium underline text-primary-600 hover:no-underline dark:text-primary-500" target="_blank" rel="noreferrer">contact us</a> within 30 days and we'll issue a full refund.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						Is it allowed to use the design assets, such as the fonts, icons,
						and illustrations?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						What you see is what you get. Which means that all icons, fonts, and
						illustrations can be used based on the licensing that we researched
						or purchased. For example, we purchased rights to use the
						illustrations in Flowbite.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						Where can I access my download files?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						After you purchased one of the plans, you will get two emails: one
						for the invoice, and another one with the download files.
					</p>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						Soon we will create a way that you will be able to access the
						download files from the FlowBite dashboard from this website.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						I have a company registered for VAT. Where can I add the VAT for the
						invoice?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						After initializing the checkout process from Paddle, you will be
						able to see a text "Add VAT code". Click on that, and add the VAT
						code for your company. This will also remove the extra VAT tax from
						the purchase.
					</p>
				</div>
				<div class="mb-10">
					<h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
						Why would I pre-order the Tailwind CSS code?
					</h3>
					<p class="mb-4 text-gray-600 dark:text-gray-400">
						If you decide to pre-order the Tailwind CSS code, which will arrive
						on the 25th of September 2021, you can get a base 20% price
						reduction and purchase it only for $119, instead of $149.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/modules/PricingPlan.astro", void 0);

const actions = [
  { text: "Soft re-fetch (API)", action: "refetchCrudData" },
  { text: "Hard reload (SSR)", action: "hardReloadPage" }
];

const $$Astro = createAstro("http://localhost:2121");
const $$KitchenSink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$KitchenSink;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, { "class": "bg-slate-800 text-slate-100 mb-20 py-16 px-8" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<h1 class="text-3xl ml-8 lg:text-4xl xl:text-7xl font-bold">
		🕹&nbsp;Playground
	</h1>

	${renderComponent($$result2, "dummy-spacer", "dummy-spacer", { "class": "block mb-36" })}

	<nav${addAttribute([
    "flex align-middle justify-center z-50",
    "top-2 p-4 bg-gray-800/30 w-full sticky border-slate-800",
    "border-x-red-200 backdrop-blur-md text-white bg-gradient-to-r",
    "from-slate-700/30 via-slate-700 to-slate-700/30",
    "hover:from-slate-500/30 hover:to-slate-500/30",
    "focus:ring-4 focus:outline-none focus:ring-blue-300",
    "dark:focus:ring-blue-800 shadow-lg shadow-slate-800/50",
    "dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg",
    "text-sm px-5 py-2.5 text-center mr-2 mb-2"
  ], "class:list")}>
		${actions.map((button) => renderTemplate`<button type="button"${addAttribute(button.action, "data-action")}${addAttribute([
    "mx-8",
    button.action === "hardReloadPage" && "bg-gray-800",
    "text-white bg-blue-700 hover:bg-blue-800",
    "focus:outline-none focus:ring-4 focus:ring-blue-300",
    "font-medium rounded-full text-sm px-5 py-2.5",
    "text-center mr-2 my-2 dark:bg-blue-600",
    "dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  ], "class:list")}>
					${button.text}
				</button>`)}
	</nav>

	<section>
		<h2 class="text-5xl font-bold m-8 mt-24">CRUD — Products</h2>
		${renderComponent($$result2, "CrudProducts", $$CrudProducts, { "class": "p-4 lg:p-16" })}
	</section>

	

	<section>
		<h2 class="text-5xl font-bold m-8 mt-24">Forms — User</h2>

		<div class="flex justify-between flex-wrap">
			${renderComponent($$result2, "FormSignIn", $$FormSignIn, { "class": "p-4 lg:p-16" })}
			${renderComponent($$result2, "FormResetPassword", $$FormResetPassword, { "class": "p-4 lg:p-16" })}
			${renderComponent($$result2, "FormProfileLock", $$FormProfileLock, { "class": "p-4 lg:p-16" })}
		</div>
		<div class="mt-12 flex justify-between flex-wrap">
			${renderComponent($$result2, "FormSignUp", $$FormSignUp, { "class": "p-4 lg:p-16" })}
			${renderComponent($$result2, "FormForgotPassword", $$FormForgotPassword, { "class": "p-4 lg:p-16" })}
		</div>
	</section>

	<section>
		<h2 class="text-5xl font-bold m-8 mt-24">Pricing plan</h2>

		<div class="bg-slate-50 mb-8 lg:p-16">
			${renderComponent($$result2, "PricingPlan", $$PricingPlan, { "class": "p-4 lg:p-16" })}
		</div>
	</section>

	<section>
		<h2 class="text-5xl font-bold m-8 mt-24">Pages — Errors</h2>
		<div class="flex flex-wrap justify-around gap-8">
			<div class="bg-slate-50 mb-8 lg:p-16">
				${renderComponent($$result2, "ErrorMaintenance", $$ErrorMaintenance, { "class": "p-4" })}
			</div>
			<div class="bg-slate-50 mb-8 lg:p-16">
				${renderComponent($$result2, "ErrorNotFound", $$ErrorNotFound, { "class": "p-4" })}
			</div>
			<div class="bg-slate-50 mb-8 lg:p-16">
				${renderComponent($$result2, "ErrorServer", $$ErrorServer, { "class": "p-4" })}
			</div>
		</div>
	</section>
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/playground/kitchen-sink.astro", void 0);

const $$file = "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/playground/kitchen-sink.astro";
const $$url = "/playground/kitchen-sink";

const kitchenSink = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KitchenSink,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ErrorMaintenance as $, $$PricingPlan as a, $$CrudProducts as b, $$FormProfileLock as c, $$FormResetPassword as d, $$ToggleSwitch as e, $$FormSignIn as f, $$FormSignUp as g, $$NavPagination as h, kitchenSink as k };
