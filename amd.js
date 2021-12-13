(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(function() {
            return factory(root);
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(root);
    } else {
        return root.AA = factory(root);
    }
}(({}), function() {
    return {
        a: 1,
        b: 1
    };
}));