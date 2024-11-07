/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead } from '../astro.9602e15c.mjs';
import { BUNDLED_LANGUAGES, getHighlighter as getHighlighter$1, renderToHtml } from 'shiki';
import { $ as $$LayoutSidebar } from './dashboard.astro.60d8df36.mjs';
import { g as getProducts, a as getUsers } from './_...entity_.ts.5224165f.mjs';
/* empty css                          */
/**
 * This file is prebuilt from packages/astro/scripts/shiki-gen-themes.mjs
 * Do not edit this directly, but instead edit that file and rerun it to generate this file.
 */

// prettier-ignore
const themes = {
	'css-variables': () => import('../css-variables.e7c8a2ea.mjs').then(mod => mod.default),
	'dark-plus': () => import('../dark-plus.52934de0.mjs').then(mod => mod.default),
	'dracula-soft': () => import('../dracula-soft.016d186a.mjs').then(mod => mod.default),
	'dracula': () => import('../dracula.77d6f983.mjs').then(mod => mod.default),
	'github-dark-dimmed': () => import('../github-dark-dimmed.0bf37b1d.mjs').then(mod => mod.default),
	'github-dark': () => import('../github-dark.527a8b46.mjs').then(mod => mod.default),
	'github-light': () => import('../github-light.02c6a9e1.mjs').then(mod => mod.default),
	'hc_light': () => import('../hc_light.cf2b925f.mjs').then(mod => mod.default),
	'light-plus': () => import('../light-plus.e2fa927f.mjs').then(mod => mod.default),
	'material-theme-darker': () => import('../material-theme-darker.4ac74e4f.mjs').then(mod => mod.default),
	'material-theme-lighter': () => import('../material-theme-lighter.fb5e6fad.mjs').then(mod => mod.default),
	'material-theme-ocean': () => import('../material-theme-ocean.a0c877f5.mjs').then(mod => mod.default),
	'material-theme-palenight': () => import('../material-theme-palenight.aab13bb2.mjs').then(mod => mod.default),
	'material-theme': () => import('../material-theme.7da5ebb7.mjs').then(mod => mod.default),
	'min-dark': () => import('../min-dark.9e4a618a.mjs').then(mod => mod.default),
	'min-light': () => import('../min-light.7f730b21.mjs').then(mod => mod.default),
	'monokai': () => import('../monokai.63aadd97.mjs').then(mod => mod.default),
	'nord': () => import('../nord.a157a922.mjs').then(mod => mod.default),
	'one-dark-pro': () => import('../one-dark-pro.aad5d8d1.mjs').then(mod => mod.default),
	'poimandres': () => import('../poimandres.4ab6eade.mjs').then(mod => mod.default),
	'rose-pine-dawn': () => import('../rose-pine-dawn.39261b15.mjs').then(mod => mod.default),
	'rose-pine-moon': () => import('../rose-pine-moon.dfcc6ca9.mjs').then(mod => mod.default),
	'rose-pine': () => import('../rose-pine.186b9f49.mjs').then(mod => mod.default),
	'slack-dark': () => import('../slack-dark.c78e7530.mjs').then(mod => mod.default),
	'slack-ochin': () => import('../slack-ochin.31fb0e12.mjs').then(mod => mod.default),
	'solarized-dark': () => import('../solarized-dark.4025b714.mjs').then(mod => mod.default),
	'solarized-light': () => import('../solarized-light.cf10b5ef.mjs').then(mod => mod.default),
	'vitesse-dark': () => import('../vitesse-dark.13674008.mjs').then(mod => mod.default),
	'vitesse-light': () => import('../vitesse-light.1d1d3b53.mjs').then(mod => mod.default),
	// old theme names for compat
	'material-darker': () => import('../material-theme-darker.4ac74e4f.mjs').then(mod => mod.default),
	'material-default': () => import('../material-theme.7da5ebb7.mjs').then(mod => mod.default),
	'material-lighter': () => import('../material-theme-lighter.fb5e6fad.mjs').then(mod => mod.default),
	'material-ocean': () => import('../material-theme-ocean.a0c877f5.mjs').then(mod => mod.default),
	'material-palenight': () => import('../material-theme-palenight.aab13bb2.mjs').then(mod => mod.default),
};

