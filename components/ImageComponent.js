export const ImageComponent = ({ imgUrl, children }) => {
    return (
        <div className='w-full h-full flex justify-start items-center'
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            }}
        >{children}</div>
    )
}