import React from "react";
import { ServiceBlock } from "../../../common/ServiceBlock/ServiceBlock";



export const ServiceStory = () => (
  <ServiceBlock
    layout='desktop'
    title='about us'
    paragraphs={['paragraph 1', 'paragraph 2', 'paragraph 3']}
  />
);

ServiceStory.storyName = "Service Block";
