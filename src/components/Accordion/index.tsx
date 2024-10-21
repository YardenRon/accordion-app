import { useState } from "react";
import data from "../../data";
import "./styles.scss";

const Accordion = () => {
    const [selected, setSelected] = useState<string |null>(null);
    const [isMultiSelectiionEnabled, setIsMultiSelectiionEnabled] = useState(false);
    const [multiSelected, setMultiSelected] = useState<string[]>([]);
    
    const onTitleClick = (id: string) => {
        if (isMultiSelectiionEnabled) {
            handleMutliSelection(id);
        } else {
            handleSingleSelection(id);
        }
    };

    const handleSingleSelection = (id: string) => {
        const newSelected = selected === id? null: id;
        setSelected(newSelected);
    };

    const handleMutliSelection = (id: string) => {
        const multiSelectedCopy = [...multiSelected];
        const index = multiSelected.indexOf(id);
        if (index < 0) {
            multiSelectedCopy.push(id);
        } else {
            multiSelectedCopy.splice(index, 1);
        }

        setMultiSelected(multiSelectedCopy);
    };

    const onMultiSelectionClick = () => {
        if (isMultiSelectiionEnabled) {
            setMultiSelected([]);
        } else {
            setSelected(null);
        }

        setIsMultiSelectiionEnabled(!isMultiSelectiionEnabled);
    };

    const isItemSelected = (id: string) => selected === id || multiSelected.indexOf(id) >= 0;

    return (
        <div className="container">
            <button onClick={onMultiSelectionClick}>{isMultiSelectiionEnabled? "Disable Multi Selection" : "Enable Multi Selection"}</button>
            <div className="accordion">
                {
                    data && data.length > 0? (
                        data.map(dataItem => (
                            <div className="item" key={dataItem.id}>
                                <div className="title" onClick={() => onTitleClick(dataItem.id)}>
                                    <span className={isItemSelected(dataItem.id)? "bottom-arrow" : "right-arrow"}></span>
                                    <h3> {dataItem.question} </h3>
                                </div>
                                {
                                    isItemSelected(dataItem.id)? (
                                        <div className="content">
                                            {dataItem.answer}
                                        </div>
                                    ) : null
                                }
                            </div>
                        ))
                    ) : (
                        <span> No data found </span>
                    )
                }
            </div>
        </div>
    );
};

export default Accordion;