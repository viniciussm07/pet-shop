import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }],
    isAdm: {
        type: Boolean,
        required: true,
        default: false
    }
});

// Método deletar por Id
schema.statics.deleteById = function(_id) {
    return this.deleteOne({ _id: _id });
  };

export default mongoose.model('User', schema)