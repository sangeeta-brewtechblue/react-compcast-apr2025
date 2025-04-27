function BoilingVerdict(props ) {
    if (props.temperature >= 100) {
      return <p>The water is boiling.</p>;
    }
    return <p>The water is not boiling.</p>;
  }
  export default BoilingVerdict;