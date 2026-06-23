import TransactionForm from './TransactionForm'
import CategoryList from './CategoryList'
import Header from './Header'
import ExpensesIncomes from './ExpensesIncomes'
import Loading from './Loading'
import { useTransaction } from '../hooks/useTransaction'

export default function Dashboard() {
  // const [totalBudget, setTotalBudget] = useState(0);
  const totalBudget = 2600;
  const { transactions, spent, handleSubmit, income, loading } = useTransaction();

  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className="App">
      <div className="bg-gray-100 min-h-screen pb-20 font-mono">
        <Header totalBudget={totalBudget} spent={spent} income={income} />
        <CategoryList transactions={transactions}></CategoryList>
        <ExpensesIncomes transactions={transactions} />
        <TransactionForm onSubmit={handleSubmit} />
      </div>
    </div>
  )

}