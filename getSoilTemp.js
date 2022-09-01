// Set $APIKey, $APIValue & $DevEUI
function getSoilTemp () {
      var soilTemp = "https://sensecap.seeed.cc/openapi/view_latest_telemetry_data?device_eui=$DevEUI&measurement_id=4102&channel_index=1";
      var creds = btoa("$APIKey:$APIValue");
// Get Data     
      fetch (soilTemp, {
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
        document.getElementById("Temperature").innerHTML = response;
        $.getJSON( response, {
            measurement_value: "",
            tagmode: "any",
            format: "json"
          })
      })
// Error Handling
      .catch((error) => { console.log(error); });
    }
