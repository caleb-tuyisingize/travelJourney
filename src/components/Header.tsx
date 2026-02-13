import svg from '../../public/globe-icon-svg-download-png-2267340.png'
export default function Header(){
    return (
        <>
        <header>
            <div className='flex items-center justify-center pt-10 text-white bg-pinkCustom'>

            <img src={svg} alt="globe icon" className='filter invert w-20'/>
            <h1 className='text-4xl'>my travel journal.</h1>
            </div>
        </header>
        
        </>
    )
}