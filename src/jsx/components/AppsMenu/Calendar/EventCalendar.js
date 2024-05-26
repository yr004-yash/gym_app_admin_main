import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import { stringify } from 'flatted';

class EventCalendar extends Component {

   


  
   /**
    * adding dragable properties to external events through javascript
    */
   componentDidMount() {


      const existingDataString = localStorage.getItem('event');
      const existingData = existingDataString ? JSON.parse(existingDataString) : [];

      this.setState({
         calendarEvents: [...this.state.calendarEvents, ...existingData],

      });
      console.log(this.state.calendarEvents);


      let draggableEl = document.getElementById("external-events");
      new Draggable(draggableEl, {
         itemSelector: ".fc-event",
         eventData: function (eventEl) {
            let title = eventEl.getAttribute("title");
            let id = eventEl.getAttribute("data");
            return {
               title: title,
               id: id,
            };
         },
      });
   }

   
  eventClick = (eventClick) => {
   // Create a copy of the event to track changes
   let updatedEvent = { ...eventClick.event };
   // console.log(updatedEvent);

   // Function to update the event properties
   const updateEventProperty = (property, value) => {
      updatedEvent = {
         ...updatedEvent,
         [property]: value,
      };
      // console.log(123,updatedEvent);
      // localStorage.setItem('x',updatedEvent);
   };

   Alert.fire({
      title: eventClick.event.title,
      html: `
         <div class="table-responsive">
            <table class="table">
               <tbody>
                  <tr>
                     <td>Title</td>
                     <td><input type="text" value="${eventClick.event.title}" class="form-control" id="editTitle"></td>
                  </tr>
                  <tr>
                     <td>Start Time</td>
                     <td><input type="datetime-local" value="${eventClick.event.start.toISOString().slice(0, 16)}" class="form-control" id="editStartTime"></td>
                  </tr>
               </tbody>
            </table>
         </div>`,
      showCancelButton: true,
      confirmButtonClass: "btn btn-danger",
      cancelButtonClass: "btn btn-primary",
      confirmButtonText: "Save Changes",
      cancelButtonText: "Cancel",
   }).then((result) => {
      if (result.value) {
         // Update the event properties with the edited values
         updateEventProperty("title", document.getElementById("editTitle").value);
         updateEventProperty("start", new Date(document.getElementById("editStartTime").value));
         
         // Update the calendar event with the new values
         eventClick.event.setProp("title", updatedEvent.title);
         eventClick.event.setStart(updatedEvent.start);
         
         try {
            // Use flatted.stringify to safely handle circular references
            const existingDataString = localStorage.getItem('event');
            const existingData = existingDataString ? JSON.parse(existingDataString) : [];
      
            // Add the new entry to the array
            existingData.push({
               title: updatedEvent.title,
               start: updatedEvent.start,
            });      
            // Store the updated array in local storage
            console.log(1,existingData);
            localStorage.setItem('event', JSON.stringify(existingData));
            Alert.fire("Saved!", "Your changes have been saved.", "success");
         } catch (error) {
            console.error('Error stringifying the object:', error);
         }
      }
   });
};

   

