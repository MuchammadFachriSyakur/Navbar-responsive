console.log('Halloe');

const link_list = document.querySelectorAll(".container .navbar .list_link li");
const home = document.getElementById('home_page');
const about = document.getElementById('contact_page');
const project = document.getElementById('project_page');
home.classList.add('aktif');

link_list.forEach((link)=>{
  link.addEventListener("click", (e)=>{
    if(e.target.id == 'contact'){
      home.classList.remove('aktif');
      about.classList.add('aktif');
      project.classList.remove('aktif');
    }else if(e.target.id == 'project'){
      home.classList.remove('aktif');
      about.classList.remove('aktif');
      project.classList.add('aktif');
    }else if(e.target.id == 'home'){
      home.classList.add('aktif');
      about.classList.remove('aktif');
      project.classList.remove('aktif');
    }
  });
});

const name_home = document.querySelector(".container .home .paraf .name_title");
const profesi_home = document.querySelector(".container .home .paraf .profesi");
const picture_home = document.querySelector(".container .home .picture");
const teks_about = document.querySelector(".container .home .paraf .about_me");
window.addEventListener("DOMContentLoaded", (e)=>{
  name_home.classList.add('fade');
  profesi_home.classList.add('fae');
  picture_home.classList.add('fade');
  teks_about.classList.add('fade');
});