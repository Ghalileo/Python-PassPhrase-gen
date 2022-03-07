import PhraseItem from './phrase'
import './phrase.css'
// Verify the object being mapped
export default function PhraseView(props) {
    return (
        <div>
            <ul className="generatedPhrases">
                {props.phraseList.map(phrase => 
                <PhraseItem phrase={phrase}/> )}
            </ul>
        </div>
    )
}