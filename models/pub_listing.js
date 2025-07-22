import mongoose from "mongoose";

const pub_ListingSchema = new mongoose.Schema({
    company_name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    service: { type: String, required: true },
    createdAt: { type: Date, required: true},
    profile_pic: {type: String}
});

const pub_Listing = mongoose.model("pub_Listing", pub_ListingSchema);

export default pub_Listing;
