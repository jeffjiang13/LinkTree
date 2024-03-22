import {model, models, Schema} from "mongoose";

const EventSchema = new Schema({
  type: String, // click or view
  page: String, // for example "Jeff"
  uri: String, // /Jeff | https://
}, {timestamps: true});

export const Event = models?.Event || model('Event', EventSchema);
