import { mission_page_label_data, mission_data } from '../databace';
import { useState, useEffect } from 'react';
import { MissionContent } from '../components/MissionContent';

export function MissionPage() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [missionLabel, setMissionLabel] = useState([]);
    const [mission, setMission] = useState([]);

    useEffect(() => {        
        setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
        loadingData(currentLanguage);
    }, [currentLanguage])

    const loadingData = (currentLanguage) => {
        const filteredMissionLabel = mission_page_label_data.filter(item => item.lang === currentLanguage);
        setMissionLabel(filteredMissionLabel[0]);

        const filteredMission = mission_data.filter(item => item.lang === currentLanguage);
        setMission(filteredMission);
    }

    return (
        <div>
            <MissionContent missionLabel={missionLabel} mission={mission} />
        </div>
    );
}