/**
 * This file is prebuilt from packages/astro/scripts/shiki-gen-languages.mjs
 * Do not edit this directly, but instead edit that file and rerun it to generate this file.
 */


function handleLang(grammar, language) {
	const lang = BUNDLED_LANGUAGES.find((l) => l.id === language);
	if (lang) {
		return {
			...lang,
			grammar,
		};
	} else {
		return undefined;
	}
}

// prettier-ignore
const languages = {
	'abap': () => import('../abap.tmLanguage.b7083bce.mjs').then((mod) => handleLang(mod.default, 'abap')),
	'actionscript-3': () => import('../actionscript-3.tmLanguage.b6c6b19c.mjs').then((mod) => handleLang(mod.default, 'actionscript-3')),
	'ada': () => import('../ada.tmLanguage.c0d969fc.mjs').then((mod) => handleLang(mod.default, 'ada')),
	'apache': () => import('../apache.tmLanguage.6c42752c.mjs').then((mod) => handleLang(mod.default, 'apache')),
	'apex': () => import('../apex.tmLanguage.58865615.mjs').then((mod) => handleLang(mod.default, 'apex')),
	'apl': () => import('../apl.tmLanguage.b8eaa553.mjs').then((mod) => handleLang(mod.default, 'apl')),
	'applescript': () => import('../applescript.tmLanguage.ab6f15a0.mjs').then((mod) => handleLang(mod.default, 'applescript')),
	'ara': () => import('../ara.tmLanguage.a2d98a0f.mjs').then((mod) => handleLang(mod.default, 'ara')),
	'asm': () => import('../asm.tmLanguage.ee1affa0.mjs').then((mod) => handleLang(mod.default, 'asm')),
	'astro': () => import('../astro.tmLanguage.62a098f3.mjs').then((mod) => handleLang(mod.default, 'astro')),
	'awk': () => import('../awk.tmLanguage.28e51220.mjs').then((mod) => handleLang(mod.default, 'awk')),
	'ballerina': () => import('../ballerina.tmLanguage.5b7b213b.mjs').then((mod) => handleLang(mod.default, 'ballerina')),
	'bat': () => import('../bat.tmLanguage.e093f3bb.mjs').then((mod) => handleLang(mod.default, 'bat')),
	'berry': () => import('../berry.tmLanguage.3b488b68.mjs').then((mod) => handleLang(mod.default, 'berry')),
	'bibtex': () => import('../bibtex.tmLanguage.b8bec259.mjs').then((mod) => handleLang(mod.default, 'bibtex')),
	'bicep': () => import('../bicep.tmLanguage.a4536e4c.mjs').then((mod) => handleLang(mod.default, 'bicep')),
	'blade': () => import('../blade.tmLanguage.63a2772e.mjs').then((mod) => handleLang(mod.default, 'blade')),
	'c': () => import('../c.tmLanguage.ad5dbe2f.mjs').then((mod) => handleLang(mod.default, 'c')),
	'cadence': () => import('../cadence.tmLanguage.d73273a9.mjs').then((mod) => handleLang(mod.default, 'cadence')),
	'clarity': () => import('../clarity.tmLanguage.99788c81.mjs').then((mod) => handleLang(mod.default, 'clarity')),
	'clojure': () => import('../clojure.tmLanguage.d6ab7a18.mjs').then((mod) => handleLang(mod.default, 'clojure')),
	'cmake': () => import('../cmake.tmLanguage.94afa14e.mjs').then((mod) => handleLang(mod.default, 'cmake')),
	'cobol': () => import('../cobol.tmLanguage.21e557b3.mjs').then((mod) => handleLang(mod.default, 'cobol')),
	'codeql': () => import('../codeql.tmLanguage.aafa80f4.mjs').then((mod) => handleLang(mod.default, 'codeql')),
	'coffee': () => import('../coffee.tmLanguage.de7317b8.mjs').then((mod) => handleLang(mod.default, 'coffee')),
	'cpp-macro': () => import('../cpp-macro.tmLanguage.cd4546ec.mjs').then((mod) => handleLang(mod.default, 'cpp-macro')),
	'cpp': () => import('../cpp.tmLanguage.e5153422.mjs').then((mod) => handleLang(mod.default, 'cpp')),
	'crystal': () => import('../crystal.tmLanguage.ff2c3eda.mjs').then((mod) => handleLang(mod.default, 'crystal')),
	'csharp': () => import('../csharp.tmLanguage.f6df7d01.mjs').then((mod) => handleLang(mod.default, 'csharp')),
	'css': () => import('../css.tmLanguage.0cb5b79b.mjs').then((mod) => handleLang(mod.default, 'css')),
	'cue': () => import('../cue.tmLanguage.d3e2202d.mjs').then((mod) => handleLang(mod.default, 'cue')),
	'd': () => import('../d.tmLanguage.b0113f78.mjs').then((mod) => handleLang(mod.default, 'd')),
	'dart': () => import('../dart.tmLanguage.1fc3301c.mjs').then((mod) => handleLang(mod.default, 'dart')),
	'dax': () => import('../dax.tmLanguage.cfbebc44.mjs').then((mod) => handleLang(mod.default, 'dax')),
	'diff': () => import('../diff.tmLanguage.f3f85768.mjs').then((mod) => handleLang(mod.default, 'diff')),
	'docker': () => import('../docker.tmLanguage.9a440d75.mjs').then((mod) => handleLang(mod.default, 'docker')),
	'dream-maker': () => import('../dream-maker.tmLanguage.3575ac43.mjs').then((mod) => handleLang(mod.default, 'dream-maker')),
	'elixir': () => import('../elixir.tmLanguage.45323dd5.mjs').then((mod) => handleLang(mod.default, 'elixir')),
	'elm': () => import('../elm.tmLanguage.8256a205.mjs').then((mod) => handleLang(mod.default, 'elm')),
	'erb': () => import('../erb.tmLanguage.f033bb3a.mjs').then((mod) => handleLang(mod.default, 'erb')),
	'erlang': () => import('../erlang.tmLanguage.10b9b573.mjs').then((mod) => handleLang(mod.default, 'erlang')),
	'fish': () => import('../fish.tmLanguage.842ce2d9.mjs').then((mod) => handleLang(mod.default, 'fish')),
	'fsharp': () => import('../fsharp.tmLanguage.02b0ebf7.mjs').then((mod) => handleLang(mod.default, 'fsharp')),
	'gherkin': () => import('../gherkin.tmLanguage.b57f330a.mjs').then((mod) => handleLang(mod.default, 'gherkin')),
	'git-commit': () => import('../git-commit.tmLanguage.94b3f576.mjs').then((mod) => handleLang(mod.default, 'git-commit')),
	'git-rebase': () => import('../git-rebase.tmLanguage.07dc9d8e.mjs').then((mod) => handleLang(mod.default, 'git-rebase')),
	'glsl': () => import('../glsl.tmLanguage.a32eeda9.mjs').then((mod) => handleLang(mod.default, 'glsl')),
	'gnuplot': () => import('../gnuplot.tmLanguage.5903f2fa.mjs').then((mod) => handleLang(mod.default, 'gnuplot')),
	'go': () => import('../go.tmLanguage.d7558a73.mjs').then((mod) => handleLang(mod.default, 'go')),
	'graphql': () => import('../graphql.tmLanguage.4e0164b3.mjs').then((mod) => handleLang(mod.default, 'graphql')),
	'groovy': () => import('../groovy.tmLanguage.af0b09e1.mjs').then((mod) => handleLang(mod.default, 'groovy')),
	'hack': () => import('../hack.tmLanguage.8cd87701.mjs').then((mod) => handleLang(mod.default, 'hack')),
	'haml': () => import('../haml.tmLanguage.9d1832d6.mjs').then((mod) => handleLang(mod.default, 'haml')),
	'handlebars': () => import('../handlebars.tmLanguage.4bbacd15.mjs').then((mod) => handleLang(mod.default, 'handlebars')),
	'haskell': () => import('../haskell.tmLanguage.c0a80243.mjs').then((mod) => handleLang(mod.default, 'haskell')),
	'hcl': () => import('../hcl.tmLanguage.db036a9b.mjs').then((mod) => handleLang(mod.default, 'hcl')),
	'hlsl': () => import('../hlsl.tmLanguage.23478b42.mjs').then((mod) => handleLang(mod.default, 'hlsl')),
	'html': () => import('../html.tmLanguage.c38a0ecb.mjs').then((mod) => handleLang(mod.default, 'html')),
	'http': () => import('../http.tmLanguage.0c7f0ab6.mjs').then((mod) => handleLang(mod.default, 'http')),
	'imba': () => import('../imba.tmLanguage.cc58d503.mjs').then((mod) => handleLang(mod.default, 'imba')),
	'ini': () => import('../ini.tmLanguage.bab53049.mjs').then((mod) => handleLang(mod.default, 'ini')),
	'java': () => import('../java.tmLanguage.cb6a58fe.mjs').then((mod) => handleLang(mod.default, 'java')),
	'javascript': () => import('../javascript.tmLanguage.50a44b0d.mjs').then((mod) => handleLang(mod.default, 'javascript')),
	'jinja-html': () => import('../jinja-html.tmLanguage.52f58fce.mjs').then((mod) => handleLang(mod.default, 'jinja-html')),
	'jinja': () => import('../jinja.tmLanguage.4b5a6ae5.mjs').then((mod) => handleLang(mod.default, 'jinja')),
	'jison': () => import('../jison.tmLanguage.081dc2bd.mjs').then((mod) => handleLang(mod.default, 'jison')),
	'json': () => import('../json.tmLanguage.415d2f82.mjs').then((mod) => handleLang(mod.default, 'json')),
	'json5': () => import('../json5.tmLanguage.75279499.mjs').then((mod) => handleLang(mod.default, 'json5')),
	'jsonc': () => import('../jsonc.tmLanguage.452c2a09.mjs').then((mod) => handleLang(mod.default, 'jsonc')),
	'jsonnet': () => import('../jsonnet.tmLanguage.d70f3d42.mjs').then((mod) => handleLang(mod.default, 'jsonnet')),
	'jssm': () => import('../jssm.tmLanguage.2704082b.mjs').then((mod) => handleLang(mod.default, 'jssm')),
	'jsx': () => import('../jsx.tmLanguage.6e9c2b94.mjs').then((mod) => handleLang(mod.default, 'jsx')),
	'julia': () => import('../julia.tmLanguage.8e7ca448.mjs').then((mod) => handleLang(mod.default, 'julia')),
	'kotlin': () => import('../kotlin.tmLanguage.4b52cc58.mjs').then((mod) => handleLang(mod.default, 'kotlin')),
	'latex': () => import('../latex.tmLanguage.d4cb5f3a.mjs').then((mod) => handleLang(mod.default, 'latex')),
	'less': () => import('../less.tmLanguage.1db01152.mjs').then((mod) => handleLang(mod.default, 'less')),
	'liquid': () => import('../liquid.tmLanguage.39762aa9.mjs').then((mod) => handleLang(mod.default, 'liquid')),
	'lisp': () => import('../lisp.tmLanguage.23d5b43f.mjs').then((mod) => handleLang(mod.default, 'lisp')),
	'logo': () => import('../logo.tmLanguage.9debc035.mjs').then((mod) => handleLang(mod.default, 'logo')),
	'lua': () => import('../lua.tmLanguage.b6746678.mjs').then((mod) => handleLang(mod.default, 'lua')),
	'make': () => import('../make.tmLanguage.25a53676.mjs').then((mod) => handleLang(mod.default, 'make')),
	'markdown': () => import('../markdown.tmLanguage.61418f47.mjs').then((mod) => handleLang(mod.default, 'markdown')),
	'marko': () => import('../marko.tmLanguage.0de6cbdd.mjs').then((mod) => handleLang(mod.default, 'marko')),
	'matlab': () => import('../matlab.tmLanguage.0679c8dd.mjs').then((mod) => handleLang(mod.default, 'matlab')),
	'mdx': () => import('../mdx.tmLanguage.faa425e1.mjs').then((mod) => handleLang(mod.default, 'mdx')),
	'mermaid': () => import('../mermaid.tmLanguage.e17134df.mjs').then((mod) => handleLang(mod.default, 'mermaid')),
	'nginx': () => import('../nginx.tmLanguage.c1fc8bdb.mjs').then((mod) => handleLang(mod.default, 'nginx')),
	'nim': () => import('../nim.tmLanguage.4dc56ae9.mjs').then((mod) => handleLang(mod.default, 'nim')),
	'nix': () => import('../nix.tmLanguage.b59681ea.mjs').then((mod) => handleLang(mod.default, 'nix')),
	'objective-c': () => import('../objective-c.tmLanguage.61bd98bc.mjs').then((mod) => handleLang(mod.default, 'objective-c')),
	'objective-cpp': () => import('../objective-cpp.tmLanguage.2566aa61.mjs').then((mod) => handleLang(mod.default, 'objective-cpp')),
	'ocaml': () => import('../ocaml.tmLanguage.3d4105c0.mjs').then((mod) => handleLang(mod.default, 'ocaml')),
	'pascal': () => import('../pascal.tmLanguage.05b12e5e.mjs').then((mod) => handleLang(mod.default, 'pascal')),
	'perl': () => import('../perl.tmLanguage.740fd83e.mjs').then((mod) => handleLang(mod.default, 'perl')),
	'php-html': () => import('../php-html.tmLanguage.614534f3.mjs').then((mod) => handleLang(mod.default, 'php-html')),
	'php': () => import('../php.tmLanguage.3ae9071f.mjs').then((mod) => handleLang(mod.default, 'php')),
	'plsql': () => import('../plsql.tmLanguage.86cc153b.mjs').then((mod) => handleLang(mod.default, 'plsql')),
	'postcss': () => import('../postcss.tmLanguage.8220bdfa.mjs').then((mod) => handleLang(mod.default, 'postcss')),
	'powerquery': () => import('../powerquery.tmLanguage.3cd008c8.mjs').then((mod) => handleLang(mod.default, 'powerquery')),
	'powershell': () => import('../powershell.tmLanguage.54582b0d.mjs').then((mod) => handleLang(mod.default, 'powershell')),
	'prisma': () => import('../prisma.tmLanguage.3bc3eaf6.mjs').then((mod) => handleLang(mod.default, 'prisma')),
	'prolog': () => import('../prolog.tmLanguage.10d038ef.mjs').then((mod) => handleLang(mod.default, 'prolog')),
	'proto': () => import('../proto.tmLanguage.f9a6354e.mjs').then((mod) => handleLang(mod.default, 'proto')),
	'pug': () => import('../pug.tmLanguage.8895f19d.mjs').then((mod) => handleLang(mod.default, 'pug')),
	'puppet': () => import('../puppet.tmLanguage.c0c7467a.mjs').then((mod) => handleLang(mod.default, 'puppet')),
	'purescript': () => import('../purescript.tmLanguage.5bfee009.mjs').then((mod) => handleLang(mod.default, 'purescript')),
	'python': () => import('../python.tmLanguage.b68e1a66.mjs').then((mod) => handleLang(mod.default, 'python')),
	'r': () => import('../r.tmLanguage.5fa974a7.mjs').then((mod) => handleLang(mod.default, 'r')),
	'raku': () => import('../raku.tmLanguage.f84d2d31.mjs').then((mod) => handleLang(mod.default, 'raku')),
	'razor': () => import('../razor.tmLanguage.d6ddc28e.mjs').then((mod) => handleLang(mod.default, 'razor')),
	'rel': () => import('../rel.tmLanguage.41aa344c.mjs').then((mod) => handleLang(mod.default, 'rel')),
	'riscv': () => import('../riscv.tmLanguage.f5a26e4f.mjs').then((mod) => handleLang(mod.default, 'riscv')),
	'rst': () => import('../rst.tmLanguage.c4e98337.mjs').then((mod) => handleLang(mod.default, 'rst')),
	'ruby': () => import('../ruby.tmLanguage.da690f22.mjs').then((mod) => handleLang(mod.default, 'ruby')),
	'rust': () => import('../rust.tmLanguage.0b359911.mjs').then((mod) => handleLang(mod.default, 'rust')),
	'sas': () => import('../sas.tmLanguage.c80509a5.mjs').then((mod) => handleLang(mod.default, 'sas')),
	'sass': () => import('../sass.tmLanguage.e69ce6bc.mjs').then((mod) => handleLang(mod.default, 'sass')),
	'scala': () => import('../scala.tmLanguage.b2256571.mjs').then((mod) => handleLang(mod.default, 'scala')),
	'scheme': () => import('../scheme.tmLanguage.c83aee9e.mjs').then((mod) => handleLang(mod.default, 'scheme')),
	'scss': () => import('../scss.tmLanguage.b81feb07.mjs').then((mod) => handleLang(mod.default, 'scss')),
	'shaderlab': () => import('../shaderlab.tmLanguage.aa99a061.mjs').then((mod) => handleLang(mod.default, 'shaderlab')),
	'shellscript': () => import('../shellscript.tmLanguage.37d5087a.mjs').then((mod) => handleLang(mod.default, 'shellscript')),
	'smalltalk': () => import('../smalltalk.tmLanguage.5638df7c.mjs').then((mod) => handleLang(mod.default, 'smalltalk')),
	'solidity': () => import('../solidity.tmLanguage.f4f6d9c8.mjs').then((mod) => handleLang(mod.default, 'solidity')),
	'sparql': () => import('../sparql.tmLanguage.3c361ce2.mjs').then((mod) => handleLang(mod.default, 'sparql')),
	'sql': () => import('../sql.tmLanguage.67009764.mjs').then((mod) => handleLang(mod.default, 'sql')),
	'ssh-config': () => import('../ssh-config.tmLanguage.0f419bb5.mjs').then((mod) => handleLang(mod.default, 'ssh-config')),
	'stata': () => import('../stata.tmLanguage.1b1c4f47.mjs').then((mod) => handleLang(mod.default, 'stata')),
	'stylus': () => import('../stylus.tmLanguage.81b61007.mjs').then((mod) => handleLang(mod.default, 'stylus')),
	'svelte': () => import('../svelte.tmLanguage.dfb78d2e.mjs').then((mod) => handleLang(mod.default, 'svelte')),
	'swift': () => import('../swift.tmLanguage.f778d3f9.mjs').then((mod) => handleLang(mod.default, 'swift')),
	'system-verilog': () => import('../system-verilog.tmLanguage.0be037eb.mjs').then((mod) => handleLang(mod.default, 'system-verilog')),
	'tasl': () => import('../tasl.tmLanguage.8ee2962d.mjs').then((mod) => handleLang(mod.default, 'tasl')),
	'tcl': () => import('../tcl.tmLanguage.4bfb60fc.mjs').then((mod) => handleLang(mod.default, 'tcl')),
	'tex': () => import('../tex.tmLanguage.39e4fbb7.mjs').then((mod) => handleLang(mod.default, 'tex')),
	'toml': () => import('../toml.tmLanguage.ce22deb6.mjs').then((mod) => handleLang(mod.default, 'toml')),
	'tsx': () => import('../tsx.tmLanguage.d64f7f3c.mjs').then((mod) => handleLang(mod.default, 'tsx')),
	'turtle': () => import('../turtle.tmLanguage.ce402644.mjs').then((mod) => handleLang(mod.default, 'turtle')),
	'twig': () => import('../twig.tmLanguage.375b9ed9.mjs').then((mod) => handleLang(mod.default, 'twig')),
	'typescript': () => import('../typescript.tmLanguage.74c1ec65.mjs').then((mod) => handleLang(mod.default, 'typescript')),
	'v': () => import('../v.tmLanguage.5c3bcdc0.mjs').then((mod) => handleLang(mod.default, 'v')),
	'vb': () => import('../vb.tmLanguage.958a5b7e.mjs').then((mod) => handleLang(mod.default, 'vb')),
	'verilog': () => import('../verilog.tmLanguage.adec5dbd.mjs').then((mod) => handleLang(mod.default, 'verilog')),
	'vhdl': () => import('../vhdl.tmLanguage.810d1403.mjs').then((mod) => handleLang(mod.default, 'vhdl')),
	'viml': () => import('../viml.tmLanguage.ebbaf3d6.mjs').then((mod) => handleLang(mod.default, 'viml')),
	'vue-html': () => import('../vue-html.tmLanguage.57448ef6.mjs').then((mod) => handleLang(mod.default, 'vue-html')),
	'vue': () => import('../vue.tmLanguage.977e7953.mjs').then((mod) => handleLang(mod.default, 'vue')),
	'wasm': () => import('../wasm.tmLanguage.a201d32e.mjs').then((mod) => handleLang(mod.default, 'wasm')),
	'wenyan': () => import('../wenyan.tmLanguage.8697653d.mjs').then((mod) => handleLang(mod.default, 'wenyan')),
	'wgsl': () => import('../wgsl.tmLanguage.baca37d8.mjs').then((mod) => handleLang(mod.default, 'wgsl')),
	'xml': () => import('../xml.tmLanguage.10d9c63f.mjs').then((mod) => handleLang(mod.default, 'xml')),
	'xsl': () => import('../xsl.tmLanguage.8df6f026.mjs').then((mod) => handleLang(mod.default, 'xsl')),
	'yaml': () => import('../yaml.tmLanguage.aab2c28b.mjs').then((mod) => handleLang(mod.default, 'yaml')),
	'zenscript': () => import('../zenscript.tmLanguage.ab30f748.mjs').then((mod) => handleLang(mod.default, 'zenscript')),
};

