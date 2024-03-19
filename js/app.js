const projects = [
  {
    title: "Pixer-project",
    githubLink: "https://github.com/Tursunboev/Pixer-project.git",
    vercelLink: "https://pixer-project-61qi.vercel.app/",
  },
  {
    title: "Test-project",
    githubLink: "https://github.com/Tursunboev/test-project.git",
    vercelLink: "https://vercel.com/akmalxons-projects-228de545/test-project",
  },
  {
    title: "Figma-1",
    githubLink: "https://github.com/Tursunboev/1-figma.git",
    vercelLink: "https://1-figma-g8cl.vercel.app/",
  },
  {
    title: "Figma-2" ,
    githubLink: "https://github.com/Tursunboev/2-figma-.git",
    vercelLink: "https://1-figma-jmuv.vercel.app/" ,
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