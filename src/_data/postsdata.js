const axios = require("axios");

module.exports = async function getPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    try {
      const response = await axios.get(url);
        var posts = response.data;
        console.log('data :', posts);
        return posts;
    } catch (error) {
      console.error(error);
    }
  }





  