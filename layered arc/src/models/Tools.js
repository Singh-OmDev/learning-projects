const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true,
    },
     category: {
        type: String,
        required: true,
        trim: true,
        enum: ['Development', 'Design', 'Testing', 'Deployment', 'Other'],
    },
    description: {
        type: String,   
        required: true,
        trim: true,
        },
    url: {
        type: String,
        required: true,
        trim: true,
            validate: { 
                validator: function(v) {
                    return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
                },
                message: props => `${props.value} is not a valid URL!`
            }   
    },
     isPopular: {
        type: Boolean,
        default: false,
    },  
    tags: {
        type: [String],
        default: [],
    },

}, {
    timestamps: true,
}); 

  toolSchema.index({ name: 'text', description: 'text', category: 'text', tags: 'text' });

toolSchema.index({ name: 1 });


toolSchema.pre('save', function(next) {
    this.name = this.name.trim();
    this.category = this.category.trim();
    this.description = this.description.trim();
    next();
});

toolSchema.static.findByCategory = function(category) {
    return this.find({ category: category });
};

 const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;
