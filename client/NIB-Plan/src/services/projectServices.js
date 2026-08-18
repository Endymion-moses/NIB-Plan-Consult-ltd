import project_image from "../assets/bg_image5.jpg";

export const TABS = ["All", "Highway" , "Bridges" , "Water Projects"];

export const projects= [
 {
    name:"Design of Two Low cost Bridges at Rawa and Mtendezi",
    client:"Sugar Board of Tanzania",
    date:"20th-August-2010 to 30th-September-2011",
    service:"design of 25m to 25m span bridges from Rawa to Mtendewa rivers including supervision of the construction works",
    image:project_image,
    status:"Highway"
 }
,

 {
    name:"Design of Two Low cost Bridges at Rawa and Mtendezi",
    client:"Sugar Board of Tanzania",
    date:"20th-August-2010 to 30th-September-2011",
    service:"design of 25m to 25m span bridges from Rawa to Mtendewa rivers including supervision of the construction works",
    image:project_image,
    status:"Bridges"
 },

 {
    name:"Design of Two Low cost Bridges at Rawa and Mtendezi",
    client:"Sugar Board of Tanzania",
    date:"20th-August-2010 to 30th-September-2011",
    service:"design of 25m to 25m span bridges from Rawa to Mtendewa rivers including supervision of the construction works",
    image:project_image,
    status:"Water Projects"
 },

 {
    name:"Design of Two Low cost Bridges at Rawa and Mtendezi",
    client:"Sugar Board of Tanzania",
    date:"20th-August-2010 to 30th-September-2011",
    service:"design of 25m to 25m span bridges from Rawa to Mtendewa rivers including supervision of the construction works",
    image:project_image,
    status:"Bridges"
 }

]

export const countByStatus = (records, status) =>
  records.filter((record) => record.status === status).length;