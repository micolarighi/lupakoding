import { FaSearch, FaCode, FaQuestion } from 'react-icons/fa';
import { MdOutlineMoneyOffCsred } from 'react-icons/md'

export function OptionView(props) {
    return (
        <div className='flex transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 text-center justify-center items-center border-gray-400 border cursor-pointer rounded drop-shadow-lg bg-gray-700'>
            <a className='leading-tight px-3 py-4 lg:leading-none lg:text-lg font-semibold text-sm'>{props.name}</a>
        </div>
    )
}

export default function Option() {
    return (
        <div className='bg-gray-800 shadow-lg shadow-gray-800 mt-12 p-8'>
            <div className='text-center'>
                <h1 className='lg:text-4xl font-bold text-2xl'>Mau Mulai Belajar Apa?</h1>
                <p className='text-gray-400 lg:text-xl text-lg'>Pilih dan mulai belajar sekarang.</p>
            </div>
            <div className="px-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-2 mt-8">
                    <OptionView name="HTML" />
                    <OptionView name="CSS" />
                    <OptionView name="JAVASCRIPT" />
                </div>
            </div>
        </div>
    )
}