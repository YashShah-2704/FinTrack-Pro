function SummaryCard({

    title,

    value,

    color

}) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6 flex-1 hover:shadow-xl transition">

            <p className="text-gray-500 text-sm">

                {title}

            </p>

            <h2 className={`text-3xl font-bold mt-3 ${color}`}>

                {value}

            </h2>

        </div>

    );

}

export default SummaryCard;