import { faker } from "@faker-js/faker";
import { sample } from "lodash";

const users = [...Array(50)].map((_, index) => ({
  id: faker.datatype.uuid(),
  // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  avatarUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
    index + 1
  }.png`,
  name: faker.name.fullName(),
  job_title: sample([
    "Supervisor",
    "Associate",
    "Executive",
    "Liason",
    "Officer",
    "Manager",
    "Engineer",
    "Specialist",
    "Director",
    "Coordinator",
    "Administrator",
    "Architect",
    "Analyst",
    "Designer",
    "Planner",
    "Synergist",
    "Orchestrator",
    "Technician",
    "Developer",
    "Producer",
    "Consultant",
    "Assistant",
    "Facilitator",
    "Agent",
    "Representative",
    "Strategist",
  ]),
  // isVerified: faker.datatype.boolean(),
  status: sample(["active", "banned"]),
  role: sample([
    "Corasco",
    "Servicio Profesional",
    "Proyecto MTI",
    "Grupo FOMAV",
    "Microempresa G-1",
    "Microempresa G-2",
    "Microempresa G-3",
    "Microempresa G-4",
  ]),
}));

export default users;
