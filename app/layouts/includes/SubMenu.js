"use client"


export default function SubMenu() {

    const menuItems = [
        { id: 1, name: 'Saved' },
        { id: 2, name: 'Motors' },
        { id: 3, name: 'Trading Cards' },
        { id: 4, name: 'Collectibles' },
        { id: 5, name: 'Sneakers' },
        { id: 6, name: 'Refurbished' },
        { id: 7, name: 'Fashion' },
        { id: 8, name: 'Electronics' },
        { id: 9, name: 'Sporting Goods' },
        { id: 10, name: 'Toys & Hobbies' },
        { id: 11, name: 'Business & Industrial' },
        { id: 12, name: 'Home & Garden' },
    ]
    return (
        <div id="TopMenu" className="border-b">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <ul id="TopMenuLeft" className="flex items-center text-[13px] text-[#333333] px-2 h-8">
                    {menuItems.map(item => (
                        <li key={item.id} className="px-3 hover:underline cursor-pointer">
                            {item.name}
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}