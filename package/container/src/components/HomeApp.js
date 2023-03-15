import { mount } from 'home/HomeApp';
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

function HomeApp() {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(()=> {
        const { onParentNavigate } = mount(ref.current,{
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } = history.location;

                if(pathname !== nextPathName){
                    history.push(nextPathName);
                }
            },
        });

       history.listen(onParentNavigate);
    }, [])
    
    return <div ref={ref} />
}

export default HomeApp;