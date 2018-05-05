var xhttp = new XMLHttpRequest();
var req_variables = {
	"id":window._sharedData.config.viewer.id,
	"first":"50"
}
var req_query_hash ="58712303d941c6855d4e888c5f0cd22f";
var userlist = [];

url ='https://www.instagram.com/graphql/query/?query_hash=' + req_query_hash + '&variables=' + JSON.stringify(req_variables);

xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		res = this.responseText;
	}
};
xhttp.open("GET", url, true);
xhttp.send();





//url: https://www.instagram.com/graphql/query/?query_hash=58712303d941c6855d4e888c5f0cd22f&variables={%22id%22:%221989913378%22,%22first%22:50}


//url for next: https://www.instagram.com/graphql/query/?query_hash=58712303d941c6855d4e888c5f0cd22f&variables={%22id%22:%221989913378%22,%22first%22:50,%22after%22:%22AQC-2bE5-9-LexxEK5ooxTDsJwViC0Tc5X_imUcgnlY9cXPzeV9e_XfV5919cRfW0q9hrSoTrBEXS_mN4bfqre1_RSVT-vtjYJmuondO0lNPdg%22}