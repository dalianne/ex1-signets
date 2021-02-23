import Signet from './Signet'
import tabSignets from "./data/signets.json"
import './ListeSignets.css'

export default function ListeSignets() {
    return (
        <div className="Signet">
            <ul>
                {tabSignets.map(signet => 
                    <Signet id={signet.id} nom={signet.nom} date={signet.date}/>
                )}
            </ul>
        </div>
    )
}