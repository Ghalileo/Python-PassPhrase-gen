import axios from 'axios'
import React from 'react'

// Defined variable for phrase item component which will handle the location of generated phrases
const PhraseItem = (props) => {

  // Function to delete generated phrases
const deletePhraseHandler = (title) => {
axios.delete(`http://localhost:8000/api/phrase/${title}`)
  .then(res => console.log(res.data)) }

// Generated HTML Of PhraseItem
return(
<div>
<p>
<span style={{ fontWeight: 'bold, underline'}}>{props.phrase.title} :</span>{props.phrase.phrases}
<button onClick={() => deletePhraseHandler(props.phrase.title)} className="btn btn-outline-danger">X</button>
</p>

</div>

)

}

export default PhraseItem;