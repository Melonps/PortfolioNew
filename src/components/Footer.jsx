import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { KakeLogo } from "../components/Icon";
import '../index.css'

const Footer = () => {


    return (
        <footer className='w-full  border-t-2 border-solid border-dark
        font-medium text-lg'>
            <Layout className='py-4 lg:py-8 flex items-center justify-between'>
                <KakeLogo />
                <span>{new Date().getFullYear()} &copy; Banri Kakehi</span>

            </Layout>

        </footer>

    )
}

export default Footer