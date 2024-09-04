import "./questions.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import InputMask from 'react-input-mask';

type FormData = {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    files: FileList;
};
const Questions = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const token = process.env.REACT_APP_TELEGRAM_TOKEN;
    const onSubmit = async (data: FormData) => {
        const formData = new FormData();
        formData.append("Имя", data.name);
        formData.append("Телефон", data.phone);
        formData.append("e-mail", data.email);
        formData.append("Тема обращения", data.subject);
        formData.append("Текст сообщения", data.message);
        for (let i = 0; i < data.files.length; i++) {
            formData.append("files", data.files[i]);
        }
        try {
            await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: "-4227583515",
                text: `💻 Заявка на разработку:\nИмя: ${data.name}\nТелефон: ${data.phone}\ne-mail: ${data.email}\nТема обращения: ${data.subject}\nТекст сообщения: ${data.message}`
            });

            for (let i = 0; i < selectedFiles.length; i++) {
                const fileData = new FormData();
                fileData.append("chat_id", "-4227583515");
                fileData.append("document", selectedFiles[i]);
                await axios.post(`https://api.telegram.org/bot${token}/sendDocument`, fileData);
            }

            reset();
            setSelectedFiles([]);
            alert("Заявка успешно отправлена!");
        } catch (error) {
            console.error("Ошибка отправки:", error);
            alert("Ошибка отправки сообщения!");
        }
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const validTypes = ["image/jpeg", "image/png", "application/msword", "application/vnd.ms-excel", "application/pdf"];
            const maxSize = 24 * 1024 * 1024; // 24 MB in bytes
            let totalSize = 0;
            const validFiles = files.filter(file => {
                totalSize += file.size;
                return validTypes.includes(file.type) && totalSize <= maxSize;
            });
            if (validFiles.length > 3) {
                alert("Максимум 3 файла.");
                setSelectedFiles(validFiles.slice(0, 3));
            } else {
                setSelectedFiles(validFiles);
            }
        }
    };
    const handleTelegramClick = () => {
        window.open("https://t.me/ooo_vebrazrabotka", "_blank");
    };
    const handlePhoneClick = () => {
        window.location.href = "tel:+79956683584";
    };
    return (
        <div className="questions-block">
            <h2 className="block-title" id='questions'>ОСТАЛИСЬ ВОПРОСЫ?</h2>
            <p className="consultation-title">Закажите <b style={{ color: "#5CC3FD" }}>бесплатную</b> консультацию!</p>
            <p className="consultation-text" >
                Проконсультируем по разработке индивидуальных
                <b style={{ color: "#5CC3FD" }}> веб-сервисов, мобильных приложений, ERP/CRM для вашего бизнеса</b>
                , сразу, на первом созвоне.
                <p>Бесплатно и без обязательств.</p>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <input className="form-input" placeholder="Как к вам обращаться?" {...register("name", { required: true })} />
                {errors.name && <span className="error-message">Укажите ваше имя</span>}
                <InputMask className="form-input" mask="+7 (999) 999-99-99" placeholder="+7 (000) 000-00-00" id="phone-number" {...register("phone", { required: true, pattern: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/ })} />
                {errors.phone && <span className="error-message">Укажите корректный номер телефона</span>}
                <input
                    className="form-input"
                    placeholder="Ваша почта"
                    type="email"
                    {...register("email", { required: true })}
                />
                {errors.email && <span className="error-message">Укажите адрес электронной почты</span>}
                <input
                    className="form-input"
                    placeholder="Тема обращения"
                    {...register("subject", { required: true })}
                />
                {errors.subject && <span className="error-message">Укажите тему вашего обращения</span>}
                <textarea
                    className="form-input message"
                    placeholder="Сообщение"
                    maxLength={500}
                    {...register("message", { required: true })}
                ></textarea>
                {errors.message && <span className="error-message">Расскажите о вашей идее минимум в нескольких предложениях</span>}
                <p className="ps-title">**О чем писать в сообщении</p>
                <p className="ps-text">Расскажите, чем занимается ваша компания, какие задачи должен решать цифровой продукт, на какие сроки и бюджет рассчитываете</p>
                <div className="file-input-wrapper">
                    <input
                        type="file"
                        className="file-input"
                        id="file-input"
                        {...register("files")}
                        multiple
                        onChange={handleFileChange}
                    />
                    <label htmlFor="file-input" className="file-input-label">Прикрепить файл</label>
                    <div className="selected-files">
                        {selectedFiles.map((file, index) => (
                            <div key={index} className="file-name">{file.name}</div>
                        ))}
                    </div>
                </div>
                <button type="submit" className="submit-button">
                    <p>Отправить</p>
                    <img src='/Pictures/arrow-diag.svg' alt="Arrow"/>
                {/*    ../public/Pictures/arrow-diag.svg*/}
                </button>
                <p className="personal-data">
                    При нажатии на кнопку "Отправить", я даю согласие на обработку <a href="https://vk.com/e_myagkov">Персональных данных.</a>
                </p>
            </form>
            <p className="consultation-title">
                Вы можете задать
                <b style={{ color: "#5CC3FD" }}> любой вопрос </b>
                в мессенджере или <b style={{ color: "#5CC3FD" }}> по телефону</b>
            </p>
            <div className="connection">
                <div className="connection-tg" onClick={handleTelegramClick}>
                    Связаться через <b style={{ color: "#5CC3FD" }}>Telegram</b>
                </div>
                <div className="connection-phone" onClick={handlePhoneClick}>
                    <p className="phone">+7 (995) 668-35-84</p>
                    <p className="callback">Заказать <b style={{ color: "#5CC3FD" }}>обратный звонок</b></p>
                </div>
            </div>
        </div>
    );
};

export default Questions;
