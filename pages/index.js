
import { useState } from 'react';

function ParentForm() {
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
    console.log("부모 신청내용:", form);
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

function SitterForm() {
  const [form, setForm] = useState({
    sitterName: '',
    experience: '',
    languages: '',
    availableTime: '',
    location: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("시터 등록이 완료되었습니다!");
    console.log("시터 정보:", form);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '2rem auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>🧑‍🏫 시터 등록 신청서</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input name="sitterName" placeholder="이름" value={form.sitterName} onChange={handleChange} />
        <textarea name="experience" placeholder="경력 및 자격 (예: 보육교사 자격증, 유아 교육 전공 등)" value={form.experience} onChange={handleChange}></textarea>
        <input name="languages" placeholder="가능한 언어 (예: 영어, 한국어 등)" value={form.languages} onChange={handleChange} />
        <textarea name="availableTime" placeholder="가능한 요일 및 시간대" value={form.availableTime} onChange={handleChange}></textarea>
        <input name="location" placeholder="근무 가능 지역 (예: Burnaby, Coquitlam 등)" value={form.location} onChange={handleChange} />
        <button onClick={handleSubmit}>등록하기</button>
      </div>
    </div>
  );
}

export default function ChildcareMVP() {
  return (
    <>
      <ParentForm />
      <SitterForm />
    </>
  );
}
