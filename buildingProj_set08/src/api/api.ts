import axios from "axios";
import lodash from "lodash";

let url = "http://localhost:7411";

const copyToWrite = async (data: any) => {
  try {
    return axios.post(`${url}/create-data`, data);
  } catch (error) {
    console.log(error);
  }
};

const copyToRead = async () => {
  try {
    return axios.get(`${url}/read-data`).then((res) => {
      console.log(res.data);
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getVideos = async (search: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: search,
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "fe3b741683msh56c90de0dae0d35p1abbc5jsn5ed97e5dc316",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    let check: any = await copyToRead();
    if (lodash.some(check?.data.data, search)) {
      console.log("this", lodash.some(check.data, search));
      return lodash.find(check?.data.data, search);
    } else {
      const response = await axios.request(options);
      let dataSearch = `${search}`;
      let writeData = {
        data: {
          [dataSearch]: response.data,
        },
      };

      copyToWrite(writeData);

      return lodash.find(check.data, search);
      // return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
