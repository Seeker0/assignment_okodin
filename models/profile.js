'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    gender: {
      type: DataTypes.STRING,
      isIn: [['male', 'female']],
      validate: {
        notEmpty: {
          msg: 'Gender cannot be empty'
        },
        isAlpha: {
          msg: 'Gender must only be alphabetic'
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      len: 2,
      min: 18,
      max: 99,
      validate: {
        notEmpty: {
          msg: 'Age cannot be empty'
        },
        isNumeric: {
          msg: 'Age must only be numberic'
        }
      }
    },
    zipCode: {
      type: DataTypes.STRING,
      len: 10,
      validate: {
        notEmpty: {
          msg: 'Zip Code cannot be empty'
        },
        isAlpha: {
          msg: 'Zip Code must only be numeric'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      isIn: [['single', 'dating', 'married', 'divorced', 'complicated']],
      validate: {
        notEmpty: {
          msg: 'Status cannot be empty'
        },
        isAlpha: {
          msg: 'Status must only be alphabetic'
        }
      }
    },
    feet: {
      type: DataTypes.INTEGER,
      len: 1,
      min: 3,
      max: 8,
      validate: {
        notEmpty: {
          msg: 'Feet cannot be empty'
        },
        isNumeric: {
          msg: 'Feet must only be numberic'
        }
      }
    },
    inches: {
      type: DataTypes.INTEGER,
      len: [1, 2],
      min: 1,
      max: 11,
      validate: {
        notEmpty: {
          msg: 'Inches cannot be empty'
        },
        isNumeric: {
          msg: 'Inches must only be numberic'
        }
      }
    },
    hair: {
      type: DataTypes.STRING,
      isIn: [['blonde', 'brown', 'black', 'red', 'gray', 'bald', 'other']],
      validate: {
        notEmpty: {
          msg: 'Hair cannot be empty'
        },
        isAlpha: {
          msg: 'Hair must only be alphabetic'
        }
      }
    },
    eye: {
      type: DataTypes.STRING,
      isIn: [['brown', 'blue', 'green', 'hazel', 'gray']],
      validate: {
        notEmpty: {
          msg: 'Eyes cannot be empty'
        },
        isAlpha: {
          msg: 'Eyes must only be alphabetic'
        }
      }
    },
    build: {
      type: DataTypes.STRING,
      isIn: [['fit', 'average', 'eh', 'overweight']],
      validate: {
        notEmpty: {
          msg: 'Build cannot be empty'
        },
        isAlpha: {
          msg: 'Build must only be alphabetic'
        }
      }
    },
    userId: Sequelize.INTEGER
  });

  Profile.associate = function(models) {
    Profile.hasOne(models.User, {
      foreignKey: 'profileId'
    });
  };

  return Profile;
};