// Caches Promise<Highlighter> for reuse when the same theme and langs are provided
const _resolvedHighlighters = new Map();

/** @type {Promise<any>} */
let _allLanguages;

function stringify(opts) {
	// Always sort keys before stringifying to make sure objects match regardless of parameter ordering
	return JSON.stringify(opts, Object.keys(opts).sort());
}

/**
 * @param {import('shiki').HighlighterOptions} opts
 * @returns {Promise<import('shiki').HighlighterOptions>}
 */
async function resolveHighlighterOptions(opts) {
	const resolvedThemes = [];
	if (opts.theme && opts.theme in themes) {
		resolvedThemes.push(await themes[opts.theme]());
	} else if (Object.keys(opts.theme).length) {
		resolvedThemes.push(opts.theme);
	}

	let resolvedLanguages;
	if (opts.langs) {
		resolvedLanguages = opts.langs;
	} else {
		if (!_allLanguages) {
			_allLanguages = (await Promise.all(Object.values(languages).map((fn) => fn()))).filter(
				Boolean
			);
		}
		resolvedLanguages = await _allLanguages;
	}

	/** @type {import('shiki').HighlighterOptions} */
	const highlighterOptions = {
		...opts,
		themes: resolvedThemes,
		langs: resolvedLanguages,
	};

	// Do not pass through the theme as that will attempt to load it, even if it's included in themes
	delete highlighterOptions['theme'];

	return highlighterOptions;
}

