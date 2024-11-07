/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, d as addAttribute, e as renderHead, f as renderComponent } from '../astro.9602e15c.mjs';
/* empty css                              */
const $$Astro$6 = createAstro("http://localhost:2121");
const $$CopyrightNotice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CopyrightNotice;
  return renderTemplate`${maybeRenderHead()}<p class="my-10 text-sm text-center text-gray-500">
	&copy; 2019 - ${( new Date()).getFullYear()} —
	<a href="https://flowbite.com/" class="hover:underline" target="_blank">Flowbite.com</a>. All rights reserved.
</p>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/components/CopyrightNotice.astro", void 0);

const name = "flowbite-astro-admin-dashboard";
const version = "1.0.2";
const description = "A free and open-source admin dashboard template built with Tailwind CSS, Flowbite and Astro";
const keywords = [
	"tailwind",
	"tailwind css",
	"flowbite",
	"admin dashboard",
	"dashboard ui",
	"admin dashboard template",
	"html",
	"css",
	"astro",
	"astro-theme",
	"astro-template",
	"javascript"
];
const homepage = "https://flowbite.com";
const bugs = "https://github.com/themesberg/flowbite-astro-admin-dashboard/issues";
const repository = "https://github.com/themesberg/flowbite-astro-admin-dashboard.git";
const license = "MIT";
const author = "Bergside Inc.";
const contributors = [
	"Zoltán Szőgyényi <https://twitter.com/zoltanszogyenyi>",
	"Robert Tanislav <https://twitter.com/roberttanislav>",
	"Julian Cataldo <https://twitter.com/Julian_Cataldo>"
];
const type = "module";
const scripts = {
	astro: "astro",
	build: "astro build",
	dev: "astro dev",
	preview: "astro preview",
	start: "astro dev"
};
const dependencies = {
	"@astrojs/sitemap": "^1.1.0",
	"@astrojs/tailwind": "^3.0.1",
	"@faker-js/faker": "^7.6.0",
	apexcharts: "^3.37.2",
	astro: "^2.0.4",
	flowbite: "^2.1.1",
	"flowbite-typography": "^1.0.3",
	shiki: "^0.14.1",
	"tailwind-scrollbar": "^3.0.0",
	tailwindcss: "^3.0.24"
};
const devDependencies = {
	"@types/eslint": "^8.21.1",
	"@typescript-eslint/eslint-plugin": "^5.54.1",
	"@typescript-eslint/parser": "^5.54.1",
	"astro-eslint-parser": "^0.11.0",
	eslint: "^8.35.0",
	"eslint-config-airbnb-base": "^15.0.0",
	"eslint-config-airbnb-typescript": "^17.0.0",
	"eslint-config-prettier": "^8.7.0",
	"eslint-import-resolver-typescript": "^3.5.3",
	"eslint-plugin-astro": "^0.23.0",
	"eslint-plugin-import": "^2.27.5",
	"eslint-plugin-prettier": "^4.2.1",
	"eslint-plugin-tsdoc": "^0.2.17"
};
const pkg = {
	name: name,
	version: version,
	"private": "true",
	description: description,
	keywords: keywords,
	homepage: homepage,
	bugs: bugs,
	repository: repository,
	license: license,
	author: author,
	contributors: contributors,
	type: type,
	scripts: scripts,
	dependencies: dependencies,
	devDependencies: devDependencies
};

const API_URL = `${"http://localhost:2121"}${"/"}api/`;
const REMOTE_ASSETS_BASE_URL = `https://flowbite-admin-dashboard.vercel.app`;
const SITE_TITLE = "Flowbite Astro Admin Dashboard";
const RANDOMIZE = Boolean(({}).RANDOMIZE) || true;

