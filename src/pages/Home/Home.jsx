import Card from "../../components/Cards/Cards";
import { getAllNews, getTopNews } from "../../services/news.services";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { useState, useEffect } from "react";

export default function Home() {
    const [news, setNews] = useState([]);
    const [topNews, setTopNews] = useState([]);

    async function findAllNews(){
        const response = await getAllNews();
        setNews(response.data.results);

        const responseTopNews = await getTopNews();
        setTopNews(responseTopNews.data.results)
    }   

    useEffect(() => {
        findAllNews();
    }, [])

    return (
        <>
            <HomeHeader>
                {topNews.map((item, index) => { return <Card 
                 key={index}
                 top={"top"}
                 title={item.title}  
                 text={item.text}
                 banner={item.banner}
                 likes={item.likes}
                 comments={item.comments}
                 /> })}
            </HomeHeader>
            <HomeBody>
                 {news.map((item, index) => { return <Card 
                 key={index}
                 title={item.title}  
                 text={item.text}
                 banner={item.banner}
                 likes={item.likes}
                 comments={item.comments}
                 /> })}
            </HomeBody>
        </>    
    )
}