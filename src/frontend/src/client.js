import fetch from "unfetch";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  // convert non-2xx HTTP responses into errors:
  const error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
};

export const getAllBloodReadings = () =>
  fetch("api/v1/blood-readings").then(checkStatus);


  export const addNewBloodReading = bloodReading => {

    var payLoad = JSON.stringify(bloodReading)
    console.log("Saving into db the following data: " + payLoad)
    return fetch("api/v1/blood-readings", {
      headers: {"Content-Type": "application/json"},
      method: 'POST',
      body: payLoad
    })  
  }
  