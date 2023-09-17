import { format } from 'date-fns'

const TransactionItem = ({ id, to, description, transactionDate, amount, toggleTransactionDetailModal }) => {
    const onItemClick = () => {
        toggleTransactionDetailModal(true, id)
    }

    return (
        <div onClick={onItemClick} className="grid gap-4 cursor-pointer grid-cols-8 items-center p-4 hover:bg-gray-800 border-black">
            <div className="col-span-2 flex items-center space-x-4 ">
                <img className="h-8 w-8 rounded-full object-cover" src={to.avatar} alt="" />
                <p className="truncate font-bold text-slate-100 text-sm">{to.name}</p>
            </div>

            <p className="col-span-4 font-bold text-slate-100 text-sm">{description}</p>
            <p className="col-span-1 font-bold text-slate-100 text-sm ">{format(new Date(transactionDate), 'MMM d')}</p>
            <p className="col-span-1 font-bold text-slate-100 text-right text-sm ">{amount} SOL</p>
        
        </div>
    )
}

export default TransactionItem
