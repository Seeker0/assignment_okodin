'use strict';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      fname: {
        type: DataTypes.STRING,
        len: [2,20],
        // First name validation
        validate: {
          notEmpty: {
            msg: 'First name cannot be empty'
          },
          isAlpha: {
            msg: 'First name must only be alphabetic'
          }
        }
      },
      lname: {
        type: DataTypes.STRING,
        len: [2,20],
        // First name validation
        validate: {
          notEmpty: {
            msg: 'Last name cannot be empty'
          },
          isAlpha: {
            msg: 'Last name must only be alphabetic'
          }
        }
      },
      username: {
        type: DataTypes.STRING,
        len: [8,16],
        validate:{
          notEmpty: {
            msg: 'Username cannot be empty'
          },
          isAlphanumeric: {
            msg: 'Username is invalid'
          }
        }
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Email cannot be empty'
          },
          isEmail: {
            msg: 'Email is invalid'
          }
        }
      },
      profileId: DataTypes.INTEGER
    },
    {}
  );
  return User;
};
