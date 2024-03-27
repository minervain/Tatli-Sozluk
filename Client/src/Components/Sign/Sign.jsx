    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    export default function Sign() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();

        const handleUsernameChange = (event) => {
            setUsername(event.target.value);
        };

        const handlePasswordChange = (event) => {
            setPassword(event.target.value);
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Kullanıcı adı:', username);
            console.log('Şifre:', password);
            // Burada kayıt işlemi gerçekleştirilebilir
            // Kayıt işlemi başarıyla gerçekleştirildiğinde kullanıcıyı başka bir sayfaya yönlendir
            navigate('/login'); // Örneğin, kayıt işlemi başarıyla gerçekleştirildikten sonra giriş sayfasına yönlendir
        };

        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Kayıt Ol</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">Kullanıcı Adı</label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    value={username}
                                    onChange={handleUsernameChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Kullanıcı Adı"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Şifre</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Şifre"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Kayıt Ol
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