/**
 * @param {import('shiki').HighlighterOptions} opts
 * @returns {Promise<import('shiki').Highlighter>}
 */
async function resolveHighlighter(opts) {
	const highlighterOptions = await resolveHighlighterOptions(opts);

	// Start the async getHighlighter call and cache the Promise
	const highlighter = getHighlighter$1(highlighterOptions).then((hl) => {
		hl.setColorReplacements({
			'#000001': 'var(--astro-code-color-text)',
			'#000002': 'var(--astro-code-color-background)',
			'#000004': 'var(--astro-code-token-constant)',
			'#000005': 'var(--astro-code-token-string)',
			'#000006': 'var(--astro-code-token-comment)',
			'#000007': 'var(--astro-code-token-keyword)',
			'#000008': 'var(--astro-code-token-parameter)',
			'#000009': 'var(--astro-code-token-function)',
			'#000010': 'var(--astro-code-token-string-expression)',
			'#000011': 'var(--astro-code-token-punctuation)',
			'#000012': 'var(--astro-code-token-link)',
		});
		return hl;
	});

	return highlighter;
}

/**
 * @param {import('shiki').HighlighterOptions} opts
 * @returns {Promise<import('shiki').Highlighter>}
 */
function getHighlighter(opts) {
	const key = stringify(opts);

	// Highlighter has already been requested, reuse the same instance
	if (_resolvedHighlighters.has(key)) {
		return _resolvedHighlighters.get(key);
	}

	const highlighter = resolveHighlighter(opts);
	_resolvedHighlighters.set(key, highlighter);

	return highlighter;
}

