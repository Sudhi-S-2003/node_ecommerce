const mongoose  = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: [true,"Please enter product name"],
        },
        price : {
            type: Number,
            default : 0,

        },
        quantity : {
            type: Number,
            default: 1
        },
        description : {
            type: String,
            required: [true,"Please enter product description"],
            },
            
            image:{
                type: String,
                require: false,

            },

            },
            {
                timestamps: true
            }
    
);
const Product =mongoose.model("Product",ProductSchema);
module.exports = Product;