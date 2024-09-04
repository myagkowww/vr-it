import React, { useState } from "react";
import "./advantages.css";
import advantages from "../../mock/advantages";

const Advantages = () => {
    const [visibleAdvantage, setVisibleAdvantage] = useState<number | null>(null);

    const toggleAdvantage = (id: number) => {
        // Если id совпадает с текущим видимым, скрываем его, иначе показываем
        if (visibleAdvantage === id) {
            setVisibleAdvantage(null);
        } else {
            setVisibleAdvantage(id);
        }
    };

    return (
        <div className='advantages-block'>
            <h2 className='block-title'>ПРЕИМУЩЕСТВА</h2>
            <div className='advantages'>
                {advantages.map(advantage => (
                    <div className='advantage' key={advantage.id}>
                        <div className='adv-head' onClick={() => toggleAdvantage(advantage.id)}>
                            <div className='adv-name'>{advantage.name}</div>
                            <div className='adv-btn'>
                                {visibleAdvantage === advantage.id ? '-' : '+'}
                            </div>
                        </div>
                        {visibleAdvantage === advantage.id && (
                            <div className='adv-text'>{advantage.text}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Advantages;
