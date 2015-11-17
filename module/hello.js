// What you notice here, is that we are assigning a property called 'world' to
// an object called 'exports'. Such an 'exports' object is available in every
// module, and it is returned whenever the require function is used to include
// the module.
exports.world = function() {
    return 'Hello World';
}
