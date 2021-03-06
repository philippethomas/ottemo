/**
 * User
 *
 * @module      :: User
 * @description :: basic user model 
 * @docs		:: TBD
 */

module.exports = {

  attributes: {

    email: {
      type: 'String',
      trim: true,
      lowercase: true,
      required: true,
      unique: true
    },

    is_active: {
      type: 'Boolean',
      default: false
    },

    fname: {
      type: 'String',
      trim: true,
      required: true
    },

    lname: {
      type: 'String',
      trim: true,
      required: true
    },

    nickname: {
      type: 'String',
      trim: true
    },

    group: {
      type: 'String',
      enum: ['Visitor', 'Member', 'Admin'],
      default: 'Visitor',
      required: true
    },

    hashed_password: {
      type: 'String',
      trim: true
    },

    tmp_pass_flag: {
      type: 'Boolean',
      default: false
    }

  }

};
