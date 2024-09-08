import React, { useState, useRef, useEffect } from "react";
import "./advantages.css";
import advantages from "../../mock/advantages";

const Advantages = () => {
    const [visibleAdvantage, setVisibleAdvantage] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAdvantage = (id: number) => {
        if (visibleAdvantage === id) {
            setVisibleAdvantage(null);
        } else {
            setVisibleAdvantage(id);
        }
    };

    useEffect(() => {
        // Анимируем изменение высоты
        contentRefs.current.forEach((content, index) => {
            if (content) {
                if (visibleAdvantage === index) {
                    // Устанавливаем maxHeight в высоту контента
                    content.style.maxHeight = `${content.scrollHeight}px`;
                } else {
                    // Скрываем контент
                    content.style.maxHeight = '0';
                }
            }
        });
    }, [visibleAdvantage]);

    return (
        <div className='advantages-block'>
            <h2 className='block-title'>ПРЕИМУЩЕСТВА</h2>
            <div className='advantages'>
                {advantages.map((advantage, index) => (
                    <div className='advantage' key={advantage.id}>
                        <div className='adv-head' onClick={() => toggleAdvantage(index)}>
                            <div className='adv-name'>{advantage.name}</div>
                            <div className='adv-btn'>
                                {visibleAdvantage === index ? '-' : '+'}
                            </div>
                        </div>
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className='adv-text'
                        >
                            {advantage.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Advantages;
