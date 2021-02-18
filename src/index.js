import React, {useState} from 'react'
import { Button } from "react-bootstrap";

import styles from './styles.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

export const ConfirmButton = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <React.Fragment>
      {!showConfirm && (
        <Button
          size={props.size || "md"}
          onClick={() => setShowConfirm(true)}
          variant={props.variant || "primary"}
        >
          {props.children}
        </Button>
      )}
      {showConfirm && (
        <div>
          <Button
            size={props.size || "md"}
            variant="danger"
            onClick={() => {
              setShowConfirm(false);
              if(props.onConfirm) {
                props.onConfirm();
              }
            }}
          >
            Confirm
          </Button>
          <Button
            size={props.size || "md"}
            onClick={() => {
              setShowConfirm(false);
              if(props.onCancel) {
                props.onCancel();
              }
            }}
          >
            Cancel
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};
