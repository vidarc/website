let component = ReasonReact.statelessComponent("ReasonReactEntry");

let handleClick = (_event, _self) => Js.log("clicked!");

let make = _children => {
  ...component,

  render: self =>
    <div onClick={self.handle(handleClick)}>
      {ReasonReact.string("Hello World!")}
      <ButtonWithState />
    </div>,
};

let default = ReasonReact.wrapReasonForJs(~component, () => make([||]));