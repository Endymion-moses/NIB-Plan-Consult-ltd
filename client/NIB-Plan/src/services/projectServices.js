import project_image from "../assets/bg_image5.jpg";

export const TABS = ["All", "Highway" , "Bridges" , "Water Projects"];

export const projects= [
 {
    name:"Design of Two Low cost Bridges at Rawa and Mtendezi",
    client:"Sugar Board of Tanzania",
    date:"20th-August-2010 to 30th-September-2011",
    service:"Design of 25m span bridges at the Rawa and Mtendezi rivers, including construction supervision.",
    details:"The assignment covered engineering design development and construction-stage supervision for low-cost bridge infrastructure. The team coordinated technical requirements to support a safe and practical connection across the river crossings.",
    image:project_image,
    status:"Highway"
 }
,

 {
    name:"Design of Two Low cost Bridges at Rawa and Mtendezi",
    client:"Sugar Board of Tanzania",
    date:"20th-August-2010 to 30th-September-2011",
    service:"Design of 25m span bridges at the Rawa and Mtendezi rivers, including construction supervision.",
    details:"The project demonstrates our approach to bridge assignments: understanding site requirements, preparing practical designs and providing technical oversight during construction work.",
    image:project_image,
    status:"Bridges"
 },

 {
    name:"Design of Two Low cost Bridges at Rawa and Mtendezi",
    client:"Sugar Board of Tanzania",
    date:"20th-August-2010 to 30th-September-2011",
    service:"Design of 25m span bridges at the Rawa and Mtendezi rivers, including construction supervision.",
    details:"Our scope combined infrastructure design with construction supervision, supporting a coordinated delivery process from technical documentation through implementation.",
    image:project_image,
    status:"Water Projects"
 },

 {
    name:"Design of Two Low cost Bridges at Rawa and Mtendezi",
    client:"Sugar Board of Tanzania",
    date:"20th-August-2010 to 30th-September-2011",
    service:"Design of 25m span bridges at the Rawa and Mtendezi rivers, including construction supervision.",
    details:"The service focused on developing durable bridge solutions and maintaining attention to quality throughout the construction supervision period.",
    image:project_image,
    status:"Bridges"
 }

]

export const countByStatus = (records, status) =>
  records.filter((record) => record.status === status).length;
