
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const MaybeShowComp = ( { children } ) => {

    const location = useLocation();

    const [showComp, setShowComp] = useState(false);

    useEffect(() => {

        if (location.pathname === '/login' || location.pathname === '/signup') {
            
            setShowComp(false);
          
        } else {
        
            setShowComp(true);
        
        }

    }, [location])

  return (
    <div>
      { showComp && children }
    </div>
  )
}

export default MaybeShowComp
