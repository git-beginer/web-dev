const TextContent = ({ data }) => {
    return (
        <div className="p-8">
            <h2 className="font-avenir font-black text-sky-900 text-2xl leading-8 xl:leading-13 xl:text-4xl">
                {data.title}
            </h2>
            {data.content.map((text, i) =>
                <p key={'article' + i} className="font-avenir leading-6 text-base font-normal xl:text-2xl xl:leading-9">
                    {text}
                </p>
            )}
        </div>
    )
}

export default TextContent;