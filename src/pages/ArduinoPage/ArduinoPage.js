import arduinoLabels from "../../assets/images/arduino-labels.png";
import arduinoVideo from "../../assets/arduino-vid.mp4";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import "./ArduinoPage.scss";

function ArduinoPage() {
  return (
    <div className="arduino">
      <div className="arduino__headerWrapper">
        <h1 className="arduino__title">Arduino</h1>
        <DropdownMenu />
      </div>

      <div className="arduino__container">
        <div className="arduino__writingContainer">
          <div className="arduino__writingWrapper">
            <div className="arduino__overviewWrapper">
              <h2 className="arduino__subheader">Overview</h2>
              <div className="arduino__card">
                <p>
                  Fire is a significant threat, and despite government
                  regulations, fire incidents are on the rise. To address this,
                  I developed a portable fire alarm system. It ensures safety
                  during daily travels and empowers individuals to control their
                  safety with a cost-effective 5V battery-powered solution.
                </p>
              </div>
            </div>

            <div className="arduino__descriptionWrapper">
              {/* <p className="arduino__descriptionSubheader">Description</p> */}
              <div className="arduino__card">
                <p>
                  Figure 1 showcases four inputs: temperature and light sensors
                  on Arduino 1 (transmitter), a push button, and a
                  potentiometer. The push button acts as an on/off switch, and
                  the potentiometer controls output speed.
                </p>
                <br></br>
                <p>
                  The transmitter measures room temperature and light,
                  communicating via serial port. To enhance fire detection, both
                  sensors must exceed thresholds, triggering alarms and
                  messages.
                </p>
                <br />
                <p>
                  Outputs (LCD, DC motor, piezo buzzer, and LED) activate when
                  room temperature exceeds 57 degrees and light surpasses 1000
                  lux. Duration is adjustable with the potentiometer for
                  urgency.
                </p>
                <br />
                <p>
                  Below thresholds, the system displays data and a green LED
                  when no fire is detected, ensuring robustness against false
                  alarms.
                </p>
              </div>
            </div>
          </div>
          <div className="arduino__pictureWrapper">
            <div className="arduino__figure">
              {/* <p>Figure 1</p> */}
              <img
                src={arduinoLabels}
                alt="labels of arduino"
                className="arduino__labelledPic"
              />
            </div>
            <div className="arduino__videoWrapper">
              {/* <p className="arduino__descriptionSubheader">Video</p> */}
              <video controls className="arduino__video">
                <source src={arduinoVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArduinoPage;
