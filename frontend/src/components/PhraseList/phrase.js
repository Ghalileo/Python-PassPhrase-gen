import axios from 'axios'
import React from 'react'
import './phrase.css'

// Defined variable for phrase item component which will handle the location of generated phrases
const PhraseItem = (props) => {

  // Function to delete generated phrases
const deletePhraseHandler = (title) => {
axios.delete(`http://127.0.0.1:8000/api/phrase/${title}`)
  .then(res => console.log(res.data)) }

// Generated HTML Of PhraseItem
return(
<div>
<p>
<span style={{ fontWeight: 'bold, underline'}}>{props.phrase.title} :</span>{props.phrase.passphrase_output}
<button onClick={() => deletePhraseHandler(props.phrase.title)} className="btn btn-outline-danger deletePhraseBtn">X</button>
</p>

</div>

)

}

export default PhraseItem;