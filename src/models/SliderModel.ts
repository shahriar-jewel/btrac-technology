import mongoose, { Schema } from "mongoose";
import { ISlider } from "../core/api/IHomeProvider";

const SliderSchema: Schema = new Schema({
    title:{ type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

SliderSchema.index({ title: "text" }, { unique: true } );

export default mongoose.model<ISlider>("sliders", SliderSchema);