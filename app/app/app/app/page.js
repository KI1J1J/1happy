"use client";

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    pcNumber: '',
    windowNumber: '',
    userId: '',
    password: '',
    goodsCode: '',
    playDate: '',
    playSeq: '',
    isPreSale: false,
    isTwoDays: false,
    secondPlayDate: '',
    secondPlaySeq: '',
    hasCaptcha: false,
    preferLeft: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen p-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <h1 className="text-2xl font-bold mb-6">티켓팅 정보 입력</h1>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">PC 번호</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.pcNumber}
              onChange={(e) => setFormData({...formData, pcNumber: e.target.value})}
            />
          </div>
          <div>
            <label className="block mb-1">창 번호</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.windowNumber}
              onChange={(e) => setFormData({...formData, windowNumber: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">아이디</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={formData.userId}
            onChange={(e) => setFormData({...formData, userId: e.target.value})}
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          저장하기
        </button>
      </form>
    </main>
  );
}
