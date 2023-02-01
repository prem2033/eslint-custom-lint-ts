module.exports = {
    rules: {
        "method-deprecated": {
            create: function (context) {
                return {
                    CallExpression(node) {
                        const name = node.callee.name;
                        if (name === 'getPaymet') {
                            context.report(
                                node,
                                `Method '${name}' is deprecated Use getLatestPayment`
                            );
                        }
                    }
                }
            },
        },
        "class-declaration": {
            create: function (context) {
                return {
                    ClassDeclaration(node) {
                        const className = node.id.name;
                        if (!isFirstLetterCapital(className)) {
                            context.report({
                                node: node,
                                message: `'${className}' should starts with upper case`
                            });
                        }
                        if (containSubString(className.toLowerCase(className), 'class')) {
                            context.report({
                                node: node,
                                message: `'${className}' should not contain word class`
                            });
                        }
                    }
                }
            },
        },
        "class-method-declaration": {
            meta: {
                fixable: 'code',
                type: 'problem',
            },
            create: function (context) {
                return {
                    MethodDefinition(node) {
                        const methodName = node.key.name;
                        const start = node.key.range[0];
                        const accessibility = node.accessibility;
                        if (isFirstLetterCapital(methodName)) {
                            context.report({
                                node: node,
                                message: `Method '${methodName}' should starts with upper case`,
                                fix: function (fixer) {
                                    return fixer.replaceTextRange([start, start + 1], (methodName.charAt(0)).toLowerCase());
                                }
                            });
                        }
                        if (accessibility === undefined && methodName !== 'constructor') {
                            context.report({
                                node: node,
                                message: `Missing accessibility for '${methodName}'`
                            });
                        }
                    }
                }
            },
        },
        "function-declaration": {
            create: function (context) {
                return {
                    FunctionDeclaration(node) {
                        const methodName = node.id.name;
                        if (isFirstLetterCapital(methodName)) {
                            context.report({
                                node: node,
                                message: `function '${methodName}'should starts with upper case`
                            });
                        }
                    }
                }
            },
        },
        "enum-validation": {
            create: function (context) {
                return {
                    TSEnumMember(node) {
                        const memberName = node.id.name ? node.id.name : node.id.value;
                        if (!verifyEnumration(memberName)) {
                            context.report({
                                node: node,
                                message: `'${memberName}': allowed character [A-Z,_]`
                            });
                        }
                    }
                }
            },
        },
        "vars-declaration": {
            create: function (context) {
                return {
                    VariableDeclarator(node) {
                        if (node.id.type === 'Identifier' && isFirstLetterCapital(node.id.name) && !verifyEnumration(node.id.name)) {
                            context.report({
                                node: node,
                                message: `variable '${node.id.name}' should starts with smallcase or Allowed Character[A-Z,_]`
                            });
                        }
                    }
                }
            },
        },
        "interface-validator": {
            create: function (context) {
                return {
                    TSInterFaceDeclaration(node) {
                        if (isInterfaceValid(node.id.name)) {
                            context.report({
                                node: node,
                                message: `'${node.id.name}' should not starts with I/i or small case`
                            });
                        }
                    },
                    Identifier(node) {
                        if (node.parent.parent.type === 'TSInterfaceBody' && isFirstLetterCapital(node.name)) {
                            context.report({
                                node: node,
                                message: `Interface memebr '${node.name}' should not starts with upper case`
                            });
                        }
                    }
                }
            },
        },
    },
};

function isFirstLetterCapital(word) {
    return /^[A-Z]/.test(word);
}
//enum always should have [A-z,_]
function verifyEnumration(word) {
    return /^[A-Z,_]+[A-Z]$/.test(word);
}

function containSubString(word, contain) {
    return word.includes(contain);
}

function isInterfaceValid(word) {
    return (!isFirstLetterCapital(word) || /^[I]/i.test(word));
}

module.exports.configs = {
    customConfig1: {
        rules: {
            'custom-lint/method-deprecated': 'error',
            'custom-lint/class-declaration': 'error',
            'custom-lint/class-method-declaration': 'error',
            'custom-lint/function-declaration': 'error',
            'custom-lint/enum-validation': 'error',
            'custom-lint/vars-declaration': 'error',
            'custom-lint/interface-validator': 'error'
        }
    },
    customConfig2: {
        rules: {
            'custom-lint/method-deprecated': 'error',
            'custom-lint/class-declaration': 'error',
            'custom-lint/class-method-declaration': 'error',
            'custom-lint/function-declaration': 'error',
            'custom-lint/enum-validation': 'error',
            'custom-lint/vars-declaration': 'error',
            'custom-lint/interface-validator': 'error'
        }
    }
}