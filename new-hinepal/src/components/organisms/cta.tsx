import Link from "next/link"

export default function Cta() {
    return (
        <div className="mt-12 bg-linear-to-r from-green-500 to-green-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Next Adventure?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Discover more amazing treks and expeditions in Nepal. Let us help you plan your perfect mountain
                adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/booking"
                    prefetch={false}
                    className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                    Plan Your Trek
                </Link>
                <Link
                    href="/blogs"
                    prefetch={false}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
                >
                    Read More Stories
                </Link>
            </div>
        </div>
    )
}