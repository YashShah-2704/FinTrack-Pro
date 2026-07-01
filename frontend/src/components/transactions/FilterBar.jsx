function FilterBar({

    typeFilter,

    setTypeFilter,

    categoryFilter,

    setCategoryFilter,

    categories

}) {

    return (

        <div className="flex gap-4 flex-wrap">

            <select

                value={typeFilter}

                onChange={(e)=>setTypeFilter(e.target.value)}

                className="border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"

            >

                <option value="">

                    All Types

                </option>

                <option value="income">

                    Income

                </option>

                <option value="expense">

                    Expense

                </option>

            </select>

            <select

                value={categoryFilter}

                onChange={(e)=>setCategoryFilter(e.target.value)}

                className="border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"

            >

                <option value="">

                    All Categories

                </option>

                {

                    categories.map(category=>(

                        <option

                            key={category}

                            value={category}

                        >

                            {category}

                        </option>

                    ))

                }

            </select>

        </div>

    );

}

export default FilterBar;