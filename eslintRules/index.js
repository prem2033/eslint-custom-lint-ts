module.exports = {
    rules: {
        "method-deprecated": {
            create: function (context) {
                return {
                    CallExpression: (node) => {
                        const name = node.callee.name;
                        if (name === 'getPaymet') {
                            context.report(
                                node,
                                `Method ${name} is deprecated Use getLatestPayment`
                            );
                        }
                    }
                }
            },
        }
    },
};