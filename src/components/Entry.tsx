type propType = {

    img: string
    title: string
    country: string
    googleMapsLink: string
    dates: string
    text: string
    alt: string
}


export default function Entry({img, title, country, googleMapsLink, dates, text, alt}: propType){
    return(<>
    <article className="flex p-12">
        <div className="w-imageW shrink-0 rounded-md h-imageH overflow-hidden">
        <img className="w-imageWFull object-cover  h-imageFull" src={img} alt={alt} />
        </div>
        <div className="mt-onInfo mx-5">
            <div className="flex gap-2">

            <img className="w-6 "  src="../../public/icons/map-marker-2-svgrepo-com.png" alt="map marker icon" />
            <span className="uppercase">{country}</span>
            <a className="underline mt-1mk leading- text-sm text-linkColor" href={googleMapsLink}>View on Google Maps</a>
            </div>
            <h1 className="font-bold mt-2 text-3xl tracking-tighter">{title}</h1>
            <p className="font-semibold mt-4">{dates}</p>
            <p className="text-sm mt-4 leading-relaxed mineDisp ">{text}</p>
        </div>
        
    </article>
    </>);
}