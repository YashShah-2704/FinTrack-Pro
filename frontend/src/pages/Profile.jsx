import MainLayout from "../components/layout/MainLayout";

function Profile() {

    return (

        <MainLayout>

            <div className="bg-white rounded-xl shadow-md p-8">

                <h1 className="text-3xl font-bold mb-2">

                    Profile

                </h1>

                <p className="text-gray-500 mb-8">

                    Manage your account information.

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>

                        <label className="block text-sm font-medium mb-2">

                            Full Name

                        </label>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-lg px-4 py-3"
                        />

                    </div>

                    <div>

                        <label className="block text-sm font-medium mb-2">

                            Email

                        </label>

                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full border rounded-lg px-4 py-3"
                        />

                    </div>

                </div>

                <button
                    className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >

                    Save Changes

                </button>

            </div>

        </MainLayout>

    );

}

export default Profile;