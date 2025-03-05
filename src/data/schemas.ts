import { z } from "astro:schema";

export const userSchema = z.object({
  name: z.string(),
  label: z.string(),
  image: z.string(),
  email: z.string().email("Inalid email"),
  phone: z.string(),
  url: z.string().url(),
  blog: z.string().url(),
  summary: z.string(),
  location: z.object({ address: z.string(), map: z.string().url() }),
  profiles: z.array(
    z.object({
      url: z.string().url(),
      network: z.string(),
      username: z.string(),
    }),
  ),
});

export const workSchema = z.array(
  z.object({
    name: z.string(),
    position: z.string(),
    summary: z.string(),
    location: z.string(),
    url: z.string().url().optional(),
    startDate: z.string(),
    endDate: z.string(),
    remote: z.boolean(),
    highlights: z.array(z.string()),
  }),
);

export const educationSchema = z.array(
  z.object({
    institution: z.string(),
    url: z.string().url().optional(),
    area: z.string(),
    course: z.string(),
    studyType: z.string(),
    startDate: z.string(),
    endDate: z.string(),
  }),
);

export const skillsSchema = z.array(z.string());

export const projectsSchema = z.array(
  z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    urls: z.array(z.string().url()),
    tags: z.array(z.string()),
    highlights: z.array(z.string()),
  }),
);
