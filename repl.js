const repl = require("repl").start({});
const lodash = require("lodash");
const helpers = require("./helpers");
const models = require("./models");

// ----------------------------------------
// Libs
// ----------------------------------------
repl.context.lodash = lodash;
repl.context.models = models;

// ----------------------------------------
// Helpers
// ----------------------------------------
repl.context.helpers = helpers;
Object.keys(helpers).forEach(key => {
  repl.context[key] = helpers[key];
});
Object.keys(models).forEach(modelName => {
  repl.context[modelName] = models[modelName];
});

// ----------------------------------------
// Logging
// ----------------------------------------
repl.context.lg = data => {
  if (Array.isArray(data)) {
    if (data.length && data[0].dataValues) {
      data = data.map(item => item.dataValues);
    }
  } else {
    if (data.dataValues) {
      data = data.dataValues;
    }
  }
  console.log(data);
};
