import mongoose from "mongoose";

main()
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));

async function main(){
    await mongoose.connect("mongodb://localhost:27017/zenxuary");
}

const pri_ListingSchema = new mongoose.Schema({
    company_name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String },
    service: { type: Number, required: true },
    createdAt: { type: Date}
});

const pri_Listing = mongoose.model("pri_Listing", pri_ListingSchema);

export default pri_Listing;
