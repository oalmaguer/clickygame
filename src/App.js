import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    finalScore: 0
  };

  finishGame = () => {
    if (this.state.score > this.state.finalScore) {
      this.setState({ finalScore: this.state.score }, function() {
        console.log(this.state.finalScore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over`);
    this.setState({ score: 0 });
    this.state.friends.sort(() => Math.random() - 0.5);
    return true;
  };

  clickCount = id => {
    let friendState = this.state.friends;
    friendState.find((i, y) => {
      if (i.id === id) {
        if (friends[y].count === 0) {
          friends[y].count = friends[y].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          friendState.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.finishGame();
        }
      }
    });
  };

  // shuffleFriends = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.sort(() => Math.random() - 0.5);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // chooseFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.sort(() => Math.random() - 0.5);

  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCount={this.clickCount}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            chosen={friend.chosen}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
