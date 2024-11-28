export default function User({ user }) {
  return (
    <div className="card-container">
      <div className="head">
        <div className="name">
          <h2 className="firstname">{user.firstName}</h2>
          <h2 className="lastname">{user.lastName}</h2>
        </div>

        <div className="position">Designer</div>

        <div className="address">
          <div className="phone-number">
            <div className="phone"></div> {user.phoneNumber}
          </div>
          <div className="email">
            <div className="mail"></div>
            {user.email}
          </div>
          <div className="location-con">
            <div className="location"></div>
            {user.address}
          </div>
        </div>
      </div>
      <div className="company-name-container">
        <div className="shape"></div>
        <div className="logo"></div>
        <div className="company-name">{user.companyName}</div>
        <div className="qr"></div>
      </div>
    </div>
  );
  //   return (
  //     <div>
  //       {userCards}
  //       <Greeting name="Solongo" age="20" nickname="Soko" />
  //       <Greeting name="Naraa" age="20" nickname="Tsatsaa" />

  //       <Avatar width="200" height="200" />
  //       <Avatar width="100" height="100" />
  //       <Avatar width="150" height="150" />
  //     </div>
  //   );
}
