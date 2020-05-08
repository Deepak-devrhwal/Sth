import React from "react";

class Card extends React.Component {
  handleClick = () => {
    this.props.flipCard(this.props.index);
  };

  render() {
    const direction = this.props.up ? "up" : "down";
    switch (direction) {
      case "up":
        return <img src={this.props.value} className={`card ${direction}`} />;
        break;
      case "down":
        return (
          <img
            src='../images/sth2.jpg'
            onClick={this.handleClick}
            className={`card ${direction}`}
          />
        );
        break;
      default:
        return (
          <img
            src='../images/sth2.jpg'
            onClick={this.handleClick}
            className={`card ${direction}`}
          />
        );
    }
  }
}

export default Card;
