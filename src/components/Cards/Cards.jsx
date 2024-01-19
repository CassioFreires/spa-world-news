import { useState } from 'react';
import { TextLimit } from '../TextLimit/TextLimit';
import { CardContainer, CardBody, CardFooter, CardHeader } from './CardStyled';

export default function Card(props) {
    return (
        <CardContainer search={props.search}>
           <CardBody>
                <div>
                    <CardHeader top={props.top}>
                        <h2>{props.title}</h2>
                        <TextLimit text={props.text} limit={150}/>    
                    </CardHeader> 

                    <CardFooter top={props.top}>
                        <section>
                            <i class="bi bi-hand-thumbs-up"></i>
                            <span>{props.like}</span>
                            <i class="bi bi-chat-left"></i>
                            <span>{props.comments}</span>
                        </section>
                    </CardFooter>
                </div>
                <img src={props.banner} alt="Imagem da notícia" />
           </CardBody>
        </CardContainer>
    )
}