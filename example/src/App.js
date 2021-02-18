import React, {useState} from 'react'

import { ConfirmButton } from 'react-confirm-button'
import 'react-confirm-button/dist/index.css'

const App = () => {

  const [confirmed, setConfirmed] = useState(false)

  return <React.Fragment>
    <ConfirmButton
      size="lg"
      variant="warning"
      onConfirm={() => setConfirmed(true)}
      onCancel={() => setConfirmed(false)}
    >
    do this
    </ConfirmButton>
    {confirmed && <div>Confirmed!</div>}
  </React.Fragment>
}

export default App
