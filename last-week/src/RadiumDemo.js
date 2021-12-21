import Radium from "radium";

const RadiumDemo = () => {
  return (
    <div style={[styles.block]}>
      <h1>In RadiumDemo</h1>

      <button style={(styles.basebutton, styles.primarybutton)}>
        Primary Button
      </button>
      <br />
      <button style={(styles.basebutton, styles.SecondaryButton)}>
        Secondary Button
      </button>
    </div>
  );
};

const styles = {
  block: {
    backgroundColor: "green",
  },

  basebutton: {
    color: "white",
  },

  primarybutton: {
    backgroundColor: "#5d5c61",
  },

  SecondaryButton: {
    backgroundColor: "#379683",
  },
};

export default Radium(RadiumDemo);
