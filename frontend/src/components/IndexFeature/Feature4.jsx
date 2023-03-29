import React from 'react'
import styles from '../IndexBody.module.css';
import {FaQuestion} from 'react-icons/fa';

export default function Feature4 ()  {
 return (
    <div className={`lg:px-[20%] md:px-20 px-10 py-10`}>
        <div className='flex'>
            <h6 className='text-xl rounded-t-lg font-light tracking-widest p-1 bg-gray-600'>Fitur 04</h6>
        </div>
        <div className='grid gap-5 lg:grid-cols-2 justify-center'>
            <div>
                <div className='bg-gray-800 rounded p-3'>
                    <ul className='list-disc list-outside ml-4 text-gray-400'>
                        <li>Dibuat oleh Seorang Mahasiswa untuk Masyarakat Luas.</li>
                        <li>Untuk saat ini hanya dikelola seorang diri.</li>
                        <li>Support terhadap website akan sangat diapresiasi.</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='border-gray-400 border px-10 py-6  rounded drop-shadow-lg bg-gray-800'>
                    <div className='flex mb-4 items-center'>
                        <div class="bg-gray-800"></div>
                        <FaQuestion className='bg-blue-500 p-3 text-6xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:text-3xl text-xl font-bold tracking-tight'>Dibuat Oleh <br /> Micola Arighi</h1>
                    </div>
                    <h4 className='text-gray-300'>Masih Ragu?</h4>
                    <h4 className='leading-tight'><span className='text-sky-500 font-bold'>CEK YOUTUBE PEMBUAT</span> <br /> untuk tau lebih lanjut</h4>
                </div>
            </div>
        </div>
        
    </div>
 )
}