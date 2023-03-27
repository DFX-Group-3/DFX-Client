import axios from "axios";

export const retrieveUser = async () => {
  try {
    const response = await axios.get("http://localhost:5000/profile/1");

    return response;
  } catch (e) {
    return { error: "Error" };
  }
};
export const retrieveUserExperience = async () => {
  try {
    const response = await axios.get("http://localhost:5000/experience/1");

    return response;
  } catch (e) {
    return { error: "Error" };
  }
};
