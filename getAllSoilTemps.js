// Set $APIKey, $APIValue & $DevEUI
function getAllSoilTemps () {
    var allSoilTemp = "https://sensecap.seeed.cc/openapi/list_telemetry_data?device_eui=$DevEUI&measurement_id=4102&channel_index=1";
    var creds = btoa("$APIKey:$APIValue");
// Get Data     
    fetch (allSoilTemp, {
      headers: {
        "Authorization": `Basic ${creds}`
      }
    })
// Error Handling
    .then((result) => {
      if (result.status != 200) { throw new Error("Bad Server Response"); }
      return result.text();
    })
// Parse Data
    .then((response) => {
      document.getElementById("Historical Temperature").innerHTML = response;
    })
// Error Handling
    .catch((error) => { console.log(error); });
  }
