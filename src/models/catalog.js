const mongoose = require('mongoose')
const validator = require('validator')

const catalogSchema = new mongoose.Schema({
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
    catalogType: {
        type: String    
    },
    version: {
        type: String    
    },
    validFor: {
        type: Object,
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        }
    },
    lastUpdate: {
        type: Object,
        $date: {
            type: Date
        }
    },
    lifecycleStatus: {
        type: String,
       
    },
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
    }],
    category: [{
        href: {
            type: String,
        },
        id: {
            type: String,
        },
        name: {
            type: String,
        }
    }]
}, {
    timestamps: true
})
const Catalog = mongoose.model('Catalog', catalogSchema)

module.exports = Catalog