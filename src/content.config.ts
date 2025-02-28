import {
  educationSchema,
  projectsSchema,
  skillsSchema,
  userSchema,
  workSchema,
} from "@cv/schemas";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const user = defineCollection({
  loader: glob({ pattern: "**/user.json", base: "./data" }),
  schema: userSchema,
});

const work = defineCollection({
  loader: glob({ pattern: "**/work.json", base: "./data" }),
  schema: workSchema,
});

const education = defineCollection({
  loader: glob({ pattern: "**/education.json", base: "./data" }),
  schema: educationSchema,
});

const skills = defineCollection({
  loader: glob({ pattern: "**/skills.json", base: "./data" }),
  schema: skillsSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: "**/projects.json", base: "./data" }),
  schema: projectsSchema,
});

export const collections = { user, work, education, skills, projects };
