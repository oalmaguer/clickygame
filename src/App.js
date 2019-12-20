import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  shuffleFriends = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.sort(() => Math.random() - 0.5);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  chooseFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.sort(() => Math.random() - 0.5);

    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriends={this.shuffleFriends}
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
