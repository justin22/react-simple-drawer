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
              <button 
                key={value} 
                onClick={() => setPlacememt(value)} 
                className={`placement-btn ${placement === value ? 'active' : ''}`}
              >
                {value}
              </button>
            )
          })
        }
      </div>
      <Drawer
        cta={
          <button className="open-drawer-button"> open drawer on {placement} </button>
        }
        maskable={true}
        placement={placement}
        open={false}
        closeOnMaskClick={true}
        closable={true}
        closeIcon={<span> Close Drawer </span>}
      >
        <h1>Drawer</h1>
        <p> Simple react drawer </p>
      </Drawer>
    </div>
  )
}

export default App
