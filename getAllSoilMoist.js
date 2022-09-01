// Set $APIKey, $APIValue & $DevEUI
function getAllSoilMoist () {
    var allSoilMoist = "https://sensecap.seeed.cc/openapi/list_telemetry_data?device_eui=$DevEUI&measurement_id=4102&channel_index=1";
    var creds = btoa("$APIKey:$APIValue");
// Get Data     
    fetch (allSoilMoist, {
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
      document.getElementById("Historical Moisture").innerHTML = response;
    })
// Error Handling
    .catch((error) => { console.log(error); });
  }
