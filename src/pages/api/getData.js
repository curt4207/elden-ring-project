
const callAPI = async (path) => {
  try {
    const res = await fetch(`https://eldenring.fanapis.com/api/${path}`);
    const data = (await res.json()).data;
    // console.log(data);
    return data;

  } catch (error) {
    console.log(error);
  }
};
  export default callAPI;
