let component = ReasonReact.statelessComponent("ReasonReact");

let handleClick = (_event, _self) => Js.log("clicked!");

let make = _children => {
  ...component,

  render: self =>
    <div onClick={self.handle(handleClick)}>
      {ReasonReact.string("Hello World!")}
    </div>,
};

let default = ReasonReact.wrapReasonForJs(~component, () => make([||]));