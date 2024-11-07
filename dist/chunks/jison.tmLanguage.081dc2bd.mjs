const name = "jison";
const scopeName = "source.jison";
const fileTypes = [
	"jison"
];
const patterns = [
	{
		begin: "%%",
		end: "\\z",
		beginCaptures: {
			"0": {
				name: "meta.separator.section.jison"
			}
		},
		patterns: [
			{
				begin: "%%",
				end: "\\z",
				beginCaptures: {
					"0": {
						name: "meta.separator.section.jison"
					}
				},
				patterns: [
					{
						name: "meta.section.epilogue.jison",
						begin: "\\G",
						end: "\\z",
						contentName: "source.js.embedded.jison",
						patterns: [
							{
								include: "#epilogue_section"
							}
						]
					}
				]
			},
			{
				name: "meta.section.rules.jison",
				begin: "\\G",
				end: "(?=%%)",
				patterns: [
					{
						include: "#rules_section"
					}
				]
			}
		]
	},
	{
		name: "meta.section.declarations.jison",
		begin: "^",
		end: "(?=%%)",
		patterns: [
			{
				include: "#declarations_section"
			}
		]
	}
];
const repository = {
	declarations_section: {
		patterns: [
			{
				include: "#comments"
			},
			{
				begin: "^\\s*(%lex)\\s*$",
				end: "^\\s*(/lex)\\b",
				beginCaptures: {
					"1": {
						name: "entity.name.tag.lexer.begin.jison"
					}
				},
				endCaptures: {
					"1": {
						name: "entity.name.tag.lexer.end.jison"
					}
				},
				patterns: [
					{
						begin: "%%",
						end: "(?=/lex)",
						beginCaptures: {
							"0": {
								name: "meta.separator.section.jisonlex"
							}
						},
						patterns: [
							{
								begin: "^%%",
								end: "(?=/lex)",
								beginCaptures: {
									"0": {
										name: "meta.separator.section.jisonlex"
									}
								},
								patterns: [
									{
										name: "meta.section.user-code.jisonlex",
										begin: "\\G",
										end: "(?=/lex)",
										contentName: "source.js.embedded.jisonlex",
										patterns: [
											{
												include: "source.jisonlex#user_code_section"
											}
										]
									}
								]
							},
							{
								name: "meta.section.rules.jisonlex",
								begin: "\\G",
								end: "^(?=%%|/lex)",
								patterns: [
									{
										include: "source.jisonlex#rules_section"
									}
								]
							}
						]
					},
					{
						name: "meta.section.definitions.jisonlex",
						begin: "^",
						end: "(?=%%|/lex)",
						patterns: [
							{
								include: "source.jisonlex#definitions_section"
							}
						]
					}
				]
			},
			{
				name: "meta.section.prologue.jison",
				begin: "(?=%\\{)",
				end: "(?<=%\\})",
				patterns: [
					{
						include: "#user_code_blocks"
					}
				]
			},
			{
				include: "#options_declarations"
			},
			{
				name: "keyword.other.declaration.$1.jison",
				match: "%(ebnf|left|nonassoc|parse-param|right|start)\\b"
			},
			{
				include: "#include_declarations"
			},
			{
				name: "meta.code.jison",
				begin: "%(code)\\b",
				end: "$",
				beginCaptures: {
					"0": {
						name: "keyword.other.declaration.$1.jison"
					}
				},
				patterns: [
					{
						include: "#comments"
					},
					{
						include: "#rule_actions"
					},
					{
						name: "keyword.other.code-qualifier.$1.jison",
						match: "(init|required)"
					},
					{
						include: "#quoted_strings"
					},
					{
						name: "string.unquoted.jison",
						match: "\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b"
					}
				]
			},
			{
				name: "meta.parser-type.jison",
				begin: "%(parser-type)\\b",
				end: "$",
				beginCaptures: {
					"0": {
						name: "keyword.other.declaration.$1.jison"
					}
				},
				patterns: [
					{
						include: "#comments"
					},
					{
						include: "#quoted_strings"
					},
					{
						name: "string.unquoted.jison",
						match: "\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b"
					}
				]
			},
			{
				name: "meta.token.jison",
				begin: "%(token)\\b",
				end: "$|(%%|;)",
				beginCaptures: {
					"0": {
						name: "keyword.other.declaration.$1.jison"
					}
				},
				endCaptures: {
					"1": {
						name: "punctuation.terminator.declaration.token.jison"
					}
				},
				patterns: [
					{
						include: "#comments"
					},
					{
						include: "#numbers"
					},
					{
						include: "#quoted_strings"
					},
					{
						name: "invalid.unimplemented.jison",
						match: "<[[:alpha:]_](?:[\\w-]*\\w)?>"
					},
					{
						name: "entity.other.token.jison",
						match: "\\S+"
					}
				]
			},
			{
				name: "keyword.other.declaration.$1.jison",
				match: "%(debug|import)\\b"
			},
			{
				name: "invalid.illegal.jison",
				match: "%prec\\b"
			},
			{
				name: "invalid.unimplemented.jison",
				match: "%[[:alpha:]_](?:[\\w-]*\\w)?\\b"
			},
			{
				include: "#numbers"
			},
			{
				include: "#quoted_strings"
			}
		]
	},
	rules_section: {
		patterns: [
			{
				include: "#comments"
			},
			{
				include: "#actions"
			},
			{
				include: "#include_declarations"
			},
			{
				name: "meta.rule.jison",
				begin: "\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b",
				end: ";",
				beginCaptures: {
					"0": {
						name: "entity.name.constant.rule-result.jison"
					}
				},
				endCaptures: {
					"0": {
						name: "punctuation.terminator.rule.jison"
					}
				},
				patterns: [
					{
						include: "#comments"
					},
					{
						name: "meta.rule-components.jison",
						begin: ":",
						end: "(?=;)",
						beginCaptures: {
							"0": {
								name: "keyword.operator.rule-components.assignment.jison"
							}
						},
						patterns: [
							{
								include: "#comments"
							},
							{
								include: "#quoted_strings"
							},
							{
								match: "(\\[)([[:alpha:]_](?:[\\w-]*\\w)?)(\\])",
								captures: {
									"1": {
										name: "punctuation.definition.named-reference.begin.jison"
									},
									"2": {
										name: "entity.name.other.reference.jison"
									},
									"3": {
										name: "punctuation.definition.named-reference.end.jison"
									}
								}
							},
							{
								name: "meta.prec.jison",
								begin: "(%(prec))\\s*",
								end: "(?<=['\"])|(?=\\s)",
								beginCaptures: {
									"1": {
										name: "keyword.other.$2.jison"
									}
								},
								patterns: [
									{
										include: "#comments"
									},
									{
										include: "#quoted_strings"
									},
									{
										name: "constant.other.token.jison",
										begin: "(?=\\S)",
										end: "(?=\\s)"
									}
								]
							},
							{
								name: "keyword.operator.rule-components.separator.jison",
								match: "\\|"
							},
							{
								name: "keyword.other.$0.jison",
								match: "\\b(?:EOF|error)\\b"
							},
							{
								name: "keyword.other.empty.jison",
								match: "(?:%(?:e(?:mpty|psilon))|\\b[Ɛɛεϵ])\\b"
							},
							{
								include: "#rule_actions"
							}
						]
					}
				]
			}
		]
	},
	epilogue_section: {
		patterns: [
			{
				include: "#user_code_include_declarations"
			},
			{
				include: "source.js"
			}
		]
	},
	actions: {
		patterns: [
			{
				name: "meta.action.jison",
				begin: "\\{\\{",
				end: "\\}\\}",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.action.begin.jison"
					}
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.action.end.jison"
					}
				},
				contentName: "source.js.embedded.jison",
				patterns: [
					{
						include: "source.js"
					}
				]
			},
			{
				name: "meta.action.jison",
				begin: "(?=%\\{)",
				end: "(?<=%\\})",
				patterns: [
					{
						include: "#user_code_blocks"
					}
				]
			}
		]
	},
	rule_actions: {
		patterns: [
			{
				include: "#actions"
			},
			{
				name: "meta.action.jison",
				begin: "\\{",
				end: "\\}",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.action.begin.jison"
					}
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.action.end.jison"
					}
				},
				contentName: "source.js.embedded.jison",
				patterns: [
					{
						include: "source.js"
					}
				]
			},
			{
				include: "#include_declarations"
			},
			{
				name: "meta.action.jison",
				begin: "->|→",
				end: "$",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.action.arrow.jison"
					}
				},
				contentName: "source.js.embedded.jison",
				patterns: [
					{
						include: "source.js"
					}
				]
			}
		]
	},
	comments: {
		patterns: [
			{
				name: "comment.line.double-slash.jison",
				begin: "//",
				end: "$",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.jison"
					}
				}
			},
			{
				name: "comment.block.jison",
				begin: "/\\*",
				end: "\\*/",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.begin.jison"
					}
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.comment.end.jison"
					}
				}
			}
		]
	},
	include_declarations: {
		patterns: [
			{
				name: "meta.include.jison",
				begin: "(%(include))\\s*",
				end: "(?<=['\"])|(?=\\s)",
				beginCaptures: {
					"1": {
						name: "keyword.other.declaration.$2.jison"
					}
				},
				patterns: [
					{
						include: "#include_paths"
					}
				]
			}
		]
	},
	user_code_include_declarations: {
		patterns: [
			{
				name: "meta.include.jison",
				begin: "^(%(include))\\s*",
				end: "(?<=['\"])|(?=\\s)",
				beginCaptures: {
					"1": {
						name: "keyword.other.declaration.$2.jison"
					}
				},
				patterns: [
					{
						include: "#include_paths"
					}
				]
			}
		]
	},
	include_paths: {
		patterns: [
			{
				include: "#quoted_strings"
			},
			{
				name: "string.unquoted.jison",
				begin: "(?=\\S)",
				end: "(?=\\s)",
				patterns: [
					{
						include: "source.js#string_escapes"
					}
				]
			}
		]
	},
	numbers: {
		patterns: [
			{
				match: "(0[Xx])([0-9A-Fa-f]+)",
				captures: {
					"1": {
						name: "storage.type.number.jison"
					},
					"2": {
						name: "constant.numeric.integer.hexadecimal.jison"
					}
				}
			},
			{
				name: "constant.numeric.integer.decimal.jison",
				match: "\\d+"
			}
		]
	},
	options_declarations: {
		patterns: [
			{
				name: "meta.options.jison",
				begin: "%options\\b",
				end: "^(?=\\S|\\s*$)",
				beginCaptures: {
					"0": {
						name: "keyword.other.options.jison"
					}
				},
				patterns: [
					{
						include: "#comments"
					},
					{
						name: "entity.name.constant.jison",
						match: "\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b"
					},
					{
						begin: "(=)\\s*",
						end: "(?<=['\"])|(?=\\s)",
						beginCaptures: {
							"1": {
								name: "keyword.operator.option.assignment.jison"
							}
						},
						patterns: [
							{
								include: "#comments"
							},
							{
								name: "constant.language.boolean.$1.jison",
								match: "\\b(true|false)\\b"
							},
							{
								include: "#numbers"
							},
							{
								include: "#quoted_strings"
							},
							{
								name: "string.unquoted.jison",
								match: "\\S+"
							}
						]
					},
					{
						include: "#quoted_strings"
					}
				]
			}
		]
	},
	quoted_strings: {
		patterns: [
			{
				name: "string.quoted.double.jison",
				begin: "\"",
				end: "\"",
				patterns: [
					{
						include: "source.js#string_escapes"
					}
				]
			},
			{
				name: "string.quoted.single.jison",
				begin: "'",
				end: "'",
				patterns: [
					{
						include: "source.js#string_escapes"
					}
				]
			}
		]
	},
	user_code_blocks: {
		patterns: [
			{
				name: "meta.user-code-block.jison",
				begin: "%\\{",
				end: "%\\}",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.user-code-block.begin.jison"
					}
				},
				endCaptures: {
					"0": {
						name: "punctuation.definition.user-code-block.end.jison"
					}
				},
				contentName: "source.js.embedded.jison",
				patterns: [
					{
						include: "source.js"
					}
				]
			}
		]
	}
};
const injections = {
	"L:(meta.action.jison - (comment | string)), source.js.embedded.jison - (comment | string), source.js.embedded.source - (comment | string.quoted.double | string.quoted.single)": {
		patterns: [
			{
				name: "variable.language.semantic-value.jison",
				match: "\\${2}"
			},
			{
				name: "variable.language.result-location.jison",
				match: "@\\$"
			},
			{
				name: "variable.language.stack-index-0.jison",
				match: "##\\$|\\byysp\\b"
			},
			{
				name: "support.variable.token-reference.jison",
				match: "#\\S+#"
			},
			{
				name: "variable.language.result-id.jison",
				match: "#\\$"
			},
			{
				name: "support.variable.token-value.jison",
				match: "\\$(?:-?\\d+|[[:alpha:]_](?:[\\w-]*\\w)?)"
			},
			{
				name: "support.variable.token-location.jison",
				match: "@(?:-?\\d+|[[:alpha:]_](?:[\\w-]*\\w)?)"
			},
			{
				name: "support.variable.stack-index.jison",
				match: "##(?:-?\\d+|[[:alpha:]_](?:[\\w-]*\\w)?)"
			},
			{
				name: "support.variable.token-id.jison",
				match: "#(?:-?\\d+|[[:alpha:]_](?:[\\w-]*\\w)?)"
			},
			{
				name: "variable.language.jison",
				match: "\\byy(?:l(?:eng|ineno|oc|stack)|rulelength|s(?:tate|s?tack)|text|vstack)\\b"
			},
			{
				name: "keyword.other.jison",
				match: "\\byy(?:clearin|erro[kr])\\b"
			}
		]
	}
};
const jison_tmLanguage = {
	name: name,
	scopeName: scopeName,
	fileTypes: fileTypes,
	patterns: patterns,
	repository: repository,
	injections: injections
};

export { jison_tmLanguage as default, fileTypes, injections, name, patterns, repository, scopeName };
