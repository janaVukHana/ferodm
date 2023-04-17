export default function PartnerIcon({img, alt}) {
    return (
        <div>
            <img src={`./toolsLogos/${img}`} alt={`${alt} tool logo`} />
        </div>
    )
}