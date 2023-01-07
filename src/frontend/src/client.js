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
    const payLoad = JSON.stringify(bloodReading);
    console.log("Saving into db the following data: " + payLoad)
    let options = {
        headers: {"Content-Type": "application/json"},
        method: 'POST',
        body: payLoad
    };
    return fetch("api/v1/blood-readings", options)
}

export const deleteBloodReading = reading => {
    const id = reading.id
    const payLoad = JSON.stringify(reading);
    console.log("Deleting the following data with id: " + payLoad)

    let options = {
        method: 'DELETE',
    };
    return fetch(`api/v1/blood-readings/${id}`, options)

}