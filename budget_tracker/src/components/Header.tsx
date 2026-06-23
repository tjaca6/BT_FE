type Props = {
    totalBudget: number;
    spent: number;
    income: number
}

export default function Header({ totalBudget, spent, income}: Props) {
    return (
        <div className="bg-gray-300 p-6 text-black">
            <div className="flex justify-between items-end">
                <div>
                    <p className="text-md font-bold text-gray-700">Budget</p>
                    <p className="text-2xl font-bold">{totalBudget}€</p>
                </div>
                <div>
                    <p className="text-md font-bold text-gray-700">Spent</p>
                    <p className="text-2xl font-bold text-red-600">{spent}€</p>
                </div>
                <div>
                    <p className="text-md font-bold text-gray-700">Remaining</p>
                    <p className={`text-2xl font-bold text-green-600 ${totalBudget - spent < 0 ? 'text-red-600' : ''}`}>
                        {Math.max(0, totalBudget - spent)}€
                    </p>
                </div>
                <div>
                    <p className="text-md font-bold text-gray-700">Income</p>
                    <p className="text-2xl font-bold">{income}€</p>
                </div>
            </div>
        </div>
    )
}