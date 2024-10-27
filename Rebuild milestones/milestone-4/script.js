function generateResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;

  document.getElementById("output-name").textContent = name;
  document.getElementById("output-email").textContent = email;
  document.getElementById("output-phone").textContent = phone;
  document.getElementById("output-address").textContent = address;
  document.getElementById("output-education").textContent = education;
  document.getElementById("output-skills").textContent = skills;
  document.getElementById("output-experience").textContent = experience;

  document.getElementById("resume-output").style.display = "block";
}
