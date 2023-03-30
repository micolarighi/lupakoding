import { FaSearch, FaCode, FaQuestion} from 'react-icons/fa';
import {MdOutlineMoneyOffCsred} from 'react-icons/md'
export default function Option () {
    return (
        <div>
            <div className="px-5">
                <div className="grid lg:px-64 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2 mt-8">
                    <div className='flex items-center  border-gray-400 border px-3 py-4  rounded drop-shadow-lg bg-gray-800'>
  
                        <FaSearch className='bg-blue-500 px-1 text-3xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:leading-none lg:text-lg font-semibold text-sm'>HTML</h1>
                    </div>
                    <div className='flex items-center border-gray-400 border px-3 py-4 rounded drop-shadow-lg bg-gray-800 '>
          
                        <FaCode className='bg-blue-500 px-1 text-3xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:leading-none lg:text-lg font-semibold text-sm'>CSS</h1>
                    </div>
                    <div className='flex items-center border-gray-400 border px-3 py-4 rounded drop-shadow-lg bg-gray-800 '>
                 
                        <MdOutlineMoneyOffCsred className='bg-blue-500 px-1 text-3xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:leading-none lg:text-lg font-semibold text-sm'>JAVASCRIPT</h1>
                    </div>
                    <div className='flex items-center border-gray-400 border px-3 py-4 rounded drop-shadow-lg bg-gray-800 '>
                        <FaQuestion className='bg-blue-500 px-2 py-2 text-3xl rounded drop-shadow-lg'/>
                        <h1 className='ml-4 leading-tight lg:leading-none lg:text-lg font-semibold text-sm'>REACT</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}