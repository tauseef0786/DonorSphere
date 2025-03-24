

import { useNavigate } from 'react-router-dom';
import { FaHeart, FaBook, FaMusic, FaTree, FaHandHoldingHeart } from 'react-icons/fa';

const categoryIcons = {
    "Health": <FaHeart className='text-red-500 text-xl' />, 
    "Education": <FaBook className='text-blue-500 text-xl' />, 
    "Music": <FaMusic className='text-purple-500 text-xl' />, 
    "Environment": <FaTree className='text-green-500 text-xl' />, 
    "Charity": <FaHandHoldingHeart className='text-yellow-500 text-xl' />, 
};

export const CampaignCard = ({ campaign }) => {
    const navigate = useNavigate();
    const { title, description, goal, currentAmount, images, category } = campaign;
    
    return ( 
        <div onClick={() => navigate(`/campaigns/${campaign._id}`)} className="p-6 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-xl transition-all w-[400px]">
            <div className="w-full h-56 overflow-hidden rounded-t-lg">
                <img src={images[0]} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold truncate w-[70%]">{title}</h3>
                    <span>{categoryIcons[category] || <FaHandHoldingHeart className='text-gray-500 text-xl' />}</span>
                </div>
                <p className="text-gray-600 text-sm mt-1 truncate w-full">{category}</p>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{description}</p>
            </div>
            <div className="px-4 pb-4">
                <div className="relative w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full" style={{ width: `${(currentAmount / goal) * 100}%` }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <p>Goal: ${goal}</p>
                    <p>Raised: ${currentAmount}</p>
                </div>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-b-lg font-semibold hover:bg-green-600 transition">Donate</button>
        </div>
    );
}
