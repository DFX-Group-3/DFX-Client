import axios from "axios";

export const retrieveUser = async (user) => {
  try {
    const uri = `http://localhost:9000/profile`
    const response = await axios.get(uri, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    return response;
  }
  catch (e) {
    return { error: 'Problem getting user overview' }
  }

  // try {
  //   const response = await axios.get(`http://localhost:9000/profile/${user._id}`);
  //   return response;
  // } catch (e) {
  //   return { error: "Error" };
  // }
};
export const retrieveUserExperience = async () => {
  // try {
  //   const response = await axios.get("http://localhost:5000/experience/1");
  //   return response;
  // } catch (e) {
  //   return { error: "Error" };
  // }
};