const $$Astro$1 = createAstro("http://localhost:2121");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Code;
  const {
    code,
    lang = "plaintext",
    theme = "github-dark",
    wrap = false,
    inline = false
  } = Astro2.props;
  const highlighter = await getHighlighter({
    theme,
    // Load custom lang if passed an object, otherwise load the default
    langs: typeof lang !== "string" ? [lang] : void 0
  });
  const tokens = highlighter.codeToThemedTokens(code, typeof lang === "string" ? lang : lang.id);
  const _theme = highlighter.getTheme();
  const html = renderToHtml(tokens, {
    themeName: _theme.name,
    fg: _theme.fg,
    bg: _theme.bg,
    elements: {
      pre({ className, style, children }) {
        const tag = inline ? "code" : "pre";
        className = className.replace(/shiki/g, "astro-code");
        if (wrap === false) {
          style += "; overflow-x: auto;";
        } else if (wrap === true) {
          style += "; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;";
        }
        return `<${tag} class="${className}" style="${style}" tabindex="0">${children}</${tag}>`;
      },
      code({ children }) {
        return inline ? children : `<code>${children}</code>`;
      }
    }
  });
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/node_modules/astro/components/Code.astro", void 0);

const $$Astro = createAstro("http://localhost:2121");
const $$Data = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Data;
  const products = JSON.stringify(getProducts(), null, 2);
  const users = JSON.stringify(getUsers(), null, 2);
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, { "class": "bg-slate-800 text-slate-100" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<div class="playground p-16">
		<h1 class="text-3xl ml-8 lg:text-4xl xl:text-6xl font-bold dark:text-slate-100">
			🕹&nbsp;Playground — API data
		</h1>

		<div class="mt-24 mb-8">
			<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onclick="location.reload()">Refresh</button>
		</div>

		<div class="mb-16">
			<a href="/api/products" target="_blank">
				<h1 class="text-6xl font-bold mb-8 dark:text-slate-100">Products</h1>
			</a>

			${renderComponent($$result2, "Code", $$Code, { "code": products, "lang": "json" })}
		</div>
		<div class="mb-16">
			<a href="/api/users" target="_blank">
				<h1 class="text-6xl font-bold mb-8 dark:text-slate-100">Users</h1>
			</a>

			${renderComponent($$result2, "Code", $$Code, { "code": users, "lang": "json" })}
		</div>
	</div>
` })}`;
}, "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/playground/data.astro", void 0);

const $$file = "/home/greg/f1/flowbite-astro-admin-dashboard/src/pages/playground/data.astro";
const $$url = "/playground/data";

const data = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Data,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Code as $, data as d };
