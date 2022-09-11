import React from 'react'

function Search({ name, setName, handleSubmit }) {
    return (
        <div className="flex items-center mb-5">
            <div className="flex space-x-1">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="block w-full px-4 py-2 bg-white border rounded-full focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Search..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default Search