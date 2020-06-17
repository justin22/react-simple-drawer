import React, { useState } from 'react'
import Drawer from 'react-simple-drawer'
import 'react-simple-drawer/dist/index.css'

const placements = ['left', 'right', 'bottom', 'top']

const App = () => {

  const [placement, setPlacememt] = useState('right')
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column"
      }}
    >
      <div>
        {
          placements.map((value) => {
            return (
              <button key={value} onClick={() => setPlacememt(value)}>
                {value}
              </button>
            )
          })
        }
      </div>
      <Drawer
        cta={
          <button> open drawer on {placement} </button>
        }
        maskable={true}
        placement={placement}
        open={false}
        closeOnMaskClick={true}
      >
        <p>
          Lorem Ipssum
        </p>
      </Drawer>
    </div>
  )
}

export default App
