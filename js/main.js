// ===============================
// Start: Accordian Function
var accordions = document.getElementsByClassName("accordion");
for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            // Accordion is open, we need to close it
            content.style.maxHeight = null;
        } else {
            // Accordion is closed
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };
}
// End: Accordian Function
// ===============================





// ===============================
// Start: Color Theme Functions
var element = document.body;
// Dark Theme
function darkMode() { element.className = "dark-mode"; }
// Light Theme
function lightMode() { element.className = "light-mode"; }
// End: Color Theme Functions
// ===============================





// ===============================
// Start: Show/Hide Regional Sections
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
// End: Show/Hide Regional Sections
// ===============================





// ===============================
// Start: Fractured Peaks Altars
let dataObject;

fetch("./json/FracturedPeaksAltars.js")
    .then(data => data.json())
    .then(data => {
        dataObject = data;
        const template = data.map(altar => {

            $(document).ready(function() {
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

            return `
            <div class="altar-of-lilith-container">

                <div id="overlay"></div>
                <div id="overlayContent">
                    <img id="bigImg" src="" alt="" />
                </div>

                <div class="checkbox-container">
                    <input type="checkbox" onclick="${altar.onCheckMark}">
                    <label for="altarLabel">${altar.name}</label>
                </div>

                <div id="${altar.dataID}">

                    <div>
                        <div id="altarImages">
                            <div class="altarImage">
                                <img class="smallImg" id="showMapImage" src="${altar.mapImage}" />
                            </div>
                            <div class="altarImage">
                                <img class="smallImg" id="showInGameImage" src="${altar.inGameImage}" />
                            </div>
                        </div>
                    </div>
                    <table class="table-container">
                        <tbody>
                            <tr>
                                <td>Number</td>
                                <td>Region</td>
                                <td>Sub-Region</td>
                                <td>Area</td>
                                <td>Reward</td>
                            </tr>
                            <tr>
                                <td>${altar.number}</td>
                                <td>${altar.region}</td>
                                <td>${altar.subregion}</td>
                                <td>${altar.area}</td>
                                <td>${altar.reward}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            `;
        })
            .join('');
        document.querySelector("#fracturedPeaksLilithAltars").innerHTML = template;
    })
    .catch(error => {
        dataObject = {};
        console.log(error);
    });
// End: Fractured Peaks Altars
// ===============================





// ===============================
// Start: Send Altar of Lilith Template to HTML
// document.getElementById("fracturedPeaksLilithAltars").innerHTML = `${fractPeaksAltars.map(lilithAltarTemplate).join('')}`
// document.getElementById("scosglenLilithAltars").innerHTML = `${scosglenAltars.map(lilithAltarTemplate).join('')}`
// document.getElementById("drySteppesLilithAltars").innerHTML = `${drySteppesAltars.map(lilithAltarTemplate).join('')}`
// document.getElementById("hawezarLilithAltars").innerHTML = `${hawezarAltars.map(lilithAltarTemplate).join('')}`
// document.getElementById("kehjistanLilithAltars").innerHTML = `${kehjistanAltars.map(lilithAltarTemplate).join('')}`
// End: Attach Altar of Lilith Template to HTML
// ===============================