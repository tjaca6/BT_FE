import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="bg-gray-100 min-h-screen pb-20 font-mono justify-center flex items-center">
            <div className="text-center">
                <h1 className="text-7xl font-bold">404</h1>
                <h3 className="mb-3">Page not found!</h3>
                <Link to="/" className="rounded-3xl px-5 py-2 bg-gray-700 text-white hover:bg-gray-800">Return to dashboard</Link>
            </div>
        </div>

    )
}