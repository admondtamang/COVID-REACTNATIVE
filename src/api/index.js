import Axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changableUrl = url;
  if (country) changableUrl = `${url}/countries/${country}`;
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await Axios.get(changableUrl);
    return { confirmed, deaths, recovered, lastUpdate };
  } catch (error) {
    throw error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await Axios.get(`$(url)/daily`);
    console.log("daily data: ", data);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    throw error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
