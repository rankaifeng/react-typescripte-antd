import React, { Component } from 'react';
import Button from './components/button';
const styles = {
  remove: {
    margin: '0 10px',
  },
};
const initialState = { clicksCount: 0 };
type State = Readonly<typeof initialState>;
class App extends Component<object, State> {
  readonly state: State = initialState;

  render() {
    const { clicksCount } = this.state;

    return (
      <>
        <Button onClick={this.handleIncrement}>增加</Button>
        <Button onClick={this.handleDecrement} styles={styles.remove}>
          减少
        </Button>
        你点了 {clicksCount} 次!
      </>
    );
  }
  private handleIncrement = () => this.setState(incrementClicksCount);
  private handleDecrement = () => {
    const { clicksCount } = this.state;
    if (clicksCount == 0) {
      return;
    }
    this.setState(decrementClicksCount);
  };
}
const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1,
});
const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1,
});

export default App;
