import React from "react";
import './Tehnologies.css';

const technologies = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "javascript logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "typescript logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "nodejs logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "express logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", alt: "npm logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "react logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg", alt: "eslint logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "mongodb logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "html5 logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "css3 logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "python logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "flask logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "flutter logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", alt: "dart logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", alt: "androidstudio logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg", alt: "debian logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", alt: "bash logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", alt: "linux logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "docker logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", alt: "nginx logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", alt: "go logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "c logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "cplusplus logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", alt: "aftereffects logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", alt: "photoshop logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "git logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "github logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", alt: "canva logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg", alt: "chrome logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", alt: "google logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", alt: "oracle logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", alt: "redis logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", alt: "sqlite logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "mysql logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "php logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "vscode logo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg", alt: "vim logo" },
];

function Tehnologies() {
  return (
    <div className="technologies-container">
      {technologies.map((tech, index) => (
        <div key={index} className="technology-item" style={{ '--order': index }}>
          <img src={tech.src} alt={tech.alt} />
        </div>
      ))}
    </div>
  );
}

export default Tehnologies;
