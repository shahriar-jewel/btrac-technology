import mongoose, { Schema } from "mongoose";
import { IPartner } from "../core/api/IHomeProvider";

const PartnerSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    registerLink: { type: String, required: false },
    buttonText: { type: String, required: false },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

PartnerSchema.index({ title: "text" }, { unique: true } );

export default mongoose.model<IPartner>("partners", PartnerSchema);