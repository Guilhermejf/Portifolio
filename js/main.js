const profile = {
  photo: document.querySelector(".photo"),
  job: document.querySelector(".contact"),
  locate: document.querySelector(".locate"),
  whats: document.querySelector(".whats"),
  email: document.querySelector(".email"),
};

const langUl = document.getElementById("lang");

async function listLanguages(profileData) {
  let lang = profileData.languages;
  lang.forEach((element) => {
    const line = document.createElement("li");
    line.innerHTML = element;
    langUl.appendChild(line);
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
})();
