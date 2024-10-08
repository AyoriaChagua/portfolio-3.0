import { useTheme } from "../../context/ThemeContext";
import { useEmail } from "../../hooks/use-email";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function ContactMe() {
    const {
        email,
        handleSubmit,
        message,
        name,
        success,
        setEmail,
        setMessage,
        setName,
        isLoading
    } = useEmail();
    const {theme} = useTheme();
    return (
        <div className="my-8">
            {success && 
            <div className={`success-checkmark ${theme === "dark" && "dark"}`}>
                <div className={`check-icon ${theme === "dark" && "dark"}`}>
                    <span className={`icon-line line-tip ${theme === "dark" && "dark"}`} />
                    <span className={`icon-line line-long ${theme === "dark" && "dark"}`} />
                    <div className={`icon-circle ${theme === "dark" && "dark"}`} />
                    <div className={`icon-fix ${theme === "dark" && "dark"}`} />
                </div>
            </div>}
            {isLoading && <div className="flex flex-row w-full justify-center mb-5"><div className="loader" /></div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <CustomInput value={name} onChange={setName} id="name" />
                </div>
                <div>
                    <CustomInput value={email} onChange={setEmail} id="email" required />
                </div>
                <div>
                    <textarea
                        id="message"
                        value={message}
                        placeholder="Your message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-indigo-950 dark:border-indigo-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></textarea>
                </div>
                <CustomButton icon="email" text="Send" buttonType="submit" size="large" />
            </form>
            <div className="mt-8 flex flex-col md:flex-row justify-between">
                <div className="p-5 flex flex-col gap-5 justify-center items-center">
                    <FaLinkedin color="#2D86FF" size={30} />
                    <span className="text-md dark:text-white text-indigo-800">LinkedIn</span>
                    <span className="text-md dark:text-white text-indigo-800">Ayoria Chagua</span>
                </div>
                <div className="p-5 flex flex-col gap-5 justify-center items-center">
                    <MdEmail color="#702DFF" size={30} />
                    <span className="text-md dark:text-white text-indigo-800">Email</span>
                    <span className="text-md dark:text-white text-indigo-800">ayoriachagua@gmail.com</span>
                </div>
                <div className="p-5 flex flex-col gap-5 justify-center items-center">
                    <FaPhoneAlt color="#B615EE" size={25} />
                    <span className="text-md dark:text-white text-indigo-800">Phone</span>
                    <span className="text-md dark:text-white text-indigo-800">+51 933 374 956</span>
                </div>
            </div>
        </div>
    );
};

