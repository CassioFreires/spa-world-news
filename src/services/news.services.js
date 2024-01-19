import axios from "axios";

const baseUrl = 'http://localhost:8081';

export function getAllNews(){
    const response = axios.get(`${baseUrl}/news`);
    return response;

}

export function getTopNews() {
    const response = axios(`${baseUrl}/news/top`);
    return response;
}

export function searchByTitle(title){
    const response = axios.get(`${baseUrl}/news/search?title=${title}`);
    return response
}