import { useMemo, useState } from 'react'
import TransactionDetailModal from './TransactionDetailModal'
import TransactionItem from './TransactionItem'

const TransactionsList = ({ connected, transactions }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [currentTransactionID, setCurrentTransactionID] = useState(null)
    const currentTransaction = useMemo(() => transactions.find((transaction) => transaction.id === currentTransactionID), [currentTransactionID])

    const toggleTransactionDetailModal = (value, transactionID) => {
        setCurrentTransactionID(transactionID)
        setModalOpen(value)
    }

    return (
        <div>
            <div className="bg-[#19232e] pb-4 pt-10 mb-8" >
                <p className="mx-auto max-w-3xl px-10 text-5xl font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 xl:px-0">Transactions</p>
            </div>
            <div className="mx-auto max-w-3xl divide-y bg-[#837fac7e] px-10 xl:px-0 rounded-xl">
                {connected ? (
                    <>
                        {transactions.map(({ id, to, amount, description, transactionDate }) => (
                            <TransactionItem key={id} id={id} to={to} description={description} transactionDate={transactionDate} amount={amount} toggleTransactionDetailModal={toggleTransactionDetailModal} />
                        ))}

                        <TransactionDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} currentTransaction={currentTransaction} />
                    </>
                ) : (
                    <div className="flex items-center justify-center pt-20">
                        <p className="text-2xl font-medium">Please connect your wallet.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TransactionsList
