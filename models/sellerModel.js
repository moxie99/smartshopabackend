const { Schema, model } = require('mongoose');

const sellerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      default: 'seller',
    },
    status: {
      type: String,
      default: 'pending',
    },
    payment: {
      type: String,
      default: 'inactive',
    },
    method: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    shopInfo: {
      type: Object,
      default: {},
    },
    DateOfBirth: {
      type: String,
      required: true,
    },
    acctName: {
      type: String,
      required: true,
    },
    acctNum: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    billContInfo: {
      type: String,
      required: true,
    },
    busLicOrPerNumber: {
      type: String,
      required: true,
    },
    businessAddress: {
      type: String,
      required: true,
    },
    businessName: {
      type: String,
      required: true,
    },
    businessPhoneNumber: {
      type: String,
      required: true,
    },
    businessType: {
      type: String,
      required: true,
    },
    businessWebsite: {
      type: String,
      default: 'nill',
    },
    deliverDaily: {
      type: String,
      required: true,
    },
    deliveryArea: {
      type: String,
      required: true,
    },
    deliveryDay1: {
      type: String,
      required: true,
    },
    deliveryDay2: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    paymentTerms: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    preferredDeliveryPartners: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productImg: {
      type: String,
      required: true,
    },
    productImgName: {
      type: String,
      required: true,
    },
    regulatoryDetails: {
      type: String,
      required: true,
    },
    residentialAddress: {
      type: String,
      required: true,
    },
    socialMedLink: {
      type: String,
      required: true,
    },
    tin: {
      type: String,
      required: true,
    },
    uniqueSellingPoints: {
      type: String,
      required: true,
    },
    wantTopickOtherDays: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

sellerSchema.index(
  {
    name: 'text',
    email: 'text',
  },
  {
    weights: {
      name: 5,
      email: 4,
    },
  }
);

module.exports = model('sellers', sellerSchema);
