import React, { useState } from 'react';

interface Product {
    id: number;
    image: string;
    name: string;
    paragraph: string;
    stock: number;
    color: string;
    price: number;
    rating: number;
    votes: number;
    isChecked: boolean;
}

const productsData: Product[] = [
    { id: 1, image: 'https://s3-alpha-sig.figma.com/img/1d5f/9bbf/ca018d7ba4909448f9a65a52b21e451e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdVeJQScZW9WFlk9K4w-aOEYezeNcCv-GVl5ckZZv2PauMSs~idf7RbKybvBbn1kuAyLYreUyApnAmRnsMQQTt8NOL9ehYy4n5IrznTs0eNC6OQyMY7o9Rtj7RFQYfHyB7qXVfhNH5ejnn9-VDjSZglTykZPrcWIvH7qjQ-SVKhuOqzAE3QQsSL24O8MFvMAy3aVb1FP0NU5X6MsBh9FHI92WfJywwV2q1LdO1PgHG-Yco5cHWtN17K3Z7Ip9kBYQbdrip~FCIvlOoxtv64-Ax-cuTpQaXRIHob5Lo38bmE72V6R4cEk8N2pl5asx9Slt~L1J2A77oGPIqhVjbWARA__', name: 'Abstract 3D Kit', paragraph: '3D Illustration', stock: 37, color: 'purple', price: 68, rating: 5.0, votes: 45, isChecked: false },
    { id: 2, image: 'https://s3-alpha-sig.figma.com/img/1d5f/9bbf/ca018d7ba4909448f9a65a52b21e451e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdVeJQScZW9WFlk9K4w-aOEYezeNcCv-GVl5ckZZv2PauMSs~idf7RbKybvBbn1kuAyLYreUyApnAmRnsMQQTt8NOL9ehYy4n5IrznTs0eNC6OQyMY7o9Rtj7RFQYfHyB7qXVfhNH5ejnn9-VDjSZglTykZPrcWIvH7qjQ-SVKhuOqzAE3QQsSL24O8MFvMAy3aVb1FP0NU5X6MsBh9FHI92WfJywwV2q1LdO1PgHG-Yco5cHWtN17K3Z7Ip9kBYQbdrip~FCIvlOoxtv64-Ax-cuTpQaXRIHob5Lo38bmE72V6R4cEk8N2pl5asx9Slt~L1J2A77oGPIqhVjbWARA__', name: 'Sapiens Illustration', paragraph: '3D Illustration', stock: 22, color: 'green', price: 68, rating: 4.8, votes: 45, isChecked: false },
    { id: 3, image: 'https://s3-alpha-sig.figma.com/img/1d5f/9bbf/ca018d7ba4909448f9a65a52b21e451e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdVeJQScZW9WFlk9K4w-aOEYezeNcCv-GVl5ckZZv2PauMSs~idf7RbKybvBbn1kuAyLYreUyApnAmRnsMQQTt8NOL9ehYy4n5IrznTs0eNC6OQyMY7o9Rtj7RFQYfHyB7qXVfhNH5ejnn9-VDjSZglTykZPrcWIvH7qjQ-SVKhuOqzAE3QQsSL24O8MFvMAy3aVb1FP0NU5X6MsBh9FHI92WfJywwV2q1LdO1PgHG-Yco5cHWtN17K3Z7Ip9kBYQbdrip~FCIvlOoxtv64-Ax-cuTpQaXRIHob5Lo38bmE72V6R4cEk8N2pl5asx9Slt~L1J2A77oGPIqhVjbWARA__', name: 'Collab Landing Page', paragraph: '3D Illustration', stock: 37, color: 'yellow', price: 32, rating: 5.0, votes: 45, isChecked: false },
    { id: 4, image: 'https://s3-alpha-sig.figma.com/img/1d5f/9bbf/ca018d7ba4909448f9a65a52b21e451e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdVeJQScZW9WFlk9K4w-aOEYezeNcCv-GVl5ckZZv2PauMSs~idf7RbKybvBbn1kuAyLYreUyApnAmRnsMQQTt8NOL9ehYy4n5IrznTs0eNC6OQyMY7o9Rtj7RFQYfHyB7qXVfhNH5ejnn9-VDjSZglTykZPrcWIvH7qjQ-SVKhuOqzAE3QQsSL24O8MFvMAy3aVb1FP0NU5X6MsBh9FHI92WfJywwV2q1LdO1PgHG-Yco5cHWtN17K3Z7Ip9kBYQbdrip~FCIvlOoxtv64-Ax-cuTpQaXRIHob5Lo38bmE72V6R4cEk8N2pl5asx9Slt~L1J2A77oGPIqhVjbWARA__', name: 'Abstract 3D Kit', paragraph: '3D Illustration', stock: 22, color: 'pink', price: 68, rating: 4.8, votes: 45, isChecked: false },
    { id: 5, image: 'https://s3-alpha-sig.figma.com/img/1d5f/9bbf/ca018d7ba4909448f9a65a52b21e451e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdVeJQScZW9WFlk9K4w-aOEYezeNcCv-GVl5ckZZv2PauMSs~idf7RbKybvBbn1kuAyLYreUyApnAmRnsMQQTt8NOL9ehYy4n5IrznTs0eNC6OQyMY7o9Rtj7RFQYfHyB7qXVfhNH5ejnn9-VDjSZglTykZPrcWIvH7qjQ-SVKhuOqzAE3QQsSL24O8MFvMAy3aVb1FP0NU5X6MsBh9FHI92WfJywwV2q1LdO1PgHG-Yco5cHWtN17K3Z7Ip9kBYQbdrip~FCIvlOoxtv64-Ax-cuTpQaXRIHob5Lo38bmE72V6R4cEk8N2pl5asx9Slt~L1J2A77oGPIqhVjbWARA__', name: 'Sapiens Illustration', paragraph: '3D Illustration', stock: 37, color: 'yellow', price: 68, rating: 5.0, votes: 45, isChecked: false },
    { id: 6, image: 'https://s3-alpha-sig.figma.com/img/1d5f/9bbf/ca018d7ba4909448f9a65a52b21e451e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdVeJQScZW9WFlk9K4w-aOEYezeNcCv-GVl5ckZZv2PauMSs~idf7RbKybvBbn1kuAyLYreUyApnAmRnsMQQTt8NOL9ehYy4n5IrznTs0eNC6OQyMY7o9Rtj7RFQYfHyB7qXVfhNH5ejnn9-VDjSZglTykZPrcWIvH7qjQ-SVKhuOqzAE3QQsSL24O8MFvMAy3aVb1FP0NU5X6MsBh9FHI92WfJywwV2q1LdO1PgHG-Yco5cHWtN17K3Z7Ip9kBYQbdrip~FCIvlOoxtv64-Ax-cuTpQaXRIHob5Lo38bmE72V6R4cEk8N2pl5asx9Slt~L1J2A77oGPIqhVjbWARA__', name: 'Abstract 3D Kit', paragraph: '3D Illustration', stock: 22, color: 'pink', price: 32, rating: 4.8, votes: 45, isChecked: false },
    { id: 7, image: 'https://s3-alpha-sig.figma.com/img/1d5f/9bbf/ca018d7ba4909448f9a65a52b21e451e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdVeJQScZW9WFlk9K4w-aOEYezeNcCv-GVl5ckZZv2PauMSs~idf7RbKybvBbn1kuAyLYreUyApnAmRnsMQQTt8NOL9ehYy4n5IrznTs0eNC6OQyMY7o9Rtj7RFQYfHyB7qXVfhNH5ejnn9-VDjSZglTykZPrcWIvH7qjQ-SVKhuOqzAE3QQsSL24O8MFvMAy3aVb1FP0NU5X6MsBh9FHI92WfJywwV2q1LdO1PgHG-Yco5cHWtN17K3Z7Ip9kBYQbdrip~FCIvlOoxtv64-Ax-cuTpQaXRIHob5Lo38bmE72V6R4cEk8N2pl5asx9Slt~L1J2A77oGPIqhVjbWARA__', name: 'Collab Landing Page', paragraph: '3D Illustration', stock: 37, color: 'purple', price: 32, rating: 4.8, votes: 45, isChecked: false },
    // Add more products as needed
];

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(productsData);
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

    const handleSelectAll = () => {
        const newSelectionState = !isAllSelected;
        setProducts(products.map(product => ({ ...product, isChecked: newSelectionState })));
        setIsAllSelected(newSelectionState);
    };

    const handleProductSelect = (id: number) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, isChecked: !product.isChecked } : product
        ));
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const [searchTerm, setSearchTerm] = useState<string>('');
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className=' p-4'>
            <div className=' flex flex-col lg:flex-row justify-between'>
                <div className=' w-full grid grid-cols-2 lg:w-[90%] lg:grid-cols-4 gap-3 mb-4'>
                    <select className=' p-4 rounded-lg border-2 border-solid border-gray-300'>
                        <option>Last 30 days</option>
                        {/* Add more options */}
                    </select>
                    <select className=' p-4 rounded-lg border-2 border-solid border-gray-300'>
                        <option>Aug 2020</option>
                        {/* Add more options */}
                    </select>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className=' p-2 rounded-lg border-2 border-solid border-gray-300'
                    />
                    <button className='py-2 px-4 text-white border-none rounded bg-indigo-500'>
                        Advance Search
                    </button>
                </div>
                <div className=' w-full lg:w-[10%] flex justify-center gap-3 items-center mb-4'>
                    <div>
                        <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/pencil--v1.png" alt="pencil--v1" />
                    </div>
                    <div className=' w-[48px] h-[48px] rounded-full shadow-2xl flex justify-center items-center'>
                        <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/trash.png" alt="trash" />
                    </div>
                </div>
            </div>
            <table className=' w-full border-collapse text-xs lg:text-base'>
                <thead>
                    <tr className=' text-left border-b-2 border-solid border-gray-300'>
                        <th>
                            <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll} />
                        </th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id} className='  border-b-2 border-solid py-5 border-gray-300' >
                            <td className=' my-2'>
                                <input
                                    type="checkbox"
                                    checked={product.isChecked}
                                    onChange={() => handleProductSelect(product.id)}
                                />
                            </td>
                            <td className=' my-2 flex gap-5 items-center'>
                                <div className=' w-[72px] h-[48px] lg:w-[96px] lg:h-[72px] rounded-xl flex justify-center items-center' style={{ backgroundColor: "rgba(160, 215, 231, 1)" }}>
                                    <img src={product.image} alt={product.name} className='w-[72px] h-[48px] lg:w-[96px] lg:h-[72px]' />
                                </div>
                                <div className=' text-black'>
                                    <p className=' text-base font-medium'>{product.name}</p>
                                    <p className=' text-sm text-gray-500'>{product.paragraph}</p>
                                </div>
                            </td>
                            <td className=' my-2'>{product.stock}</td>
                            <td className=' my-2'>
                                <div className={` w-[20px] h-[20px] bg-${product.color}-500 rounded-sm hidden lg:inline-block mr-2 translate-y-1`}></div>
                                <p className=' inline-block'>{product.color}</p>
                            </td>
                            <td className=' my-2'>${product.price.toFixed(2)}</td>
                            <td className=' my-2'>{product.rating} ({product.votes} votes)</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
