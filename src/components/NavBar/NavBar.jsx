import logoHeader from './images/header-logo.svg';
import { Outlet, Link, useNavigate } from "react-router-dom";
import {Nav, ImageLogo, HeaderInput, ErrorSpan } from './NavBarStyled';
import Button from '../Button/Button'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from '../../schemas/search.schema';


export default function NavBar() {
    
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(searchSchema)
    });

    const onSearch = (data) => {
        navigate(`/search/${data.title}`);
        reset()
    }

    const goAuth = () => {
        navigate('/auth')
    }
    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <HeaderInput>
                        <button type='submit'>
                            <i class="bi bi-search"></i>
                        </button>
                        <input  {...register("title")}
                            type="text"
                            placeholder='Pesquise por título'
                        />
                    </HeaderInput>
                </form>

                <Link to={'/'}><ImageLogo src={logoHeader} alt="Logo do world news" /></Link>

               <Link to={'/auth'}><Button onClick={goAuth} type="button" text={"Entrar"}/></Link>
            </Nav>
            {errors.title? <ErrorSpan>{errors.title.message}</ErrorSpan> : ""}
            <Outlet />
        </>
    )
}
