import React from 'react'
import styles from '../IndexBody.module.css';
import {MdOutlineMoneyOffCsred} from 'react-icons/md'

export default function Feature3 ()  {
 return (
    <div className={`lg:px-[20%] md:px-20 px-10 py-10`}>
        <div className='flex'>
            <h6 className='text-xl rounded-t-lg font-light tracking-widest p-1 bg-gray-600'>Fitur 03</h6>
        </div>
        <div className='grid gap-5 lg:grid-cols-2 justify-center'>
            <div>
                <div className='border-gray-400 border px-10 py-6 rounded drop-shadow-lg bg-gray-800 '>
                    <div className='flex mb-4 items-center'>
                        <div class="absolute bg-gray-800"></div>
                        <MdOutlineMoneyOffCsred className='bg-blue-500 p-3 text-6xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:text-3xl text-xl tracking-tight font-bold'>Belajar Secara Gratis</h1>
                    </div>
                    <h4 className='text-gray-300'>Gaada Modal Buat Mulai?</h4>
                    <h4 className='leading-tight'><span className='brand-logo text-sky-500'>LU?AK()DING</span> bisa belajar secara gratis!</h4>
                </div>
            </div>
            <div>
                <div className='rounded p-3 bg-gray-800'>
                    <ul className='list-disc list-outside text-gray-400 ml-4'>
                        <li>Belajar Secara Gratis.</li>
                        <li>Ga perlu modal buat mulai.</li>
                        <li>Donasi untuk mensupport pembuat (opsional).</li>
                        <li>Sampaikan masukan dan saran.</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
 )
}