async function fetchData(endpoint) {
  const apiEndpoint = `${API_URL}${endpoint}`;
  console.info(`Fetching ${apiEndpoint}…`);
  return fetch(apiEndpoint).then(
    (r) => r.json()
  ).catch((e) => {
    console.error(e);
    throw Error("Invalid API data!");
  });
}
function url(path = "") {
  return `${"http://localhost:2121"}${"/"}${path}`;
}
function asset(path) {
  return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("http://localhost:2121");
const $$LayoutCommon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LayoutCommon;
  const { class: clazz } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n		<title>', " \u2014 v", '</title>\n\n		<meta name="generator"', '>\n		<meta name="description"', '>\n		<meta name=""', '>\n		<link rel="icon" type="image/svg+xml"', '>\n		<link rel="sitemap" type="application/xml"', `>

		<meta name="author" content="Julian Cataldo, Zolt\xE1n Sz\u0151gy\xE9nyi, Robert Tanislav">
		<meta name="copyright" content="MIT">

		<script>
			if (
				localStorage.getItem('color-theme') === 'dark' ||
				(!('color-theme' in localStorage) &&
					window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		<\/script>
	`, "</head>\n	<body", ">\n		", "\n	\n\n</body></html>"])), SITE_TITLE, pkg.version, addAttribute(Astro2.generator, "content"), addAttribute(pkg.description, "content"), addAttribute(pkg.description, "content"), addAttribute(url("favicon.svg"), "href"), addAttribute(url("sitemap-index.xml"), "href"), renderHead(), addAttribute([
    //
    clazz,
    "bg-gray-50 dark:bg-gray-800",
    "scrollbar scrollbar-w-3 scrollbar-thumb-rounded-[0.25rem]",
    "scrollbar-track-slate-200  scrollbar-thumb-gray-400",
    "dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-700"
  ], "class:list"), renderSlot($$result, $$slots["default"]));
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/app/LayoutCommon.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:2121");
const $$FooterStacked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FooterStacked;
  return renderTemplate`${maybeRenderHead()}<footer class="md:flex md:items-center md:justify-between px-4 2xl:px-0 py-6 md:py-10">
	${renderComponent($$result, "CopyrightNotice", $$CopyrightNotice, {})}

	<ul class="flex flex-wrap items-center justify-center">
		<li>
			<a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms</a>
		</li>
		<li>
			<a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
		</li>
		<li>
			<a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Cookie Policy</a>
		</li>
		<li>
			<a href="#" class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a>
		</li>
	</ul>
</footer>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/app/FooterStacked.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:2121");
const $$NavBarStacked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavBarStacked;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed z-50 w-full bg-white border-b border-gray-200 sm:py-2 dark:bg-gray-800 dark:border-gray-700">
	<div class="container py-3 mx-auto">
		<div class="flex items-center justify-between">
			<div class="flex items-center justify-start">
				<a${addAttribute(url(), "href")} class="flex mr-4">
					<img${addAttribute(asset("images/logo.svg"), "src")} class="h-8 mr-3" alt="Flowbite Logo">
					<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
				</a>
				<div class="hidden sm:flex sm:ml-6">
					<ul class="flex space-x-8">
						<li>
							<a${addAttribute(url(), "href")} class="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Home</a>
						</li>
						<li>
							<a href="#" class="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Team</a>
						</li>
						<li>
							<a href="#" class="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Pricing</a>
						</li>
						<li>
							<a href="#" class="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Contact</a>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
					<svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
					</svg>
					Login/Register
				</a>
				<button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center justify-center p-2 ml-3 text-gray-400 rounded-lg sm:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:hover:bg-gray-700 dark:hover:text-white" aria-controls="mobile-menu-2" aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<!-- Open mobile menu icon -->
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
					</svg>
					<!-- Close mobile menu icon -->
					<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
	<!-- Mobile menu -->
	<div class="hidden sm:hidden" id="mobile-menu">
		<ul class="pt-2">
			<li>
				<a href="#" class="block py-2 pl-3 pr-4 text-base font-normal text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white">Dashboard</a>
			</li>
			<li>
				<a href="#" class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">Team</a>
			</li>
			<li>
				<a href="#" class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">Projects</a>
			</li>
			<li>
				<a href="#" class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">Calendar
				</a>
			</li>
			<li class="block">
				<a href="#" class="inline-flex items-center w-full px-3 py-2 text-base font-normal text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">
					<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
					</svg>
					Login/Register
				</a>
			</li>
		</ul>
	</div>
</nav>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/app/NavBarStacked.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:2121");
const $$LayoutStacked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LayoutStacked;
  return renderTemplate`${renderComponent($$result, "LayoutCommon", $$LayoutCommon, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "NavBarStacked", $$NavBarStacked, {})}

	${maybeRenderHead()}<div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
		<div id="main-content" class="relative w-full max-w-screen-2xl mx-auto h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
			<div class="px-4 pt-6 2xl:px-0">
				${renderSlot($$result2, $$slots["default"])}
			</div>

			${renderComponent($$result2, "FooterStacked", $$FooterStacked, {})}
		</div>
	</div>
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/app/LayoutStacked.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:2121");
const $$ErrorNotFound = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErrorNotFound;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
	<div class="block md:max-w-lg">
		<img${addAttribute(asset("images/illustrations/404.svg"), "src")} alt="astronaut image">
	</div>
	<div class="text-center xl:max-w-4xl">
		<h1 class="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
			Page not found
		</h1>
		<p class="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">
			Oops! Looks like you followed a bad link. If you think this is a problem
			with us, please tell us.
		</p>
		<a${addAttribute(url(""), "href")} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
			<svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
			Go back home
		</a>
	</div>
</div>`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/modules/ErrorNotFound.astro", void 0);

const $$Astro = createAstro("http://localhost:2121");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "ErrorNotFound", $$ErrorNotFound, {})}
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/404.astro", void 0);

const $$file = "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LayoutStacked as $, RANDOMIZE as R, SITE_TITLE as S, _404 as _, asset as a, $$CopyrightNotice as b, $$LayoutCommon as c, $$ErrorNotFound as d, fetchData as f, url as u };
