import phraseItem from './phrase'
// Verify the object being mapped
export default function phraseView(props) {
    return (
        <div>
            <ul>
                {props.PhraseList.map(phrase => <phraseItem phrase={phrase}/> )}
            </ul>
        </div>
    )
}