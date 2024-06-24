const altarData = [
    {
        "number": "01",
        "name": "Desolate Highlands Altar of Lilith #1",
        "region": "Fractured Peaks",
        "subregion": "Desolate Highlands",
        "area": "Eastern Pass",
        "mapImage": "./img/altar-of-lilith/fractured-peaks/map/01-map.webp",
        "inGameImage": "./img/altar-of-lilith/fractured-peaks/in_game/01-in_game.webp",
        "reward": "+2 Dexterity",
        "dataID": "fractPeaksAltar01",
        "dataIDChecked": "fractPeaksAltar01_checked",
        "onCheckMark": "document.getElementById('fractPeaksAltar01').classList.toggle('hide')",
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
        "dataID": "fractPeaksAltar02",
        "dataIDChecked": "fractPeaksAltar02_checked",
        "onCheckMark": "document.getElementById('fractPeaksAltar02').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar03",
        "dataIDChecked": "fractPeaksAltar03_checked",
        "onCheckMark": "document.getElementById('fractPeaksAltar03').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar04",
        "dataIDChecked": "fractPeaksAltar04_checked",
        "onCheckMark": "document.getElementById('fractPeaksAltar04').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar05",
        "dataIDChecked": "fractPeaksAltar05_checked",
        "onCheckMark": "document.getElementById('fractPeaksAltar05').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar06",
        "onCheckMark": "document.getElementById('fractPeaksAltar06').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar07",
        "onCheckMark": "document.getElementById('fractPeaksAltar07').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar08",
        "onCheckMark": "document.getElementById('fractPeaksAltar08').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar09",
        "onCheckMark": "document.getElementById('fractPeaksAltar09').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar10",
        "onCheckMark": "document.getElementById('fractPeaksAltar10').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar11",
        "onCheckMark": "document.getElementById('fractPeaksAltar11').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar12",
        "onCheckMark": "document.getElementById('fractPeaksAltar12').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar13",
        "onCheckMark": "document.getElementById('fractPeaksAltar13').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar14",
        "onCheckMark": "document.getElementById('fractPeaksAltar14').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar15",
        "onCheckMark": "document.getElementById('fractPeaksAltar15').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar16",
        "onCheckMark": "document.getElementById('fractPeaksAltar16').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar17",
        "onCheckMark": "document.getElementById('fractPeaksAltar17').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar18",
        "onCheckMark": "document.getElementById('fractPeaksAltar18').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar19",
        "onCheckMark": "document.getElementById('fractPeaksAltar19').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar20",
        "onCheckMark": "document.getElementById('fractPeaksAltar20').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar21",
        "onCheckMark": "document.getElementById('fractPeaksAltar21').classList.toggle('hide')"
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
        "dataID": "fractPeaksAltar22",
        "onCheckMark": "document.getElementById('fractPeaksAltar22').classList.toggle('hide')"
    }
];

// ===============================
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
    "dataID": "",
    "onCheckMark": ""
}
*/
// ===============================





// ===============================





// ===============================
function altarsTemplate(altar) {
    return `
            <div class="altar-of-lilith-container" id="${altar.dataID}">

                <form id="altarCheckbox">
                    <div class="checkbox-container">
                        <input type="checkbox" class="altarButtonClass" id="${altar.dataIDChecked}">
                        <label for="${altar.dataIDChecked}" id="${altar.dataIDChecked}" onclick="${altar.onCheckMark};${altar.hideChecked}">${altar.name}</label>
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

document.getElementById("fracturedPeaksLilithAltars").innerHTML = `${altarData.map(altarsTemplate).join('')}`;
// ===============================
// End: Fractured Peaks Altars
// ===============================