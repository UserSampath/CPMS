import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ViewCarPark(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>View Car Park Details</h4>
        <div>
          <div className=" row">
            {" "}
            <div className=" col-4 fw-bold ">Name :</div>
            <div className=" col-5">
              {props.selectedCarPark.name_of_the_park}
            </div>
          </div>{" "}
          <div className=" row">
            {" "}
            <div className=" col-4 fw-bold ">Address :</div>
            <div className=" col-5">{props.selectedCarPark.address}</div>
          </div>{" "}
          <div className=" row">
            {" "}
            <div className=" col-4 fw-bold ">Latitude :</div>
            <div className=" col-5">{props.selectedCarPark.latitude}</div>
          </div>{" "}
          <div className=" row">
            {" "}
            <div className=" col-4 fw-bold ">Longitude :</div>
            <div className=" col-5">{props.selectedCarPark.longitude}</div>
          </div>{" "}
          <div className=" row">
            {" "}
            <div className=" col-4 fw-bold ">Number of Spots :</div>
            <div className=" col-5">
              {props.selectedCarPark.number_of_spots}
            </div>
          </div>{" "}
          <div className=" row">
            {" "}
            <div className=" col-4 fw-bold ">Spot Size :</div>
            <div className=" col-5">{props.selectedCarPark.spot_size}</div>
          </div>{" "}
          <div className=" row">
            {" "}
            <div className=" col-4 fw-bold ">Facilities :</div>
            <div className=" col-5">{props.selectedCarPark.facilities}</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewCarPark
