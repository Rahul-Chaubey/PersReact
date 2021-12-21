import React, { Component } from "react";
import { connect } from "react-redux";
import { useState } from "react";

class personList extends Component {
  state = {
    selectedObject: null,
  };

  onEditClickHandler = (person) => {
    console.log("Edit", person);
    this.setState({ selectedObject: person });
  };

  onResetClickHandler = () => {
    this.setState({ selectedObject: null });
  };

  onValueChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({
      selectedObject: { ...this.state.selectedObject, [name]: value },
    });
  };

  render() {
    console.log(this.props.personList);
    return (
      <>
        <h1>personList</h1>
        <table className={"table"}>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.personList.map((person, index) => {
              console.log(this.state.selectedObject);
              return (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <input
                        name="Name"
                        value={this.state.selectedObject.Name}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.Name
                    )}
                  </td>
                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <input
                        name="Age"
                        value={this.state.selectedObject.Age}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.Age
                    )}
                  </td>

                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.updatePerson({
                              ...this.state.selectedObject,
                            });
                            this.onResetClickHandler();
                          }}
                        >
                          Update
                        </button>
                        &nbsp; &nbsp;
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            //code to reset the row
                            this.onResetClickHandler();
                          }}
                        >
                          Reset
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            this.props.deletePersonByIndex(index);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                        &nbsp; &nbsp;
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.onEditClickHandler(person);
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personList: state.personList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePersonByIndex: (index) =>
      dispatch({ type: "PERSON_DELETE", payload: index }),
    updatePerson: (person) =>
      dispatch({ type: "PERSON_UPDATE", payload: person }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(personList);
