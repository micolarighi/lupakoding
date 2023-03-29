import React from 'react'
import styles from '../IndexBody.module.css';
import { FaSearch} from 'react-icons/fa';

export default function Feature1 ()  {
 return (
    <div className={`lg:px-[20%] md:px-20 px-10 py-10 mt-20`}>
        <div className='flex'>
            <h6 className='text-xl rounded-t-lg font-light tracking-widest p-1 bg-gray-600'>Fitur 01</h6>
        </div>
        <div className='grid gap-5 lg:grid-cols-2 justify-center'>
            <div>
                <div className='border-gray-400 border px-10 py-6 rounded drop-shadow-lg bg-gray-800 '>
                    <div className='flex mb-4 items-center'>
                        <div class="absolute bg-gray-800"></div>
                        <FaSearch className='bg-blue-500 p-3 text-6xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:text-3xl text-xl font-bold tracking-tight'>Cari Kode yang Terlupakan</h1>
                    </div>
                    <h4 className='text-gray-300'>Lupa kode program?</h4>
                    <h4 className='leading-tight'><span className='brand-logo text-sky-500'>LU?AK()DING</span> bisa bantu ingetin!</h4>
                </div>
            </div>
            <div>
                <div className='bg-gray-800 rounded p-3'>
                    <ul className='list-disc list-outside ml-4 text-gray-400'>
                        <li>Akses kolom pencarian di bagian atas website.</li>
                        <li>Cari kode yang terlupakan di kolom pencarian.</li>
                        <li>Cari berdasarkan bahasa pemrograman atau keyword.</li>
                        <li>Ketika lupa, ulangi langkah tersebut.</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
 )
}