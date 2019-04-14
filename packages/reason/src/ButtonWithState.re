type state = {
  count: int,
};

type action =
  | Click;

let component = ReasonReact.reducerComponent("ButtonWithState");

let make = _children => {
  ...component,

  initialState: () => {
    count: 0,
  },

  reducer: (action, state) =>
    switch(action) {
      | Click => ReasonReact.Update({ count: state.count + 1 })
    },

  render: ({ send, state }) => {
    let message = "You have clicked the button " ++ string_of_int(state.count) ++ " times!";

    <div>
      <p>(ReasonReact.string(message))</p>
      <button onClick=(_event => send(Click))>(ReasonReact.string("Click me!"))</button>
    </div>
  }
}