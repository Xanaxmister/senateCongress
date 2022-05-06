var API = 'werjoImcxnptmekG4oOVTHidgbQOBbmJh4gj90mn';
var url;

var dataSeparate = {
    republicans: {
        total: []
    },
    democrats: {
        total: []
    },
    independets: {
        total: []
    },
    summary: {
        totalRepublicans: [],
        totalDemocrats: [],
        totalIndepentens: [],
        total: []
    }
}



function tableFilling() {
    var rows = document.getElementsByName('first_table')[0].tBodies[0].rows;
    for (let i = 0; i <= rows.length - 1; i++) {
        if (rows[i].cells[0].innerHTML == "Democrats") {
            rows[i].insertCell().innerHTML = dataSeparate.democrats.total;
        }
        else if (rows[i].cells[0].innerHTML == "Republicans") {
            rows[i].insertCell().innerHTML = dataSeparate.republicans.total;
        }
        else if (rows[i].cells[0].innerHTML == "Independents") {
            rows[i].insertCell().innerHTML = dataSeparate.independets.total;
        }
        else {
            rows[i].insertCell().innerHTML = dataSeparate.summary.total;
        }
    }
}









export async function fetchJsonData(locc) {
    if (locc == "?chamber=senate") {
        url = 'https://api.propublica.org/congress/v1/117/senate/members.json';
    }
    else {
        url = 'https://api.propublica.org/congress/v1/117/house/members.json';
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
        if (data.results[0].members[i].party == "D") {
            dataSeparate.democrats.total++;
        } else if (data.results[0].members[i].party == "ID") {
            dataSeparate.independets.total++;
        } else {
            dataSeparate.republicans.total++;
        }
    }
    console.log(dataSeparate.summary.total[0]);
    console.log(dataSeparate.democrats.total);
    console.log(dataSeparate.republicans.total);
    console.log(dataSeparate.independets.total);
    tableFilling();
}