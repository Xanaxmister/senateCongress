var API = 'werjoImcxnptmekG4oOVTHidgbQOBbmJh4gj90mn';
var url;

var dataSeparate = {
    persons: [],
    republicans: {
        total: [0],
    },
    democrats: {
        total: [0],
    },
    independets: {
        total: [0],
    },
    summary: {
        total: [],
        totalVotedWithPartyD: [0],
        totalVotedWithPartyR: [0],
        totalVotedWithPartyID: [0],
    }
}



function tableFilling() {
    var rows = document.getElementsByName('tableAttendant')[0].tBodies[0].rows;
    for (let i = 0; i <= rows.length - 1; i++) {
        if (rows[i].cells[0].innerHTML == "Democrats") {
            rows[i].insertCell().innerHTML = dataSeparate.democrats.total;
            rows[i].insertCell().innerHTML = (dataSeparate.summary.totalVotedWithPartyD.toString() / dataSeparate.democrats.total).toFixed(3);
        }
        else if (rows[i].cells[0].innerHTML == "Republicans") {
            rows[i].insertCell().innerHTML = dataSeparate.republicans.total;
            rows[i].insertCell().innerHTML = (dataSeparate.summary.totalVotedWithPartyR.toString() / dataSeparate.republicans.total).toFixed(3);
        }
        else if (rows[i].cells[0].innerHTML == "Independents") {
            rows[i].insertCell().innerHTML = dataSeparate.independets.total;
            if (!(dataSeparate.summary.totalVotedWithPartyID.toString() == 0)) {
                rows[i].insertCell().innerHTML = (dataSeparate.summary.totalVotedWithPartyID.toString() / dataSeparate.independets.total).toFixed(3);
            }
            else {
                rows[i].insertCell().innerHTML = 0;
            }
        }
        else {
            rows[i].insertCell().innerHTML = dataSeparate.summary.total;
            rows[i].cells[1].colSpan = "2";
        }
    }
    if (location.pathname == "/attendance.html") {
        tableFillingAttendance(document.getElementsByName('tableAttendant')[1].tBodies[0], document.getElementsByName('tableAttendant')[2].tBodies[0]);
    }
    else{
        tableFillingLoyality(document.getElementsByName('tableAttendant')[1].tBodies[0], document.getElementsByName('tableAttendant')[2].tBodies[0]);
    }
}

function tableFillingLoyality(rowsSecond, rowsThird) {

    dataSeparate.persons.sort((a, b) => {
        return a.votes_most_bros - b.votes_most_bros;
    })
    console.log(dataSeparate.persons);
    let bottomTen = 0;
    let sumJ = 0;
    topOrBot:
    for (let i = sumJ; i <= dataSeparate.summary.total - 1; i++) {
        console.log(bottomTen);
        i = sumJ;
        if (bottomTen == 10) {
            let topTen = 0;
            let sumJ = 0;
            let Upper = dataSeparate.persons;
            Upper.sort((a, b) => {
                return b.votes_most_bros - a.votes_most_bros;
            });
            console.log(Upper);
            for (let i = sumJ; i <= Upper.length - 1; i++) {
                console.log(topTen);
                i = sumJ;
                if (topTen == 10) {
                    break topOrBot;
                }
                for (let j = i; j <= Upper.length - 1; j++) {
                    if (Upper[i].votes_most_bros == Upper[j].votes_most_bros) {
                        sumJ = j + 1;
                        console.log("UPPER " + Upper[j].Name + " " + Upper[j].votes_most_bros);
                        let rows = rowsThird.insertRow();
                        let first = rows.insertCell();
                        let second = rows.insertCell();
                        let third = rows.insertCell();
                        if (Upper[j].missed_votes_prc == undefined) {
                            first.innerHTML = Upper[j].Name;
                            second.innerHTML = 0;
                            third.innerHTML = 0;
                        }
                        else {
                            first.innerHTML = Upper[j].Name;
                            second.innerHTML = Upper[j].votes_total;
                            third.innerHTML = Upper[j].votes_most_bros.toFixed(1);
                        }
                    }
                }
                topTen++;
            }
        }
        for (let j = i; j <= dataSeparate.summary.total - 1; j++) {
            if (dataSeparate.persons[i].votes_most_bros == dataSeparate.persons[j].votes_most_bros) {
                sumJ = j + 1;
                console.log(dataSeparate.persons[j].Name + " " + dataSeparate.persons[j].votes_most_bros);
                let rows = rowsSecond.insertRow();
                let first = rows.insertCell();
                let second = rows.insertCell();
                let third = rows.insertCell();
                if (dataSeparate.persons[i].votes_most_bros == undefined) {
                    first.innerHTML = dataSeparate.persons[j].Name;
                    second.innerHTML = 0;
                    third.innerHTML = 0;
                }
                else {
                    first.innerHTML = dataSeparate.persons[j].Name;
                    second.innerHTML = dataSeparate.persons[j].votes_total;
                    third.innerHTML = dataSeparate.persons[j].votes_most_bros.toFixed(1);
                }
            }
        }
        bottomTen++;
    }
}

