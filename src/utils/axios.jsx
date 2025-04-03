import axios from "axios";

const intance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzM2M2VkNTUwNzkzMDNlNzEwN2RjZjI2Y2VlOTdiOCIsIm5iZiI6MTc0MzUzMjEwMy4wNzQsInN1YiI6IjY3ZWMzMDQ3Njc0YWE0Yzg2ZWZhMDE5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EICKANft4b6Ijn-xCO4Gf9ZmI0GAm8HLNkXiUorlKps'
  }
});

export default intance;