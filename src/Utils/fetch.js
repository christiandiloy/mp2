import {serverRoutes} from './const';

export const RegisterAPI = async (username, password, fullName, email) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    const raw = JSON.stringify({
      "username": username,
      "password": password,
      "fullName": fullName,
      "email": email
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };
    const response = await fetch(serverRoutes.Register, requestOptions);
    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        return { success: true };
      } else {
        return { success: false, message: result.message };
      }
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error: ${error}`);
    return { success: false, message: error.message };
  }
};
