const tipCollection = [
    {
        tip: "Clean out tank once a week"
    },
    {
        tip: "Keep other pets away from tank"
    },
    {
        tip: "Do not tap glass"
    },
    
];

export const useTip = () => {
    return tipCollection.slice();
};