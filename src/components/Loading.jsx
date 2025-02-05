import { FidgetSpinner } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="grid place-items-center h-screen">
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}}
                wrapperClass="fidget-spinner-wrapper"
            />
        </div>
    )
}

export default Loading;