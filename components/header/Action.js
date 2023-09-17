import Link from "next/link";
const Action = ({ setModalOpen }) => {
    const onNewTransaction = () => {
        setModalOpen(true)
    }

    return (
        <div>
            <div className="w-full rounded-lg bg-[#16d542] py-3 my-2 hover:bg-opacity-70 text-center  text-white">
             <Link className=" font-medium pl-6 " href="/">
                Home</Link> 
                </div>

            <button onClick={onNewTransaction} className="w-full rounded-lg bg-[#16d542] py-3 hover:bg-opacity-70">
                <span className="font-medium text-white">PAY</span>
            </button>
        </div>
    )
}

export default Action
