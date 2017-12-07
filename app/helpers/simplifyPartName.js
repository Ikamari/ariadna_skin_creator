//React
import React from 'react';

const simplifyPartName = (partName) => {
    return partName.includes("left-") ? partName.slice(5) : partName.includes("right-") ? partName.slice(6) : partName;
};

export default simplifyPartName;