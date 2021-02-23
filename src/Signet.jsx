import './Signet.css'

export default function Page(props) {
    return (
        <li>
            <img src={"images-signets/img" + props.id + ".jpg"} alt={props.nom}/>
            <div className="info">
                <h2>{props.nom}</h2>
                <p>Modifié : {props.date}</p>
            </div>
        </li>
    )
}