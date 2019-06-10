[@react.component]
let make = () => {
  let (count, setCount) = React.useState(() => 0);

  let message =
    "You have clicked the button " ++ string_of_int(count) ++ " times!";

  let handleClick = _event => setCount(_ => count + 1);

  <div>
    <p> {ReasonReact.string(message)} </p>
    <button onClick=handleClick> {ReasonReact.string("Click me!")} </button>
  </div>;
};