import axios from "axios"
const BASE_URL = "https://youtube-v31.p.rapidapi.com"
const options = {
  url: BASE_URL,
  params: {
    maxResults: 40,
  },
  headers: {
    "X-RapidAPI-Key": "0562494000msh3eb37c226d5ff6ep1822d7jsn97d3e980bc35",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
}
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data
}
