import mongoose, { Schema } from "mongoose";
import { IService } from "../core/api/IHomeProvider";

const ServiceSchema: Schema = new Schema({
    title:{ type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    alt: { type: String, required: true },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

ServiceSchema.index({ title: "text" }, { unique: true } );

export default mongoose.model<IService>("services", ServiceSchema);