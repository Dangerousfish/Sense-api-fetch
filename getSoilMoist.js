// Set $APIKey, $APIValue & $DevEUI

function getSoilMoist () {
      var soilMoist = "https://sensecap.seeed.cc/openapi/view_latest_telemetry_data?device_eui=2CF7F1C0423001CE&measurement_id=4103&channel_index=1";
      var creds = btoa("$APIKey:$APIVALUE");
// Get Data     
      fetch (soilMoist, {
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
        document.getElementById("Moisture").innerHTML = response;
      })
// Error Handling
      .catch((error) => { console.log(error); });
    }
