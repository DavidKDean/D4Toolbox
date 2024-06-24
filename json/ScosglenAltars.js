// ===============================
// Start: JSON Data
// ===============================
const scosglenAltarData = [
    {
        "number": "01",
        "name": "Deep Forest Altar of Lilith #1",
        "region": "Scosglen",
        "subregion": "Deep Forest",
        "area": "The Ancients' Woods",
        "mapImage": "./img/altar-of-lilith/scosglen/map/01-map.webp",
        "inGameImage": "",
        "reward": "",
        "altarID": "scosglenAltar01",
        "altarDataID": "scosglenAltarData01",
        "onChecked": "document.getElementById('scosglenAltar01).classList.toggle('hide')"
    },
    {
        "number": "02",
        "name": "Deep Forest Altar of Lilith #2",
        "region": "Scosglen",
        "subregion": "Deep Forest",
        "area": "The Ancients' Woods",
        "mapImage": "./img/altar-of-lilith/scosglen/map/02-map.webp",
        "inGameImage": "",
        "reward": "",
        "altarID": "scosglenAltar02",
        "altarDataID": "scosglenAltarData02",
        "onChecked": "document.getElementById('scosglenAltar02).classList.toggle('hide')"
    },
    {
        "number": "03",
        "name": "Deep Forest Altar of Lilith #3",
        "region": "Scosglen",
        "subregion": "Deep Forest",
        "area": "The Ancients' Woods",
        "mapImage": "./img/altar-of-lilith/scosglen/map/03-map.webp",
        "inGameImage": "",
        "reward": "",
        "altarID": "scosglenAltar03",
        "altarDataID": "scosglenAltarData03",
        "onChecked": "document.getElementById('scosglenAltar03).classList.toggle('hide')"
    },
    {
        "number": "33",
        "name": "Westering Lowlands Altar of Lilith #33",
        "region": "Scosglen",
        "subregion": "Westering Lowlands",
        "area": "Laglend Fen",
        "mapImage": "./img/altar-of-lilith/scosglen/map/33-map.webp",
        "inGameImage": "./img/altar-of-lilith/scosglen/in_game/33-in_game.webp",
        "reward": "+2 Willpower",
        "altarID": "scosglenAltar33",
        "altarDataID": "scosglenAltarData33",
        "onChecked": "document.getElementById('scosglenAltar33').classList.toggle('hide')"
    }
];
/* JSON Altar Template
{
    "number": "",
    "name": "",
    "region": "",
    "subregion": "",
    "area": "",
    "mapImage": "",
    "inGameImage": "",
    "reward": "",
    "altarID": "",
    "onChecked": ""
}
*/
// ===============================
// End: JSON Data
// ===============================





// ===============================
// Start: Main Function
// ===============================
function altarsTemplate(altar) {
    return `
            <div class="altar-of-lilith-container" id="${altar.altarID}">

                <form id="altarCheckbox">
                    <div class="checkbox-container">
                        <input type="checkbox" class="altarButtonClass" id="${altar.altarDataID}">
                        <label for="${altar.altarDataID}" id="${altar.altarDataID}" onclick="${altar.onChecked}">${altar.name}</label>
                    </div>
                <form>

                <div id="${altar.name}" class="altarContainer">

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
}

document.getElementById("scosglenLilithAltars").innerHTML = `${scosglenAltarData.map(altarsTemplate).join('')}`;
// ===============================
// End: Main Function
// ===============================