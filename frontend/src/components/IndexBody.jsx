import { FaSearch, FaCode, FaQuestion} from 'react-icons/fa';
import {MdOutlineMoneyOffCsred} from 'react-icons/md'
import Feature1 from './IndexFeature/Feature1'
import Feature2 from './IndexFeature/Feature2'
import Feature3 from './IndexFeature/Feature3'
import Feature4 from './IndexFeature/Feature4'
import Option from './Option'
import styles from './IndexBody.module.css'
import {Link} from 'react-router-dom'
import Footer from './Footer';

export default function IndexBody () {
    return (
        <div>
            <div className="text-center px-5 bg-gradient-to-b from-[#152a64] to-gray-900">
                <h1 className="lg:text-7xl md:text-4xl pt-10 text-3xl tracking-tighter font-bold">Buat Kamu Yang Sering</h1>
                <h1 className="lg:text-7xl md:text-4xl text-3xl font-bold tracking-tighter">Lupa Kode Program</h1>
                <p className="lg:text-4xl text-2xl leading-tight  text-gray-400 mt-5">Cari kode yang <span className="text-sky-500">terlupakan</span> atau mulai belajar koding sekarang.</p>
            </div>
            {/*  */}
            <div className="flex mt-10 justify-center drop-shadow-lg bg-opacity-20">
                <form className="lg:w-4/6 w-5/6 ">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contoh : HTML div " required/>
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cari</button>
                    </div>
                </form>
            </div>
            <div className="px-5">
                <div className="grid lg:px-16 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2 mt-8">
                    <div className='flex items-center  border-gray-400 border px-3 py-4  rounded drop-shadow-lg bg-gray-800'>
  
                        <FaSearch className='bg-blue-500 px-1 text-3xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:leading-none lg:text-lg font-semibold text-sm'>Cari Kode Yang Terlupakan</h1>
                    </div>
                    <div className='flex items-center border-gray-400 border px-3 py-4 rounded drop-shadow-lg bg-gray-800 '>
          
                        <FaCode className='bg-blue-500 px-1 text-3xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:leading-none lg:text-lg font-semibold text-sm'>Mulai Belajar Koding</h1>
                    </div>
                    <div className='flex items-center border-gray-400 border px-3 py-4 rounded drop-shadow-lg bg-gray-800 '>
                 
                        <MdOutlineMoneyOffCsred className='bg-blue-500 px-1 text-3xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:leading-none lg:text-lg font-semibold text-sm'>Belajar Secara Gratis</h1>
                    </div>
                    <div className='flex items-center border-gray-400 border px-3 py-4 rounded drop-shadow-lg bg-gray-800 '>
                 
                        <FaQuestion className='bg-blue-500 px-2 py-2 text-3xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:leading-none lg:text-lg font-semibold text-sm'>Dibuat Oleh <br /> Micola Arighi</h1>
                    </div>
                </div>
            </div>

            {/* Option Section */}
            <Option/>

            <div className={styles.patternContainer}>
                {/* cari kode yang terlupakan */}
                <Feature1/>
                {/* Mulai Belajar Koding */}
                <Feature2/>
                {/* Belajar Secara Gratis */}
                <Feature3/>
                {/* Dibuat oleh Micola Arighi */}
                <Feature4/>
            </div>



            {/* <div>
                <Link to='/blog'>
                    HTML 
                </Link>
            </div> */}

            <Footer/>
            
        </div>
    )
}