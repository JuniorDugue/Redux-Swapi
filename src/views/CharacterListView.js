import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { getChar } from "../actions/index";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChar()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return(
        <h1>Loading</h1>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return{
    characters: state.charReducers.characters,
    isLoading: state.charReducers.isLoading
  }
}
// the characters and the fetching boolean
export default connect(
  null, mapStateToProps /* mapStateToProps replaces null here */,
  {
    getChar /* action creators go here */
  }
)(CharacterListView);
