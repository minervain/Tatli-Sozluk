import React from 'react';
import '../Styles/Components/LeaderBoard.scss'

const Leaderboard = () => {
 

  return (
    

<div className=" overflow-x-auto leaderBoardContain">
    <table className=" text-sm text-left rtl:text-right text-gray-100 dark:text-gray-100">
        <thead className="text-xs text-gray-700  dark:text-gray-100 leaderboard">
            <tr>
                <th scope="col" className="px-6 py-3 ">
                    Liderlerin isimleri
                </th>
                <th scope="col" className="px-6 py-3">
                    Sıralama
                </th>
                <th scope="col" className="px-6 py-3 ">
                    MEMLEKET
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       Ali Osman
                </th>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    TOKAT
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Ali Osman
                </th>
                <td className="px-6 py-4">
                    2
                </td>
                <td className="px-6 py-4">
                TOKAT
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Ali Osman
                </th>
                <td className="px-6 py-4">
                   3
                </td>
                <td className="px-6 py-4">
                    TOKAT
                </td>
            </tr>
        </tbody>
      
    </table>
</div>

  );
};

export default Leaderboard;