   render() {
      return (
         <div className="animated fadeIn demo-app">
            <Row>
               <Col lg={3}>
                  <Card>
                     
                     <Card.Body>
                        <h4 className="card-intro-title mb-0">Calendar</h4>
                        <div id="external-events" >
                           <p>Drag and drop your event or click in the calendar</p>
                           {this.state.events.map((event) => (
                              <div
                                 className={`fc-event external-event light btn-${event.style}`} data-class={`bg-${event.style}`}
                                 // className={`fc-event external-event light btn-primary`}
                                 title={event.title}
                                 data={event.id}
                                 key={event.id}
                              >
                                 <i className="fa fa-move" /><span>{event.title}</span>
                                 {/* {event.title} */}
                              </div>
                           ))}
                        </div>
                     </Card.Body>
                  </Card>
               </Col>

               <Col lg={9}>
                  <Card>
                     <Card.Body>
                        <div className="demo-app-calendar" id="mycalendartest">
                           <FullCalendar
                              defaultView="dayGridMonth"
                              headerToolbar={{
                                 start: "prev,next today",
                                 center: "title",
                                 end:"dayGridMonth,timeGridWeek,timeGridDay",
                              }}
                              rerenderDelay={10}
                              eventDurationEditable={false}
                              editable={true}
                              droppable={true}
                              plugins={[
                                 dayGridPlugin,
                                 timeGridPlugin,
                                 interactionPlugin,
                              ]}
                              ref={this.calendarComponentRef}
                              weekends={this.state.calendarWeekends}
                              events={this.state.calendarEvents}
                              eventDrop={this.drop}                              
                              eventReceive={this.eventReceive}
                              eventClick={this.eventClick}                              
                           />
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}

export default EventCalendar;
// import React, { Component } from "react";
// import { Col, Row, Card } from "react-bootstrap";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
// import Alert from "sweetalert2";

// class AddClass extends Component {
//    state = {
//       calendarEvents: [],
//       events: [
//          { title: "New Theme Release", id: "1", style: "primary" },
//          { title: "My Event", id: "2", style: "warning" },
//          { title: "Meet Manager", id: "3", style: "danger" },
//          { title: "Create New Theme", id: "4", style: "info" },
//          { title: "Project Launch ", id: "5", style: "dark" },
//          { title: "Meeting", id: "6", style: "secondary" },
//       ],
//    };

//    componentDidMount() {
//       this.loadEventsFromLocalStorage();

//       if (!this.draggableInitialized) {
//          let draggableEl = document.getElementById("external-events");
//          new Draggable(draggableEl, {
//              itemSelector: ".fc-event",
//              eventData: (eventEl) => {
//                  let title = eventEl.getAttribute("title");
//                  let id = eventEl.getAttribute("data");
//                  console.log(eventEl);
//                  return {
//                      title: title,
//                      id: id,
//                  };
//              },
//          });
//          this.draggableInitialized = true; // Set flag to indicate Draggable is initialized
//      }

//       // Periodically check for expired events
//       this.intervalId = setInterval(this.removeExpiredEvents, 60000);
//    }

//    componentWillUnmount() {
//       clearInterval(this.intervalId); // Clear the interval to avoid memory leaks
//    }

//    loadEventsFromLocalStorage = () => {
//       const existingDataString = localStorage.getItem("class");
//       const existingData = existingDataString ? JSON.parse(existingDataString) : [];
//       this.setState({
//          calendarEvents: [...this.state.calendarEvents, ...existingData],
//       });
//       // console.log(this.state.calendarEvents);
//    };

//    removeExpiredEvents = () => {
//       const currentTime = new Date();
//       const updatedEvents = this.state.calendarEvents.filter(
//          (event) => new Date(event.end) > currentTime
//       );

//       this.setState({ calendarEvents: updatedEvents });

//       try {
//          localStorage.setItem("class", JSON.stringify(updatedEvents));
//       } catch (error) {
//          console.error("Error stringifying the object:", error);
//       }
//    };

//    eventClick = (eventClick) => {
//       let updatedEvent = { ...eventClick.event };

//       const updateEventProperty = (property, value) => {
//          updatedEvent = {
//             ...updatedEvent,
//             [property]: value,
//          };
//       };

//       Alert.fire({
//          title: eventClick.event.title,
//          html: `
//             <div class="table-responsive">
//                <table class="table">
//                   <tbody>
//                      <tr>
//                         <td>Title</td>
//                         <td><input type="text" value="${eventClick.event.title}" class="form-control" id="editTitle"></td>
//                      </tr>
//                      <tr>
//                         <td>Start Time</td>
//                         <td><input type="datetime-local" value="${updatedEvent.start ? updatedEvent.start.toISOString().slice(0, -8) : ''}" class="form-control" id="editStartTime"></td>
//                      </tr>
//                      <tr>
//                         <td>End Time</td>
//                         <td><input type="datetime-local" value="${updatedEvent.end ? updatedEvent.end.toISOString().slice(0, -8) : ''}" class="form-control" id="editEndTime"></td>
//                      </tr>
//                   </tbody>
//                </table>
//             </div>`,
//          showCancelButton: true,
//          confirmButtonClass: "btn btn-danger",
//          cancelButtonClass: "btn btn-primary",
//          confirmButtonText: "Save Changes",
//          cancelButtonText: "Cancel",
//       }).then((result) => {
//          if (result.value) {
//             updateEventProperty("title", document.getElementById("editTitle").value);
//             updateEventProperty("start", new Date(document.getElementById("editStartTime").value));
//             updateEventProperty("end", new Date(document.getElementById("editEndTime").value));

//             eventClick.event.setProp("title", updatedEvent.title);
//             eventClick.event.setStart(updatedEvent.start);
//             eventClick.event.setEnd(updatedEvent.end);

//             try {
//                const existingDataString = localStorage.getItem('class');
//                const existingData = existingDataString ? JSON.parse(existingDataString) : [];

//                // Remove the event if it has passed
//                const currentTime = new Date();
//                const updatedEvents = existingData.filter(event => new Date(event.end) > currentTime);

//                updatedEvents.push({
//                   title: updatedEvent.title,
//                   start: updatedEvent.start,
//                   end: updatedEvent.end,
//                });
//                ///////////////////////////////////////////////////////////////////////////
//                localStorage.setItem('class', JSON.stringify(updatedEvents));
//                console.log(this.state.calendarEvents);
//                Alert.fire("Saved!", "Your changes have been saved.", "success");
//             } catch (error) {
//                console.error('Error stringifying the object:', error);
//             }
//          }
//       });
//    };

//    render() {
//       return (
//          <div className="animated fadeIn demo-app">
//             <Row>
//                <Col lg={3}>
//                   <Card>
//                      <Card.Body>
//                         <h4 className="card-intro-title mb-0">Calendar</h4>
//                         <div id="external-events">
//                            <p>Drag and drop your event or click in the calendar</p>
//                            {this.state.events.map((event) => (
//                               <div
//                                  className={`fc-event external-event light btn-${event.style}`} data-class={`bg-${event.style}`}
//                                  title={event.title}
//                                  data={event.id}
//                                  key={event.id}
//                               >
//                                  <i className="fa fa-move" /><span>{event.title}</span>
//                               </div>
//                            ))}
//                         </div>
//                      </Card.Body>
//                   </Card>
//                </Col>

//                <Col lg={9}>
//                   <Card>
//                      <Card.Body>
//                         <div className="demo-app-calendar" id="mycalendartest">
//                            <FullCalendar
//                               defaultView="dayGridMonth"
//                               headerToolbar={{
//                                  start: "prev,next today",
//                                  center: "title",
//                                  end: "dayGridMonth,timeGridWeek,timeGridDay",
//                               }}
//                               rerenderDelay={10}
//                               eventDurationEditable={false}
//                               editable={true}
//                               droppable={true}
//                               plugins={[
//                                  dayGridPlugin,
//                                  timeGridPlugin,
//                                  interactionPlugin,
//                               ]}
//                               weekends={this.state.calendarWeekends}
//                               events={this.state.calendarEvents}
//                               eventClick={this.eventClick}

//                            />      


//                         </div>
//                      </Card.Body>
//                   </Card>
//                </Col>
//             </Row>
//          </div>
//       );
//    }
// }

// export default AddClass;