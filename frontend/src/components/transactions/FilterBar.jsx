function FilterBar({

    typeFilter,

    setTypeFilter,

    categoryFilter,

    setCategoryFilter,

    categories

}) {

    return (

        <div className="flex flex-wrap gap-4">

            <select

                value={typeFilter}

                onChange={(e)=>setTypeFilter(e.target.value)}

                className="border rounded-lg px-4 py-3"

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

                className="border rounded-lg px-4 py-3"

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