function tableFillingAttendance(rowsSecond, rowsThird) {

    dataSeparate.persons.sort((a, b) => {
        return a.missed_votes_prc - b.missed_votes_prc;
    });
    console.log(dataSeparate.summary.total[0]);
    let bottomTen = 0;
    let sumJ = 0;
    topOrBot:
    for (let i = sumJ; i <= dataSeparate.summary.total - 1; i++) {
        console.log(bottomTen);
        i = sumJ;
        if (bottomTen == 10) {
            let topTen = 0;
            let sumJ = 0;
            let Upper = dataSeparate.persons;
            Upper.sort((a, b) => {
                return b.missed_votes_prc - a.missed_votes_prc;
            });
            console.log(Upper);
            for (let i = sumJ; i <= Upper.length - 1; i++) {
                console.log(topTen);
                i = sumJ;
                if (topTen == 10) {
                    break topOrBot;
                }
                for (let j = i; j <= Upper.length - 1; j++) {
                    if (Upper[i].missed_votes_prc == Upper[j].missed_votes_prc) {
                        sumJ = j + 1;
                        console.log("UPPER " + Upper[j].Name + " " + Upper[j].missed_votes);
                        let rows = rowsThird.insertRow();
                        let first = rows.insertCell();
                        let second = rows.insertCell();
                        let third = rows.insertCell();
                        if (Upper[j].missed_votes_prc == undefined) {
                            first.innerHTML = Upper[j].Name;
                            second.innerHTML = 0;
                            third.innerHTML = 0;
                        }
                        else {
                            first.innerHTML = Upper[j].Name;
                            second.innerHTML = Upper[j].missed_votes;
                            third.innerHTML = Upper[j].missed_votes_prc;
                        }
                    }
                }
                topTen++;
            }
        }
        for (let j = i; j <= dataSeparate.summary.total - 1; j++) {
            if (dataSeparate.persons[i].missed_votes_prc == dataSeparate.persons[j].missed_votes_prc) {
                sumJ = j + 1;
                console.log(dataSeparate.persons[j].Name + " " + dataSeparate.persons[j].missed_votes);
                let rows = rowsSecond.insertRow();
                let first = rows.insertCell();
                let second = rows.insertCell();
                let third = rows.insertCell();
                if (dataSeparate.persons[i].missed_votes_prc == undefined) {
                    first.innerHTML = dataSeparate.persons[j].Name;
                    second.innerHTML = 0;
                    third.innerHTML = 0;
                }
                else {
                    first.innerHTML = dataSeparate.persons[j].Name;
                    second.innerHTML = dataSeparate.persons[j].missed_votes;
                    third.innerHTML = dataSeparate.persons[j].missed_votes_prc;
                }
            }
        }
        bottomTen++;
    }
}

export async function fetchJsonData(locc) {
    if (locc == "?chamber=senate") {
        url = 'https://api.propublica.org/congress/v1/117/senate/members.json';
        document.getElementById("senateHouse").innerHTML = "Senate at glance";
    }
    else {
        url = 'https://api.propublica.org/congress/v1/117/house/members.json';
        document.getElementById("senateHouse").innerHTML = "House at glance";
    }
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "X-API-Key": API
        }
    });
    const data = await response.json();
    return data;
}
export async function dataSeparation(data) {
    dataSeparate.summary.total.push(data.results[0].num_results);
    for (let i = 0; i <= data.results[0].members.length - 1; i++) {
        dataSeparate.persons = [...dataSeparate.persons, { "Name": data.results[0].members[i].first_name + " " + data.results[0].members[i].last_name, "missed_votes": data.results[0].members[i].missed_votes, "missed_votes_prc": data.results[0].members[i].missed_votes_pct, "votes_most_bros": (data.results[0].members[i].votes_with_party_pct - data.results[0].members[i].votes_against_party_pct), "votes_total": data.results[0].members[i].total_votes}];
        if (data.results[0].members[i].party == "D") {
            dataSeparate.democrats.total++;
            if (!(data.results[0].members[i].votes_with_party_pct == undefined)) {
                dataSeparate.summary.totalVotedWithPartyD[0] += data.results[0].members[i].votes_with_party_pct;
            }
        } else if (data.results[0].members[i].party == "ID") {
            dataSeparate.independets.total++;
            if (!(data.results[0].members[i].votes_with_party_pct == undefined)) {
                dataSeparate.summary.totalVotedWithPartyID[0] += data.results[0].members[i].votes_with_party_pct;
            }
        } else {
            dataSeparate.republicans.total++;
            if (!(data.results[0].members[i].votes_with_party_pct == undefined)) {
                dataSeparate.summary.totalVotedWithPartyR[0] += data.results[0].members[i].votes_with_party_pct;
            }
        }
    }
    tableFilling();
}