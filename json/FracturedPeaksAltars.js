// ===============================
// Start: JSON Data
// ===============================
const fractPeaksAltarDat = [
    {
        "number": "01",
        "name": "Desolate Highlands Altar of Lilith #1",
        "region": "Fractured Peaks",
        "subregion": "Desolate Highlands",
        "area": "Eastern Pass",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/01-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/01-in_game.webp",
        "reward": "+2 Dexterity",
        "altarID": "fractPeaksAltar01",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar01').classList.toggle('hide')",
    },
    {
        "number": "02",
        "name": "Desolate Highlands Altar of Lilith #2",
        "region": "Fractured Peaks",
        "subregion": "Desolate Highlands",
        "area": "Father's Cross",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/02-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/02-in_game.webp",
        "reward": "+2 Intelligence",
        "altarID": "fractPeaksAltar02",
        "altarDataID": "",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar02').classList.toggle('hide')"
    },
    {
        "number": "03",
        "name": "Desolate Highlands Altar of Lilith #3",
        "region": "Fractured Peaks",
        "subregion": "Desolate Highlands",
        "area": "Eastern Pass",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/03-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/03-in_game.webp",
        "reward": "+2 Dexterity",
        "altarID": "fractPeaksAltar03",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar03').classList.toggle('hide')"
    },
    {
        "number": "04",
        "name": "Desolate Highlands Altar of Lilith #4",
        "region": "Fractured Peaks",
        "subregion": "Desolate Highlands",
        "area": "Icehowl Taiga",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/04-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/04-in_game.webp",
        "reward": "+2 Strength",
        "altarID": "fractPeaksAltar04",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar04').classList.toggle('hide')"
    },
    {
        "number": "05",
        "name": "Dobrev Taiga Altar of Lilith #1",
        "region": "Fractured Peaks",
        "subregion": "Dobrev Taiga",
        "area": "Shadow Trail",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/05-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/05-in_game.webp",
        "reward": "+2 Willpower",
        "altarID": "fractPeaksAltar05",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar05').classList.toggle('hide')"
    },
    {
        "number": "06",
        "name": "Dobrev Taiga Altar of Lilith #2",
        "region": "Fractured Peaks",
        "subregion": "Dobrev Taiga",
        "area": "Southeast Foothills",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/06-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/06-in_game.webp",
        "reward": "+5 Max Murmuring Obols",
        "altarID": "fractPeaksAltar06",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar06').classList.toggle('hide')"
    },
    {
        "number": "07",
        "name": "Dobrev Taiga Altar of Lilith #3",
        "region": "Fractured Peaks",
        "subregion": "Dobrev Taiga",
        "area": "Western Tunnels",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/07-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/07-in_game.webp",
        "reward": "+2 Strength",
        "altarID": "fractPeaksAltar07",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar07').classList.toggle('hide')"
    },
    {
        "number": "08",
        "name": "Frigid Expanse Altar of Lilith #1",
        "region": "Fractured Peaks",
        "subregion": "Frigid Expanse",
        "area": "Olyam Tundra",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/08-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/08-in_game.webp",
        "reward": "+2 Strength",
        "altarID": "fractPeaksAltar08",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar08').classList.toggle('hide')"
    },
    {
        "number": "09",
        "name": "Frigid Expanse Altar of Lilith #2",
        "region": "Fractured Peaks",
        "subregion": "Frigid Expanse",
        "area": "Olyam Tundra",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/09-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/09-in_game.webp",
        "reward": "+2 Intelligence",
        "altarID": "fractPeaksAltar09",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar09').classList.toggle('hide')"
    },
    {
        "number": "10",
        "name": "Frigid Expanse Altar of Lilith #3",
        "region": "Fractured Peaks",
        "subregion": "Frigid Expanse",
        "area": "Shivering Wilds",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/10-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/10-in_game.webp",
        "reward": "+5 Max Murmuring Obols",
        "altarID": "fractPeaksAltar10",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar10').classList.toggle('hide')"
    },
    {
        "number": "11",
        "name": "Frigid Expanse Altar of Lilith #4",
        "region": "Fractured Peaks",
        "subregion": "Frigid Expanse",
        "area": "Shivering Wilds",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/11-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/11-in_game.webp",
        "reward": "+2 Willpower",
        "altarID": "fractPeaksAltar11",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar11').classList.toggle('hide')"
    },
    {
        "number": "12",
        "name": "Frigid Expanse Altar of Lilith #5",
        "region": "Fractured Peaks",
        "subregion": "Frigid Expanse",
        "area": "The Deep White",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/12-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/12-in_game.webp",
        "reward": "+2 Dexterity",
        "altarID": "fractPeaksAltar12",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar12').classList.toggle('hide')"
    },
    {
        "number": "13",
        "name": "Gale Valley Altar of Lilith #1",
        "region": "Fractured Peaks",
        "subregion": "Gale Valley",
        "area": "Trekker's Nook",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/13-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/13-in_game.webp",
        "reward": "+2 Intelligence",
        "altarID": "fractPeaksAltar13",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar13').classList.toggle('hide')"
    },
    {
        "number": "14",
        "name": "Gale Valley Altar of Lilith #2",
        "region": "Fractured Peaks",
        "subregion": "Gale Valley",
        "area": "Tsepilova Pond",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/14-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/14-in_game.webp",
        "reward": "+2 Willpower",
        "altarID": "fractPeaksAltar14",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar14').classList.toggle('hide')"
    },
    {
        "number": "15",
        "name": "Gale Valley Altar of Lilith #3",
        "region": "Fractured Peaks",
        "subregion": "Gale Valley",
        "area": "Zeleny Lowlands",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/15-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/15-in_game.webp",
        "reward": "+2 Dexterity",
        "altarID": "fractPeaksAltar15",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar15').classList.toggle('hide')"
    },
    {
        "number": "16",
        "name": "Kor Dragan Altar of Lilith (Stronghold)",
        "region": "Fractured Peaks",
        "subregion": "Kor Dragan (Stronghold)",
        "area": "Kor Dragan (Stronghold)",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/16-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/16-in_game.webp",
        "reward": "+2 Willpower",
        "altarID": "fractPeaksAltar16",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar16').classList.toggle('hide')"
    },
    {
        "number": "17",
        "name": "Malnok Altar of Lilith (Stronghold)",
        "region": "Fractured Peaks",
        "subregion": "Malnok (Stronghold)",
        "area": "Malnok (Stronghold)",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/17-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/17-in_game.webp",
        "reward": "+2 Strength",
        "altarID": "fractPeaksAltar17",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar17').classList.toggle('hide')"
    },
    {
        "number": "18",
        "name": "Nostrava Altar of Lilith (Stronghold)",
        "region": "Fractured Peaks",
        "subregion": "Nostrava (Stronghold)",
        "area": "Nostrava (Stronghold)",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/18-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/18-in_game.webp",
        "reward": "+2 Intelligence",
        "altarID": "fractPeaksAltar18",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar18').classList.toggle('hide')"
    },
    {
        "number": "19",
        "name": "Sarkova Pass Altar of Lilith #1",
        "region": "Fractured Peaks",
        "subregion": "Sarkova Pass",
        "area": "Crags of Ill Wind",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/19-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/19-in_game.webp",
        "reward": "+2 Intelligence",
        "altarID": "fractPeaksAltar19",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar19').classList.toggle('hide')"
    },
    {
        "number": "20",
        "name": "Sarkova Pass Altar of Lilith #2",
        "region": "Fractured Peaks",
        "subregion": "Sarkova Pass",
        "area": "Western Ways",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/20-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/20-in_game.webp",
        "reward": "+5 Max Murmuring Obols",
        "altarID": "fractPeaksAltar20",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar20').classList.toggle('hide')"
    },
    {
        "number": "21",
        "name": "Sarkova Pass Altar of Lilith #3",
        "region": "Fractured Peaks",
        "subregion": "Sarkova Pass",
        "area": "Western Ways",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/21-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/21-in_game.webp",
        "reward": "+2 Strength",
        "altarID": "fractPeaksAltar21",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar21').classList.toggle('hide')"
    },
    {
        "number": "22",
        "name": "Sarkova Pass Altar of Lilith #4",
        "region": "Fractured Peaks",
        "subregion": "Sarkova Pass",
        "area": "Western Ways",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/22-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/22-in_game.webp",
        "reward": "+2 Willpower",
        "altarID": "fractPeaksAltar22",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar22').classList.toggle('hide')"
    },
    {
        "number": "23",
        "name": "Seat of the Heavens Altar of Lilith #1",
        "region": "Fractured Peaks",
        "subregion": "Seat of the Heavens",
        "area": "Fields of Judgment",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/23-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/23-in_game.webp",
        "reward": "+2 Intelligence",
        "altarID": "fractPeaksAltar23",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar23').classList.toggle('hide')"
    },
    {
        "number": "24",
        "name": "Seat of the Heavens Altar of Lilith #2",
        "region": "Fractured Peaks",
        "subregion": "Seat of the Heavens",
        "area": "Serac Rapture",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/24-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/24-in_game.webp",
        "reward": "+2 Strength",
        "altarID": "fractPeaksAltar24",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar24').classList.toggle('hide')"
    },
    {
        "number": "25",
        "name": "Seat of the Heavens Altar of Lilith #3",
        "region": "Fractured Peaks",
        "subregion": "Seat of the Heavens",
        "area": "Sinner's Pass",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/25-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/25-in_game.webp",
        "reward": "+2 Dexterity",
        "altarID": "fractPeaksAltar25",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar25').classList.toggle('hide')"
    },
    {
        "number": "26",
        "name": "The Pallid Glade Altar of Lilith #1",
        "region": "Fractured Peaks",
        "subregion": "The Pallid Glade",
        "area": "Frostbite Trails",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/26-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/26-in_game.webp",
        "reward": "+5 Max Murmuring Obols",
        "altarID": "fractPeaksAltar26",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar26').classList.toggle('hide')"
    },
    {
        "number": "27",
        "name": "The Pallid Glade Altar of Lilith #2",
        "region": "Fractured Peaks",
        "subregion": "The Pallid Glade",
        "area": "Melnik's Hill",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/27-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/27-in_game.webp",
        "reward": "+2 Willpower",
        "altarID": "fractPeaksAltar27",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar27').classList.toggle('hide')"
    },
    {
        "number": "28",
        "name": "The Pallid Glade Altar of Lilith #3",
        "region": "Fractured Peaks",
        "subregion": "The Pallid Glade",
        "area": "Sentiers Givrés",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/28-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/28-in_game.webp",
        "reward": "+2 Dexterity",
        "altarID": "fractPeaksAltar28",
        "altarDataID": "fractPeaksAltarData01",
        "onChecked": "document.getElementById('fractPeaksAltar28').classList.toggle('hide')"
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
}*/
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

document.getElementById("fracturedPeaksLilithAltars").innerHTML = `${fractPeaksAltarDat.map(altarsTemplate).join('')}`;
// ===============================
// End: Main Function
// ===============================