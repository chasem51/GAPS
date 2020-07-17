import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Relativity",
      image: "./img/100k_final_web__.jpg",
      aspect: 1.51,
      text: "66% of Americans who make New Year's resolutions aim to improve their fitness. Of those, 73% gave up prior to their goal. The cheesy 'fitness is a marathon, not a sprint' actually holds very true within our US gym populaton."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Diamond Road",
      image: "./img/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1.5,
      text:
        "Those in search of a strength, conditioning, dietary, or sport-specific program: we may practically assist you in defeating the next training plateau without injury."
    },  
    {
      offset: 3,
      factor: 2.25,
      header: "Programming",
      image: "./img/dummyspread.PNG",
      aspect: 1.5037,
      text:
        "Please refer to our programs + coaching options for better direction. You don't need to be knowledgable to experience the benefits of following a dynamic training program. "
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Invaluable Insight",
      image: "./img/ph3.jpg",
      aspect: 0.665,
      text:
        "All that is necessary: contact with the right training resource! We hope to be that resource for you, sparing the Jersey Shore 'all pain no gain' disaster-prone programming."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Commited Athletes",
      image: "./img/photo-1533577116850-9cc66cad8a9b.jpeg",
      aspect: 1.55,
      text:
        "Make the next commitment on your fitness journey. Our team amasses over 50 years of powerlifting, bodybuilding, and sport-specific training protocol."
    },
    { offset: 7, factor: 1.05, header: "A Factory", image: "./img/photo-1548191265-cc70d3d45ba1.jpeg", aspect: 1.77, text: "Contact us if any additional information can be provided." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
