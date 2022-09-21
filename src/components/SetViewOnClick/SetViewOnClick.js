import { useMap } from 'react-leaflet/hooks'


const SetViewOnClick = ({ coords }) => {
    const map = useMap()
    map.setView(coords, map.getZoom());
    
    return null;
}

export default SetViewOnClick;