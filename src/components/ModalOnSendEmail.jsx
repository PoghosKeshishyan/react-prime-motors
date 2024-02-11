import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export function ModalOnSendEmail({ contactsLabel, modalOnSuccess, modalOnError, setModalOnError }) {
    return (
        <>
            {
                modalOnSuccess && <div className="flex gap-3 px-[20px] py-[10px] items-center fixed top-[18%] right-[1%] bg-green-400 text-center text-white rounded-[10px] shadow-lg">
                    <FontAwesomeIcon icon={faCircleCheck} className='text-[1.3rem]' />
                    <h3 className='text-[1.3rem]'>{contactsLabel.form_message_success}</h3>
                </div>
            }

            {
                modalOnError && <div className="flex gap-3 px-[20px] py-[10px] items-center fixed top-[18%] right-[1%] bg-red-500 text-center text-white rounded-[10px] shadow-lg">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => setModalOnError(false)}
                        className='text-[1.3rem] cursor-pointer'
                    />

                    <h3>{contactsLabel.form_message_failed}</h3>
                </div>
            }
        </>
    )
}
