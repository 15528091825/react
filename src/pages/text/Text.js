import React, { Component } from 'react'
import  {connect} from "react-redux"

class Text extends Component {
    render() {
        console.log("text",this.props.text)
        return (
            <div>
                
            </div>
        )
    }
}
function filter(state){
    return {
        historypush:state.historypush,
        text:state.text
    }
}
export default connect(filter)(Text)