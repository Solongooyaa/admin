export default function Home() {
  function Greeting(props) {
    return <div>Hi,{props.nickname}</div>;
  }
  return (
    <div>
      <Greeting nickname="Byambaa" />
      <Greeting nickname="Bataa" />
      <Greeting nickname="Sarnai" />
    </div>
  );
}
<div>
  HI,{props.name} {props.age} {props.nickname}
</div>;

function Avatar(props) {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/IOjWm71s.jpg"
      alt="Percy Lavon Julian"
      width={props.width}
      height={props.height}
    />
  );
}
