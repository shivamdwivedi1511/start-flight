import React from 'react';
import { head, join } from 'lodash';

const Flight = ({item}) => {
    const isLandedSuccessFul = (i) => {
        return head(i?.rocket?.first_stage?.cores)?.land_success ? 'true' : 'false';
    }
    return(
        <div className="flight-container-item">
            <div className="flight-container-item-image">
                <img alt={item.mission_name} src={item.links.mission_patch_small} />
            </div>
            <div className="flight-container-item-info">
                <h3>{`${item.mission_name} #${item.flight_number}`}</h3>
                <p><span>Mission Ids:</span>{join(item.mission_id,', ') || '-'}</p>
                <p><span>Launch Year:</span>{item.launch_year}</p>
                <p><span>Successful Launch:</span>{item.launch_success ? 'true' : 'false'}</p>
                <p><span>Successful Landing:</span>{isLandedSuccessFul(item)}</p>
            </div>
        </div>
    )
};

export default Flight;
