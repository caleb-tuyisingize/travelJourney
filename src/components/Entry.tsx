
export default function Entry(){
    return(<>
    <article className="flex p-12">
        <div className="w-imageW shrink-0 rounded-md h-imageH overflow-hidden">
        <img className="w-imageWFull object-cover  h-imageFull" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji" />
        </div>
        <div className="mt-onInfo mx-5">
            <div className="flex gap-2">

            <img className="w-6 "  src="../../public/icons/map-marker-2-svgrepo-com.png" alt="map marker icon" />
            <span className="uppercase">Japan</span>
            <a className="underline mt-1mk leading- text-sm text-linkColor" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
            </div>
            <h1 className="font-bold mt-2 text-3xl tracking-tighter">Mount Fuji</h1>
            <p className="font-semibold mt-4">12 Jan, 2021 - 24 Jan, 2021</p>
            <p className="text-sm mt-4 leading-relaxed mineDisp ">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    </article>
    </>);
}