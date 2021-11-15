import axios from 'axios'
import React from 'react'

const phraseItem = (props) => {

const deletePhraseHandler = (title) => {
axios.delete(`http://localhost:8000/api/phrase/${title}`)
  .then(res => console.log(res.data)) }


return(
<div>
<p>
<span style={{ fontWeight: 'bold, underline'}}>{props.phrase.title} :</span>{props.phrase.phrases}
<button onClick={() => deletePhraseHandler(props.phrase.title)} className="btn btn-outline-danger">X</button>
</p>

</div>

)

}

export default phraseItem;