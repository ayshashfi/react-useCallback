import React from 'react'


console.log('Rendering title')
function Title() {
    
  return (
    <h2>
        useCallback hook
    </h2>
  )
}

export default React.memo(Title)