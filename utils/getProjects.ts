import { ProjectsNames } from "@/constant/constant";

export const getProjects = async () => {
  const projects = ProjectsNames.map(async ({ name }) => {
    const res = await fetch(`https://api.github.com/repos/Gbrlbrgm/${name}`);
    const data = await res.json();
    const imageUrl = `https://raw.githubusercontent.com/Gbrlbrgm/${name}/refs/heads/main/thumb/${name.toLowerCase()}-thumb.png`;
    return {
      ...data,
      custom_image: imageUrl,
    };
  });
  return Promise.all(projects);
};
