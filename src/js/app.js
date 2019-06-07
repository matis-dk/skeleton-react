import React from "react";
import styled from '@emotion/styled'

const Button = styled.button`
  color: turquoise;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hellossa wosrld</h1>
        <Button>This my button component.</Button>
      </div>
    );
  }
}

export default App;
