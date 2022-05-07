import "./App.css";
//Import calendar
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import { useEffect, useState } from "react";

export default function App() {
  const [date, setdata] = useState(new Date());
  const [room, setroom] = useState("");
  const [name, setname] = useState("");
  const [time, settime] = useState("");
  const [description, setdescription] = useState("");
  const [dateTime, setDatetime] = useState("");
  var gapi = window.gapi;
  var CLIENT_ID =
    "94346182727-9np4rgmgr2i4iq8vft3h527ein7cosqg.apps.googleusercontent.com";
  var API_KEY = "AIzaSyA2ynyIIS__xCDklZgWEoZcDZMsCml9ruQ";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleClick = () => {
    console.log("123");
    if (
      room === "" ||
      name === "" ||
      description === "" ||
      time === "" ||
      date === ""
    ) {
      alert("Enter all the  fields");
    } else {
      gapi.load("client:auth2", () => {
        console.log("loaded client");

        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        });

        gapi.client.load("calendar", "v3", () => console.log("bam!"));

        gapi.auth2
          .getAuthInstance()
          .signIn()
          .then(() => {
            var event = {
              summary: "Affle Meeting Room",
              location: "India, Gurgaon",
              description: "",
              start: {
                dateTime: `${dateTime}`,
                timeZone: "Asia/Kolkata"
              },
              end: {
                dateTime: `${dateTime}`,
                timeZone: "Asia/Kolkata"
              },
              recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
              attendees: [
                { email: "lpage@example.com" },
                { email: "sbrin@example.com" }
              ],
              reminders: {
                useDefault: false,
                overrides: [
                  { method: "email", minutes: 24 * 60 },
                  { method: "popup", minutes: 10 }
                ]
              }
            };

            var request = gapi.client.calendar.events.insert({
              calendarId: "primary",
              resource: event
            });

            request.execute((event) => {
              console.log(event);
              window.open(event.htmlLink);
            });

            // get events
            gapi.client.calendar.events
              .list({
                calendarId: "primary",
                timeMin: new Date().toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults: 10,
                orderBy: "startTime"
              })
              .then((response) => {
                const events = response.result.items;
                console.log("EVENTS: ", events);
              });
          });
      });
    }
  };
  useEffect(() => {
    if (date.value) {
      setDatetime(date.value.toISOString());
    }
  }, [date]);
  return (
    <>
      <header>
        <button className="logout--button">Log out</button>
      </header>
      <form className="form">
        <h2>Meeting Room Booking</h2>
        <fieldset className="field">
          <legend>Meeting Room</legend>
          <select
            className="select"
            value={room}
            onChange={(e) => setroom(e.target.value)}
            required
          >
            <option value="0">Training Room</option>
            <option value="1">Conference Room </option>
          </select>
        </fieldset>
        <br />
        <br />
        <fieldset className="field">
          <legend>Name</legend>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            placeholder="Enter Your Name"
          />
        </fieldset>
        <br />
        <br />
        <fieldset className="field">
          <legend>Meeting Description</legend>
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            required
            placeholder="Enter Meeting Description"
          />
        </fieldset>
        <br />
        <br />
      </form>
      
      {/* calendar */}
      <div className="calendar">
        <CalendarComponent onChange={setdata} value={date} />
        {/* <Calendar/> */}
      </div>
      <p>{date.value && date.value.toDateString()}</p>

      <h2>Please Select your preferred slot</h2> 
      {/* Slot Buttons */}
      <div className="btns">
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>10:00</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>10:30</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>11:00</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>11:30</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>12:00</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>12:30</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>01:00</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>01:30</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>02:00</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>02:30</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>03:00</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>03:30</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>04:00</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>04:30</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>05:00</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>05:30</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>06:00</button>
        </div>
        <div className="grid-button">
          <button onClick={(e) => settime(e.target.textContent)}>06:30</button>
        </div>
      </div>
      <div className="grid-button7">
        <button onClick={(e) => settime(e.target.textContent)}>07:00</button>
      </div>
      <br />
      <br />
      <footer>
        <button id="calendar" onClick={handleClick}>
          Book Appointment
        </button>
      </footer>
    </>
  );
}
