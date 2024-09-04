import React, { useState } from "react";
import "./vacancies.css";
import vacancies from "../../mock/vacancies";
import { useForm } from "react-hook-form";
import axios from "axios";
import InputMask from "react-input-mask";
const Vacancies = () => {
    const [showAll, setShowAll] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVacancy, setSelectedVacancy] = useState<string | null>(null);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    const openModal = ({ vacancyName }: { vacancyName: string }) => {
        setSelectedVacancy(vacancyName);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedVacancy(null);
    };
    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLDivElement).className === 'modal') {
            closeModal();
        }
    };
    type FormData = {
        name: string;
        phone: string;
        post: string;
        username: string;
    };
    const token = process.env.REACT_APP_TELEGRAM_TOKEN;
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        try {
            await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: "-4227583515",
                text: `👨 ‍Отклик на вакансию '${selectedVacancy}': \nИмя: ${data.name}\nТелефон: ${data.phone}\nИмя telegram: @${data.username}`
            });
            alert("Ваш отклик был успешно отправлен!");
            reset();
            closeModal();
        } catch (error) {
            alert("Ошибка при отправке отклика. Попробуйте еще раз.");
        }
    };
    return (
        <div className='vacancies-block'>
            <h2 className='block-title'>ВАКАНСИИ</h2>
            {vacancies.slice(0, showAll ? vacancies.length : 1).map(vacancy => (
                <div key={vacancy.id} className='vacancy'>
                    <p className='vacancy-name'>{vacancy.name}</p>
                    {vacancy.stack && (
                        <p className='vacancy-stack'>{vacancy.stack}</p>
                    )}
                    <button
                        className='vacancy-button'
                        onClick={() => openModal({ vacancyName: vacancy.name })}
                    >
                        Присоединиться к команде
                    </button>
                </div>
            ))}
            <button className='toggle-button' onClick={toggleShowAll}>
                {showAll ? "Свернуть" : "Подробнее"}
            </button>

            {isModalOpen && (
                <div className='modal' onClick={handleModalClick}>
                    <div className='modal-content'>
                        <span className='close-button' onClick={closeModal}>&times;</span>
                        <p className='vacancy-modal-title'>Отклик на вакансию '{selectedVacancy}'</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                className="vacancy-form-input"
                                placeholder="Ваше имя"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="error-message">Пожалуйста, введите ваше имя</span>}

                            <InputMask
                                className="vacancy-form-input"
                                mask="+7 (999) 999-99-99" placeholder="+7 (000) 000-00-00"
                                {...register("phone", { required: true })}
                            />
                            {errors.phone && <span className="error-message">Пожалуйста, введите ваш номер телефона</span>}
                            <input
                                type="text"
                                className="vacancy-form-input"
                                placeholder="Ваш Telegram username (без @)"
                                {...register("username", { required: true })}
                            />
                            <input
                                type="hidden"
                                value={selectedVacancy || ""}
                                {...register("post", { required: true })}
                            />

                            <button type="submit" className="vacancy-submit-button">Отправить</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Vacancies;
