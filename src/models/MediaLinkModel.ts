import mongoose, { Schema } from "mongoose";
import { IMediaLink } from "../core/api/IHomeProvider";

const MediaLinkSchema: Schema = new Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    logo: { type: String, required: true },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

MediaLinkSchema.index({ name: "text" }, { unique: true } );

export default mongoose.model<IMediaLink>("medialinks", MediaLinkSchema);