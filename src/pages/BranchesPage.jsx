import { branches_page_label_data, branches_data } from '../databace';
import { useState, useEffect } from 'react';
import { BranchesContent } from '../components/BranchesContent';

export function BranchesPage() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [branchesLabel, setBranchesLabel] = useState([]);
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
        loadingData(currentLanguage);
    }, [currentLanguage])

    const loadingData = (currentLanguage) => {
        const filteredBranchesLabel = branches_page_label_data.filter(item => item.lang === currentLanguage);
        setBranchesLabel(filteredBranchesLabel[0]);

        const filteredBranches = branches_data.filter(item => item.lang === currentLanguage);
        setBranches(filteredBranches);
    }

    return (
        <div>
            <BranchesContent branchesLabel={branchesLabel} branches={branches} />
        </div>
    );
}

