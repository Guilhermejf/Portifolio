const profile = {
  photo: document.querySelector(".photo"),
  job: document.querySelector(".contact"),
  locate: document.querySelector(".locate"),
  whats: document.querySelector(".whats"),
  email: document.querySelector(".email"),
};

const langUl = document.getElementById("lang");
const softSkills = document.getElementById("softskills");
const hardSkills = document.querySelector(".boxskillpro");
const portUL = document.getElementById("listprojects");
const xplist = document.getElementById("xplist");

function listSoftSkills(dados) {
  let sskills = dados.skills.softSkills;
  sskills.forEach((e) => {
    const line = document.createElement("li");
    line.innerHTML = e;
    softSkills.appendChild(line);
  });
}
function listHardSkills(dados) {
  let hskills = dados.skills.hardSkills;
  hskills.forEach((e) => {
    const span = document.createElement("span");
    const img = document.createElement("img");
    hardSkills.appendChild(span);
    span.appendChild(img);
    img.src = e.logo;
  });
}

function listLanguages(dados) {
  let lang = dados.languages;
  lang.forEach((element) => {
    const line = document.createElement("li");
    line.innerHTML = element;
    langUl.appendChild(line);
  });
}

function listPortifolio(dados) {
  let port = dados.portfolio;
  port.forEach((e) => {
    let subtitle = document.createElement("h3");
    let line = document.createElement("li");
    let link = document.createElement("a");
    subtitle.innerText = e.name;
    link.href = e.url;
    link.innerText = e.url
    console.log(link)
    line.appendChild(link)
    portUL.appendChild(subtitle);
    portUL.appendChild(line);
  });
}

function listXP(dados) {
  let xp = dados.professionalExperience;
  xp.forEach((x) => {
    let subtitle = document.createElement("h3");
    let period = document.createElement("span");
    let description = document.createElement("li");
    subtitle.innerText = x.name;
    period.innerText = x.period;
    description.innerText = x.description;
    xplist.appendChild(subtitle);
    xplist.appendChild(period);
    xplist.appendChild(description);
  });
}

function updateProfileInfo(profileData) {
  profile.photo.src = profileData.photo;
  profile.job.innerHTML = profileData.job;
  profile.locate.innerHTML = profileData.location;
  profile.whats.innerHTML = profileData.phone;
  profile.email.innerHTML = profileData.email;
}

(async function init() {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  listLanguages(profileData);
  listSoftSkills(profileData);
  listHardSkills(profileData);
  listPortifolio(profileData);
  listXP(profileData);
})();
