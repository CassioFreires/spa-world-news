import { useEffect, useState } from "react";
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled";
import { useParams } from "react-router-dom";
import { searchByTitle } from "../../services/news.services";
import Card from "../../components/Cards/Cards";

export default function Search() {

    const {title} = useParams();
    const [news, setNews] = useState([]);

    const searchNews = async () => {
        try{
            const newsApi = await searchByTitle(title);
            setNews(newsApi.data.results);
            console.log(newsApi.data.results)
        }catch(e) {
            console.log(e)
            setNews([])
        }
    }

    useEffect(() => {
        searchNews();
    } , [title])

    return (
        <ContainerResults>
            {news.length <= 0 ? 
                <TextResults>
                    <p>Não encontramos resultados para: <span>{title}</span></p>
                </TextResults>
                     :
                <TextResults><p>Resulados: <span>{news.length}</span></p></TextResults>}

            <SearchNews>
            {news.map((item, index) => { return <Card 
                 key={index}
                 search={'search'}
                 title={item.title}  
                 text={item.text}
                 banner={item.banner}
                 likes={item.likes}
                 comments={item.comments}
                 /> })}
            </SearchNews>
        </ContainerResults>
    )
}