const mongoose = require('mongoose')
const validator = require('validator')


const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const categorySchema = new Schema({

    _id: {
        type:Object,
        oid: {
            type: String
        }
    },

    href: {
        type: String
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String  
    },
    version: {
        type: String    
    },
    validFor: {
        type: Object,
        startDate: {
            type: Object,
            date: {
                type: String
            }
        },
        endDate: {
            type: Object,
            date: {
                type: String
            }
        }
    },
    lifecycleStatus: {
        type: String,
       
    },
    lastUpdate: {
        type: Object,
        date: {
            type: String
        }
        
    },
    subCategory: [{
        href: {
            type: String,
        },
        id: {
            type: String,
        },
        name: {
            type: String,
        },
        _id :false
    }],
    relatedParty: [{
        href: {
            type: String,
        },
        id: {
            type: String,
        },
        name: {
            type: String,
        },
        role: {
            type: String,
        },
        _id :false
    }]
    
})
const Category = mongoose.model('Category', categorySchema, 'Category');

module.exports = Category