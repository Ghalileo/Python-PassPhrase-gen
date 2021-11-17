import PhraseItem from './phrase'
// Verify the object being mapped
export default function PhraseView(props) {
    return (
        <div>
            <ul>
                {props.phraseList.map(phrase => <PhraseItem phrase={phrase}/> )}
            </ul>
        </div>
    )
}