const projects = [
  {
    title: "Pixer-project",
    githubLink: "https://github.com/Tursunboev/Pixer-project.git",
    vercelLink: "https://pixer-project-sigma.vercel.app/",
  },
  {
    title: "Test-project",
    githubLink: "https://github.com/Tursunboev/test-project.git",
    vercelLink: "https://test-project-lake-one.vercel.app/",
  },
  {
    title: "Figma-1",
    githubLink: "https://github.com/Tursunboev/1-figma.git",
    vercelLink: "https://1-figma.vercel.app/",
  },
  {
    title: "Figma-2" ,
    githubLink: "https://github.com/Tursunboev/2-figma-.git",
    vercelLink: "https://2-figma-five.vercel.app/" ,
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});