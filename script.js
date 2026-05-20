const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.onclick = function(){
    nav.classList.toggle("active");
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox, index) => {

    const saved = localStorage.getItem(`check_${index}`);

    if(saved === 'true'){
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', () => {
        localStorage.setItem(`check_${index}`, checkbox.checked);
    });

});

function nisitkuopenStore(){

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {

        window.location.href = "https://apps.apple.com/th/app/nisitku/id1097453923?l=th";

    } else {

        window.location.href = "https://play.google.com/store/apps/details?id=th.ac.ku.ocs.nisitku&hl=en";

    }

}

function insidekuopenStore(){

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {

        window.location.href = "https://apps.apple.com/th/app/insideku/id1097690261?l=th";

    } else {

        window.location.href = "https://play.google.com/store/apps/details?id=th.ac.ku.ocs.insideku&pcampaignid=web_share";

    }

}

function kutalaiopenStore(){

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {

        window.location.href = "https://apps.apple.com/th/app/ku-talai/id6450529404?l=th";

    } else {

        window.location.href = "https://play.google.com/store/apps/details?id=th.ac.ku.sci.cs.aiih.talai&pcampaignid=web_share";

    }

}

function kubikeopenStore(){

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {

        window.location.href = "https://apps.apple.com/th/app/ku-bike/id6450529447?l=th";

    } else {

        window.location.href = "https://play.google.com/store/apps/details?id=th.ac.ku.sci.cs.aiih.kubike&pcampaignid=web_share";

    }

}

function viabusopenStore(){

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {

        window.location.href = "https://apps.apple.com/th/app/viabus/id1074208600?l=th";

    } else {

        window.location.href = "https://play.google.com/store/apps/details?id=com.indyzalab.transitia&pcampaignid=web_share";

    }

}

