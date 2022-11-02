import TelephoneForm from "./TelephoneForm"

export const CallbackBrush = () => {
    return (
        <div className='w-full h-fit sm:h-96 md:h-551 flex justify-start items-center'
            style={{
                backgroundImage: `url(images/callback_brush.jpg)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="basis-full sm:basis-1/2">
                <TelephoneForm />
            </div>
        </div>
    )
}