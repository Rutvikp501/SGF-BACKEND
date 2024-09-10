const mongoose = require('mongoose');

const JunkleadSchema = new mongoose.Schema(
    {
      consultant: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
      consultant_code: {  type: String, required: true },
      leadID: { type: String, unique: true, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      pincode: { type: String, required: true },
      eventSpecialsName: { type: String,  },
      specialCode: { type: String, },
      leadType: { type: String, required: true },
      cycle:  {
        label: { type: String },
        number: { type: Number },
        year: { type: String }
      },  
      events: [{
        name: { type: String },
        date: { type: Date },
        location: { type: String },
        timing: { type: String }
      }],
      package: { 
        name: { type: String },
        subname: { type: String },
        addonS: [{ type: String }],
        amount: { type: Number }
      },
rejectionMark:{type:String},  
rejectionDate: { type: Date ,default: null},
}, { timestamps: true });

const JunkLeadModel = mongoose.model('junk_lead', JunkleadSchema);

module.exports = JunkLeadModel;
