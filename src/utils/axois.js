import axios from "axios";

const instanse = axios.create({
  //to be replaced by a hosted api from a cloud function
  baseURl: "http://localhost:5001/clone-eb5b1/us-central1/api", //THE API (cloud function url)
});
export default instanse;
