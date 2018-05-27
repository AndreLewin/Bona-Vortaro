import React from 'react';

class Baskuligilo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const novaAŭBona = this.props.novaAŭBona;
    const handleBaskuligiloClick = this.props.handleBaskuligiloClick;

    return (
      <div className="container">
        <a className="button" onClick={handleBaskuligiloClick}>
          {novaAŭBona ? "Ordigi laŭ boneco" : "Ordigi laŭ dato"}
        </a>
      </div>
    );
  }
}

export default Baskuligilo;