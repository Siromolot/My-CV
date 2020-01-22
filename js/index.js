"use strict";

function darkSide() {

    // цветовые стили
    let changeColor = document.getElementById("color");
    changeColor.classList.toggle("dark_color");
    if (changeColor.classList.contains("dark_color")) {
        changeColor.innerHTML = "Перейти на светлую сторону";
    } else {
        changeColor.innerHTML = "Перейти на темную сторону";
    }

    let body = document.getElementById("body");
    body.classList.toggle("dark_body");

    let topicH1 = document.getElementsByTagName("h1");
    for (let item of topicH1) {
        item.classList.toggle("topic");
    }

    let topicH2 = document.getElementsByTagName("h2");
    for (let item of topicH2) {
        item.classList.toggle("topic");
    }

    let header = document.querySelector("header");
    header.classList.toggle("dark_header");
    
    let foto = document.getElementsByClassName("main_foto");
    for (let item of foto) {
        item.classList.toggle("foto_border");
    }

    let backface = document.getElementsByClassName("back");
    for (let item of backface) {
        item.classList.toggle("dark_back");
    }

    let backfaceText = document.getElementsByClassName("backface_text");
    for (let item of backfaceText) {
        item.classList.toggle("dark_backface_text");
    }

    let link = document.getElementsByClassName("download_resume_link");
    for (let item of link) {
        item.classList.toggle("link_border");
    }

    let fa = document.getElementsByClassName("fa");
    for(let item of fa) {
        item.classList.toggle("dark_fa");
    }

    let darkFaVk = document.getElementsByClassName("fa-vk");
    for(let item of darkFaVk) {
        item.classList.toggle("dark_fa-vk");
    }

    let darkFaLinked = document.getElementsByClassName("fa-linkedin");
    for(let item of darkFaLinked) {
        item.classList.toggle("dark_fa-linkedin");
    }
    
    let darkFaGit = document.getElementsByClassName("fa-github");
    for(let item of darkFaGit) {
        item.classList.toggle("dark_fa-github");
    }
    let underTopic = document.getElementsByClassName("under_topic");
    for(let item of underTopic) {
        item.classList.toggle("dark_under_topic");
    }

    let darkMainText = document.getElementsByClassName("main_description_text");
    for(let item of darkMainText) {
        item.classList.toggle("dark_main_description_text");
    }

    let darkContactValue = document.getElementsByClassName("value_contacts");
    for (let item of darkContactValue) {
        item.classList.toggle("dark_value_contacts");
    }

    let darkContactKey = document.getElementsByClassName("key_contacts");
    for (let item of darkContactKey) {
        item.classList.toggle("dark_key_contacts");
    }
    
    let darkSkillsSubtopic = document.getElementsByClassName("skills_subtopic");
    for (let item of darkSkillsSubtopic) {
        item.classList.toggle("dark_skills_subtopic");
    }

    let darkSkillsBoxLeft = document.getElementsByClassName("main_skills_box_left");
    for (let item of darkSkillsBoxLeft) {
        item.classList.toggle("dark_main_skills_box");
    }

    let faLock = document.getElementsByClassName("fa-lock");
    for (let item of faLock) {
        item.classList.toggle("dark_fa-university");
    }

    let darkSkillsBoxRight = document.getElementsByClassName("main_skills_box_right");
    for (let item of darkSkillsBoxRight) {
        item.classList.toggle("dark_main_skills_box");
    }

    let rightSkillsText = document.getElementsByClassName("right_skill_text");
    for (let item of rightSkillsText) {
        item.classList.toggle("dark_right_skill_text");
    }

    let progressValue = document.getElementsByClassName("progress_value");
    for (let item of progressValue) {
        item.classList.toggle("dark_progress_value");
    }

    let line = document.getElementsByClassName("line");
    for (let item of line) {
        item.classList.toggle("dark_line");
    }

    let modalWindow = document.getElementsByClassName("modal_window");
    for (let item of modalWindow) {
        item.classList.toggle("dark_modal_window");
    }

    let educationTopic = document.getElementsByClassName("education_item");
    for (let item of educationTopic) {
        item.classList.toggle("dark_header");
    }

    let educationSubTopic = document.getElementsByClassName("education_subtopic");
    for (let item of educationSubTopic) {
        item.classList.toggle("dark_education_subtopic");
    }

    let darkFaUnuver = document.getElementsByClassName("fa-university");
    for (let item of darkFaUnuver) {
        item.classList.toggle("dark_fa-university");
    }

    let darkFaArrow = document.getElementsByClassName("fa-long-arrow-right");
    for (let item of darkFaArrow) {
        item.classList.toggle("dark_fa-university");
    }
    
    let darkFaCertificate = document.getElementsByClassName("fa-certificate");
    for (let item of darkFaCertificate) {
        item.classList.toggle("dark_fa-university");
    }

    let educationText = document.getElementsByClassName("education_text");
    for (let item of educationText) {
        item.classList.toggle("dark_value_contacts");
    }

    let darkFaBriefcase = document.getElementsByClassName("fa-briefcase");
    for (let item of darkFaBriefcase) {
        item.classList.toggle("dark_fa-briefcase");
    }

    let darkString = document.getElementsByClassName("string");
    for (let item of darkString) {
        item.classList.toggle("dark_string");
    }

    let jobSubtopic = document.getElementsByClassName("job_subtopic");
    for (let item of jobSubtopic) {
        item.classList.toggle("dark_job_subtopic");
    }

    let jobList = document.getElementsByClassName("job_list_item");
    for (let item of jobList) {
        item.classList.toggle("dark_header");
    }

    let JobCompany = document.getElementsByClassName("job_company_name");
    for (let item of JobCompany) {
        item.classList.toggle("dark_key_contacts");
    }

    let JobPosition = document.getElementsByClassName("job_position");
    for (let item of JobPosition) {
        item.classList.toggle("dark_job_position");
    }

    let JobField = document.getElementsByClassName("job_field");
    for (let item of JobField) {
        item.classList.toggle("dark_main_description_text");
    }

    let JobDone = document.getElementsByClassName("job_done");
    for (let item of JobDone) {
        item.classList.toggle("dark_key_contacts");
    }

    let JobPoint = document.querySelectorAll("li");
    for (let item of JobPoint) {
        item.classList.toggle("dark_main_description_text");
    }

    let FaCheck = document.getElementsByClassName("fa-check-square-o");
    for (let item of FaCheck) {
        item.classList.toggle("dark_job_position");
    }

    let jobDescription = document.getElementsByClassName("job_description");
    for (let item of jobDescription) {
        item.classList.toggle("dark_main_description_text");
    }

    let skillsName = document.getElementsByClassName("skills_name");
    for (let item of skillsName) {
        item.classList.toggle("dark_key_contacts");
    }

    // отображение замков на скилах
    let blackLock = document.getElementsByClassName("black_lock");
    let whiteLock = document.getElementsByClassName("white_lock");

    if (changeColor.classList.contains("dark_color")) {
        for (let item of whiteLock) {
            item.classList.add("visible_lock");
        }
    } else {
        for (let item of whiteLock) {
            item.classList.remove("visible_lock");
        }
    }

    if (changeColor.classList.contains("dark_color")) {
        for (let item of blackLock) {
            item.classList.add("hide_lock");
        }
    } else {
        for (let item of blackLock) {
            item.classList.remove("hide_lock");
        }
    }  
} 
