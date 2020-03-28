import React from "react";

function ListItem(props) {
  return (
    <li className="list-person-item">
      {" "}
      <div className="card">
        <div className="foto-name">
          <img src={props.person.avatar} className="" alt="profil-pic" />
          <div className="name-title">
            <h2>
              {props.person.firstName} {props.person.lastName}
            </h2>
            {props.person.isAdmin && <span>Admin</span>}
            <p>{props.person.title}</p>
          </div>
        </div>
        <div className="contact-data">
          <img
            src="https://img.icons8.com/carbon-copy/100/000000/phone.png"
            alt=""
          />
          <p>{props.person.contact.phone}</p>
          <img src="https://img.icons8.com/dotty/80/000000/email.png" alt="" />
          <p>{props.person.contact.email}</p>
          <img src="https://img.icons8.com/wired/64/000000/domain.png" alt="" />
          <p>
            <a
              className="App-link"
              href={props.person.contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.person.contact.url}
            </a>
          </p>
        </div>
        <p>
          member since:{" "}
          {new Date(props.person.memberSince).toLocaleDateString("de")}
        </p>
      </div>
    </li>
  );
}

export default ListItem;
