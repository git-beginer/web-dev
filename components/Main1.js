import TextContent from "./TextContent";
import TelephoneForm from "./TelephoneForm";

const Main1 = ({textData}) => {
    return (
        <div className="flex flex-wrap p-8">
            <div className="w-full md:basis-3/5 ">
                <TextContent data={textData}/>
            </div>
            <div className="w-full md:basis-2/5 flex items-center p-5">
                <TelephoneForm />
            </div>
        </div>
    )
}

export default Main1;