import Entete from './Entete'
import ListeSignets from './ListeSignets';
import './Page.css'

export default function Page() {
    return (
        <div className="Page">
            <Entete />
            <section className="contenu">
                <ListeSignets />
            </section>
        </div>
    );
}