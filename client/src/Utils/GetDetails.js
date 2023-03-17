import axios from "axios";

export const retrieveUser = async () => {
  try {
    const response = await axios.get("http://localhost:5000/person/1");

    return response;
  } catch (e) {
    return { error: "Error" };
  }
};
