import { useState } from "react";
import data from "../../data";

const Accordion = () => {
    const [selected, setSelected] = useState<string |null>(null);
    
    const onTitleClick = (id: string) => {
        const newSelected = selected === id? null: id;
        setSelected(newSelected);
    }

    return (
        <div className="container">
            <div className="accordion">
                {
                    data && data.length > 0? (
                        data.map(dataItem => (
                            <div className="item">
                                <div className="title" onClick={() => onTitleClick(dataItem.id)}>
                                    <h3> {dataItem.question} </h3>
                                    <span> + </span>
                                </div>
                                {
                                    selected === dataItem.id? (
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