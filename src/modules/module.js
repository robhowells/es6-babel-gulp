const myModule = (value) => {
    console.log("Code loaded from module.js");
    return value * value;
};

module.exports = myModule;
