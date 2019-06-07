import React from 'react'
import YtringData from '../../Components/Ytringsfrihet/YtringData'
import YtringItem from '../../Components/Ytringsfrihet/ytringItem'



function YtringSelection(props) {

    const Items = YtringData.map(item => <YtringItem key={item.id} item={item} />)
      return (
         <div className={props.ytring ? "ytringSelection" : "ytringSelectionNone"}>
            {Items}
         </div>   
        )
    }
export default YtringSelection