const name = "wgsl";
const scopeName = "source.wgsl";
const patterns = [
	{
		include: "#line_comments"
	},
	{
		include: "#block_comments"
	},
	{
		include: "#keywords"
	},
	{
		include: "#attributes"
	},
	{
		include: "#functions"
	},
	{
		include: "#function_calls"
	},
	{
		include: "#constants"
	},
	{
		include: "#types"
	},
	{
		include: "#variables"
	},
	{
		include: "#punctuation"
	}
];
const repository = {
	line_comments: {
		comment: "single line comment",
		name: "comment.line.double-slash.wgsl",
		match: "\\s*//.*"
	},
	block_comments: {
		patterns: [
			{
				comment: "empty block comments",
				name: "comment.block.wgsl",
				match: "/\\*\\*/"
			},
			{
				comment: "block documentation comments",
				name: "comment.block.documentation.wgsl",
				begin: "/\\*\\*",
				end: "\\*/",
				patterns: [
					{
						include: "#block_comments"
					}
				]
			},
			{
				comment: "block comments",
				name: "comment.block.wgsl",
				begin: "/\\*(?!\\*)",
				end: "\\*/",
				patterns: [
					{
						include: "#block_comments"
					}
				]
			}
		]
	},
	attributes: {
		patterns: [
			{
				comment: "attribute declaration",
				name: "meta.attribute.wgsl",
				match: "(@)([A-Za-z_]+)",
				captures: {
					"1": {
						name: "keyword.operator.attribute.at"
					},
					"2": {
						name: "entity.name.attribute.wgsl"
					}
				}
			}
		]
	},
	functions: {
		patterns: [
			{
				comment: "function definition",
				name: "meta.function.definition.wgsl",
				begin: "\\b(fn)\\s+([A-Za-z0-9_]+)((\\()|(<))",
				beginCaptures: {
					"1": {
						name: "keyword.other.fn.wgsl"
					},
					"2": {
						name: "entity.name.function.wgsl"
					},
					"4": {
						name: "punctuation.brackets.round.wgsl"
					}
				},
				end: "\\{",
				endCaptures: {
					"0": {
						name: "punctuation.brackets.curly.wgsl"
					}
				},
				patterns: [
					{
						include: "#line_comments"
					},
					{
						include: "#block_comments"
					},
					{
						include: "#keywords"
					},
					{
						include: "#attributes"
					},
					{
						include: "#function_calls"
					},
					{
						include: "#constants"
					},
					{
						include: "#types"
					},
					{
						include: "#variables"
					},
					{
						include: "#punctuation"
					}
				]
			}
		]
	},
	function_calls: {
		patterns: [
			{
				comment: "function/method calls",
				name: "meta.function.call.wgsl",
				begin: "([A-Za-z0-9_]+)(\\()",
				beginCaptures: {
					"1": {
						name: "entity.name.function.wgsl"
					},
					"2": {
						name: "punctuation.brackets.round.wgsl"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.brackets.round.wgsl"
					}
				},
				patterns: [
					{
						include: "#line_comments"
					},
					{
						include: "#block_comments"
					},
					{
						include: "#keywords"
					},
					{
						include: "#attributes"
					},
					{
						include: "#function_calls"
					},
					{
						include: "#constants"
					},
					{
						include: "#types"
					},
					{
						include: "#variables"
					},
					{
						include: "#punctuation"
					}
				]
			}
		]
	},
	constants: {
		patterns: [
			{
				comment: "decimal float literal",
				name: "constant.numeric.float.wgsl",
				match: "(-?\\b[0-9][0-9]*\\.[0-9][0-9]*)([eE][+-]?[0-9]+)?\\b"
			},
			{
				comment: "int literal",
				name: "constant.numeric.decimal.wgsl",
				match: "-?\\b0x[0-9a-fA-F]+\\b|\\b0\\b|-?\\b[1-9][0-9]*\\b"
			},
			{
				comment: "uint literal",
				name: "constant.numeric.decimal.wgsl",
				match: "\\b0x[0-9a-fA-F]+u\\b|\\b0u\\b|\\b[1-9][0-9]*u\\b"
			},
			{
				comment: "boolean constant",
				name: "constant.language.boolean.wgsl",
				match: "\\b(true|false)\\b"
			}
		]
	},
	types: {
		comment: "types",
		name: "storage.type.wgsl",
		patterns: [
			{
				comment: "scalar Types",
				name: "storage.type.wgsl",
				match: "\\b(bool|i32|u32|f32)\\b"
			},
			{
				comment: "reserved scalar Types",
				name: "storage.type.wgsl",
				match: "\\b(i64|u64|f64)\\b"
			},
			{
				comment: "vector type aliasses",
				name: "storage.type.wgsl",
				match: "\\b(vec2i|vec3i|vec4i|vec2u|vec3u|vec4u|vec2f|vec3f|vec4f|vec2h|vec3h|vec4h)\\b"
			},
			{
				comment: "matrix type aliasses",
				name: "storage.type.wgsl",
				match: "\\b(mat2x2f|mat2x3f|mat2x4f|mat3x2f|mat3x3f|mat3x4f|mat4x2f|mat4x3f|mat4x4f|mat2x2h|mat2x3h|mat2x4h|mat3x2h|mat3x3h|mat3x4h|mat4x2h|mat4x3h|mat4x4h)\\b"
			},
			{
				comment: "vector/matrix types",
				name: "storage.type.wgsl",
				match: "\\b(vec[2-4]|mat[2-4]x[2-4])\\b"
			},
			{
				comment: "atomic types",
				name: "storage.type.wgsl",
				match: "\\b(atomic)\\b"
			},
			{
				comment: "array types",
				name: "storage.type.wgsl",
				match: "\\b(array)\\b"
			},
			{
				comment: "Custom type",
				name: "entity.name.type.wgsl",
				match: "\\b([A-Z][A-Za-z0-9]*)\\b"
			}
		]
	},
	variables: {
		patterns: [
			{
				comment: "variables",
				name: "variable.other.wgsl",
				match: "\\b(?<!(?<!\\.)\\.)(?:r#(?!(crate|[Ss]elf|super)))?[a-z0-9_]+\\b"
			}
		]
	},
	punctuation: {
		patterns: [
			{
				comment: "comma",
				name: "punctuation.comma.wgsl",
				match: ","
			},
			{
				comment: "curly braces",
				name: "punctuation.brackets.curly.wgsl",
				match: "[{}]"
			},
			{
				comment: "parentheses, round brackets",
				name: "punctuation.brackets.round.wgsl",
				match: "[()]"
			},
			{
				comment: "semicolon",
				name: "punctuation.semi.wgsl",
				match: ";"
			},
			{
				comment: "square brackets",
				name: "punctuation.brackets.square.wgsl",
				match: "[\\[\\]]"
			},
			{
				comment: "angle brackets",
				name: "punctuation.brackets.angle.wgsl",
				match: "(?<![=-])[<>]"
			}
		]
	},
	keywords: {
		patterns: [
			{
				comment: "other keywords",
				name: "keyword.control.wgsl",
				match: "\\b(bitcast|block|break|case|continue|continuing|default|discard|else|elseif|enable|fallthrough|for|function|if|loop|private|read|read_write|return|storage|switch|uniform|while|workgroup|write)\\b"
			},
			{
				comment: "reserved keywords",
				name: "keyword.control.wgsl",
				match: "\\b(asm|const|do|enum|handle|mat|premerge|regardless|typedef|unless|using|vec|void)\\b"
			},
			{
				comment: "storage keywords",
				name: "keyword.other.wgsl storage.type.wgsl",
				match: "\\b(let|var)\\b"
			},
			{
				comment: "type keyword",
				name: "keyword.declaration.type.wgsl storage.type.wgsl",
				match: "\\b(type)\\b"
			},
			{
				comment: "enum keyword",
				name: "keyword.declaration.enum.wgsl storage.type.wgsl",
				match: "\\b(enum)\\b"
			},
			{
				comment: "struct keyword",
				name: "keyword.declaration.struct.wgsl storage.type.wgsl",
				match: "\\b(struct)\\b"
			},
			{
				comment: "fn",
				name: "keyword.other.fn.wgsl",
				match: "\\bfn\\b"
			},
			{
				comment: "logical operators",
				name: "keyword.operator.logical.wgsl",
				match: "(\\^|\\||\\|\\||&&|<<|>>|!)(?!=)"
			},
			{
				comment: "logical AND, borrow references",
				name: "keyword.operator.borrow.and.wgsl",
				match: "&(?![&=])"
			},
			{
				comment: "assignment operators",
				name: "keyword.operator.assignment.wgsl",
				match: "(\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=)"
			},
			{
				comment: "single equal",
				name: "keyword.operator.assignment.equal.wgsl",
				match: "(?<![<>])=(?!=|>)"
			},
			{
				comment: "comparison operators",
				name: "keyword.operator.comparison.wgsl",
				match: "(=(=)?(?!>)|!=|<=|(?<!=)>=)"
			},
			{
				comment: "math operators",
				name: "keyword.operator.math.wgsl",
				match: "(([+%]|(\\*(?!\\w)))(?!=))|(-(?!>))|(/(?!/))"
			},
			{
				comment: "dot access",
				name: "keyword.operator.access.dot.wgsl",
				match: "\\.(?!\\.)"
			},
			{
				comment: "dashrocket, skinny arrow",
				name: "keyword.operator.arrow.skinny.wgsl",
				match: "->"
			}
		]
	}
};
const wgsl_tmLanguage = {
	name: name,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository
};

export { wgsl_tmLanguage as default, name, patterns, repository, scopeName };
