import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    parentName: '',
    childAge: '',
    location: '',
    schedule: '',
    needs: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("신청이 접수되었습니다!\n우리가 시터와 매칭해드릴게요.");
    console.log("신청내용:", form);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>👶 부모용 돌봄 요청서</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input name="parentName" placeholder="부모 이름" value={form.parentName} onChange={handleChange} />
        <input name="childAge" placeholder="아이 나이 (예: 4세)" value={form.childAge} onChange={handleChange} />
        <input name="location" placeholder="지역 (예: Coquitlam)" value={form.location} onChange={handleChange} />
        <textarea name="schedule" placeholder="희망 시간대 (예: 평일 오후 3~6시)" value={form.schedule} onChange={handleChange}></textarea>
        <textarea name="needs" placeholder="특별한 요청사항 (예: 한국어 가능, 알러지 있음 등)" value={form.needs} onChange={handleChange}></textarea>
        <button onClick={handleSubmit}>신청하기</button>
      </div>
    </div>
  );
}