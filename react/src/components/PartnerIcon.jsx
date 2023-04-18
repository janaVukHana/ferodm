export default function PartnerIcon({img, alt}) {
    return (
        <div>
            <img src={`./images/toolsLogos/${img}`} alt={`${alt} tool logo`} />
        </div>
    )
}