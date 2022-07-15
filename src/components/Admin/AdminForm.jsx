import styled from "styled-components"
import Link from 'next/link'

export const Container = styled.div`
    min-height:692px;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    top:0;
    z-index:0;
    overflow:hidden;
`;

export const FormWrap = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;

    @media screen and (max-width:400px){
        height:80%;
    }
`;


export const FormContent = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:480px){
        padding:10px;
    }
`;

export const Form = styled.form`
    max-width:300px;
    height:auto;
    width:100%;
    z-index:1;
    display: flex;
    flex-direction: column;
    margin:0 auto;
    border-radius: 4px;

    @media screen and (max-width:400px){
        padding: 32px 32px;
    }
`;

export const FormLabel = styled.label`
    margin-bottom: 0.2rem;
    font-size: 14px;
`;

export const FormInput = styled.input`
    padding:6px 6px;
    margin-bottom:32px;
    border:none;
    border-radius: 4px;
    background-color: #b6decf;
`;

export const Text = styled.span`
    text-align: center;
    color: #fff;
    font-size: 14px;
`;