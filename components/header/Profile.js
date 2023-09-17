import { truncate } from "../../utils/string"
const Profile = ({ setModalOpen, avatar, userAddress, setQrCode }) => {
    const onProfileOpen = () => {
        setModalOpen(true)
        setQrCode(false)
    }
    return (
        <div onClick={onProfileOpen} className="flex cursor-pointer flex-col items-center space-y-3">
            <div className="h-16 w-16 rounded-full border-2 border-white">
                <img className="h-full w-full rounded-full object-cover" src={avatar} />
            </div>

            <div className="flex flex-col items-center space-y-1">
                <p className="font-semibold text-white">{truncate(userAddress)}</p>

                <p className="text-sm font-light italic text-gray-100">${truncate(userAddress)}</p>
                <div className="bg-white rounded-lg px-3 py-2 my-1">
                <p className="text-2xl font-bold text-[#4346a3] space-y-3">QR</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
