import { useState } from "react";
import data from "../../data";
import "./styles.scss";

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
                            <div className="item" key={dataItem.id}>
                                <div className="title" onClick={() => onTitleClick(dataItem.id)}>
                                    <span className={selected === dataItem.id? "bottom-arrow" : "right-arrow"}></span>
                                    <h3> {dataItem.question} </h3>
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