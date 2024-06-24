// ===============================
// Start: Change Theme Functions
// ===============================
const UI = document.forms.UI;
const theme = document.querySelector('body');
const switchTheme = (e) => {
    const clk = e.target;
    if (clk.matches('.colorTheme-container button')) {
        theme.classList.toggle('dark-mode');
    }
    let status = theme.className === 'dark-mode' ? 'on' : 'off';
    localStorage.setItem('theme', status);
};
const loadTheme = (e) => {
    let cfg = localStorage.getItem('theme');
    if (cfg === 'on') {
        theme.classList.add('dark-mode');
    }
    else {
        theme.classList.remove('dark-mode');
    }
};
addEventListener('click', switchTheme);
document.addEventListener('DOMContentLoaded', loadTheme);
// ===============================
// End: Change Theme Functions
// ===============================





// ===============================
// Start: Accordian Function
// ===============================
let accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            // Accordion is open, we need to close it
            content.style.maxHeight = null;
        }
        else {
            // Closed
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };
}
// ===============================
// End: Accordian Function
// ===============================





// ===============================
// Start: Show/Hide Regional Sections
// ===============================
// Fractured Peaks
$(document).ready(function () {
    $("#fracturedPeaksAltarMap").click(function () {
        $("#fracturedPeaksLilithAltars").show();
        $("#scosglenLilithAltars").hide();
        $("#drySteppesLilithAltars").hide();
        $("#hawezarLilithAltars").hide();
        $("#kehjistanLilithAltars").hide();
    });
});
// Scosglen
$(document).ready(function () {
    $("#scosglenAltarMap").click(function () {
        $("#scosglenLilithAltars").show();
        $("#fracturedPeaksLilithAltars").hide();
        $("#drySteppesLilithAltars").hide();
        $("#hawezarLilithAltars").hide();
        $("#kehjistanLilithAltars").hide();
    });
});
// Dry Steppes
$(document).ready(function () {
    $("#drySteppesAltarMap").click(function () {
        $("#drySteppesLilithAltars").show();
        $("#fracturedPeaksLilithAltars").hide();
        $("#scosglenLilithAltars").hide();
        $("#hawezarLilithAltars").hide();
        $("#kehjistanLilithAltars").hide();
    });
});
// Hawezar
$(document).ready(function () {
    $("#hawezarAltarMap").click(function () {
        $("#hawezarLilithAltars").show();
        $("#fracturedPeaksLilithAltars").hide();
        $("#scosglenLilithAltars").hide();
        $("#drySteppesLilithAltars").hide();
        $("#kehjistanLilithAltars").hide();
    });
});
// Kehjistan
$(document).ready(function () {
    $("#kehjistanAltarMap").click(function () {
        $("#kehjistanLilithAltars").show();
        $("#fracturedPeaksLilithAltars").hide();
        $("#scosglenLilithAltars").hide();
        $("#drySteppesLilithAltars").hide();
        $("#hawezarLilithAltars").hide();
    });
});
// ===============================
// End: Show/Hide Regional Sections
// ===============================




// ===============================
// Start: Save localStorage
// ===============================
function saveStorage() {
    var checkbox = $("#" + dataIDChecked);
    localStorage.setItem(dataIDChecked, checkbox.checked);
}
// ===============================
// End: Save localStorage
// ===============================
// Start: Clear localStorage
function clearStorage() {
    window.localStorage.clear()
    location.reload();
}
console.log(localStorage);
// ===============================
// End: Clear localStorage
// ===============================





// ===============================
// Start: Overlay/Enlarge Image
// ===============================
$(document).ready(function () {
    $('.altarImage img').click(function () {
        $('#bigImg').attr('src', $(this).prop('src'));
        $('#overlay').show('slow');
        $('#overlayContent').show('slow');
    });
    $('#bigImg').click(function () {
        $('#bigImg').attr('src', '');
        $('#overlay').hide('slow');
        $('#overlayContent').hide('slow');
    });
});
// ===============================
// End: Overlay/Enlarge Image
// ===============================





// ===============================
// Start: Scosglen Peaks Altars
// ===============================
// ===============================
// End: Scosglen Peaks Altars
// ===============================





// ===============================
// Start: Dry Steppes Altars
// ===============================
// ===============================
// End: Dry Steppes Altars
// ===============================





// ===============================
// Start: Hawezar Altars
// ===============================
// ===============================
// End: Hawezar Altars
// ===============================





// ===============================
// Start: Kehjistan Altars
// ===============================
// ===============================
// End: Kehjistan Altars
// ===============================