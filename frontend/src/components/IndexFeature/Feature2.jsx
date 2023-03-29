import React from 'react'
import styles from '../IndexBody.module.css';
import {FaCode} from 'react-icons/fa';

export default function Feature2 ()  {
 return (
    <div className={`lg:px-[20%] md:px-20 px-10 py-10`}>
        <div className='flex'>
            <h6 className='text-xl rounded-t-lg font-light tracking-widest p-1 bg-gray-600'>Fitur 02</h6>
        </div>
        <div className='grid gap-5 lg:grid-cols-2 justify-center'>
            <div>
                <div className='bg-gray-800 rounded p-3'>
                    <ul className='list-disc list-outside ml-4 text-gray-400'>
                        <li>Pilih bahasa pemrograman yang ingin dipelajari.</li>
                        <li>Pahami tiap materi.</li>
                        <li>Praktek dengan mencoba kode yang baru dipelajari.</li>
                        <li>Coba buat project sederhana dari ilmu yang di dapat.</li>
                        <li>Ketika lupa kode, cek fitur 1.</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='border-gray-400 border px-10 py-6 rounded drop-shadow-lg bg-gray-800'>
                    <div className='flex mb-4 items-center'>
                        <div class="bg-gray-800"></div>
                        <FaCode className='bg-blue-500 p-3 text-6xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:text-3xl text-xl font-bold tracking-tight'>Mulai Belajar Koding</h1>
                    </div>
                    <h4 className='text-gray-300'>Belum bisa ngoding?</h4>
                    <h4 className='leading-tight'><span className='brand-logo text-sky-500'>LU?AK()DING</span> bisa bantu ajarin!</h4>
                </div>
            </div>
        </div>
        
    </div>
 )
}