import React from "react";
import data from "../../data/data.json";
function ListItem(props) {
  return (
    <li className="list-person-item">
      {" "}
      {Object.keys(props.data).map(key => {
        return (
          <div className="card">
            <div className="foto-name">
              <img src={props.avatar} className="" alt="profil-pic" />
              <div className="name-title">
                <h2>
                  {props.firstName} {props.lastName}
                </h2>
                {props.isAdmin && <span>Admin</span>}
                <p>{props.title}</p>
              </div>
            </div>
            <div className="contact-data">
              <img
                src="https://img.icons8.com/carbon-copy/100/000000/phone.png"
                alt=""
              />
              <p>{props.contact.phone}</p>
              <img
                src="https://img.icons8.com/dotty/80/000000/email.png"
                alt=""
              />
              <p>{props.contact.email}</p>
              <img
                src="https://img.icons8.com/wired/64/000000/domain.png"
                alt=""
              />
              <p>
                <a
                  className="App-link"
                  href={props.contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.contact.url}
                </a>
              </p>
            </div>
            <p>
              member since:{" "}
              {new Date(props.memberSince).toLocaleDateString("de")}
            </p>
          </div>
        );
      })}
    </li>
  );
}

export default ListItem;
