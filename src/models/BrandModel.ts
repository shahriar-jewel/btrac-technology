import mongoose, { Schema } from "mongoose";
import { IBrand } from "../core/api/IHomeProvider";

const BrandSchema: Schema = new Schema({
    image: { type: String, required: true },
    alt: { type: String, required: true },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

BrandSchema.index({ alt: "text" }, { unique: true } );

export default mongoose.model<IBrand>("brands", BrandSchema);